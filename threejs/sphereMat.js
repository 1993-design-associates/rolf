import * as THREE from 'three'
import sphereHead from '../shaders/sphere/sphereHead.glsl'
import sphereFrag from '../shaders/sphere/sphereFrag.glsl'

const glsl = (x) => x

export function sphereMaterial(
    baseMaterial,
    colDark,
    colMid,
    colLight,
    colGlow,
    sphereRad,
    side = THREE.FrontSide,
    numSmallSpheres = 12
) {
    const material = baseMaterial.clone()
    material.side = side
    const smallSpheresData = Array.from({ length: numSmallSpheres }, () => new THREE.Vector4(0, 0, 0, 0));
    console.log(material.side)

    material.onBeforeCompile = (shader) => {
        shader.uniforms.offset = { value: 0.0 } // Add the new uniform offset
        shader.uniforms.minOpacity = { value: 0 }
        shader.uniforms.maxOpacity = { value: 1.0 }
        shader.uniforms.inOpacity = { value: 1.0 }
        shader.uniforms.fresnelScale = { value: 1.0 }
        // Add color uniforms
        shader.uniforms.colDark = { value: colDark }
        shader.uniforms.colMid = { value: colMid }
        shader.uniforms.colLight = { value: colLight }
        shader.uniforms.colGlow = { value: colGlow }
        shader.uniforms.isBack = { value: material.side }


        // pass the size and position of the small Spheres to fragment shader
        // Define the smallSpheres uniform array with a maximum size
        shader.uniforms.smallSpheres = { value:  smallSpheresData}
        shader.uniforms.numSmallSpheres = { value: 6 }

        shader.vertexShader = shader.vertexShader
            .replace(
                '#include <uv_pars_vertex>',
                `
                #include <uv_pars_vertex>
                ${sphereHead}
                varying vec2 vUv;
                varying vec3 vLocalPosition;
                uniform float offset;
                varying vec3 offsetPosition;
                varying float vProximity;
                uniform vec4 smallSpheres[${numSmallSpheres}]; // Maximum size of 100
                uniform int numSmallSpheres;    // Actual number of small spheres
                `
            )
            .replace(
                '#include <begin_vertex>',
                glsl`
                #include <begin_vertex>
                vUv = uv;
                vec3 offsetDir = normalize(position);

                offsetPosition = position + offsetDir * offset;
                transformed = offsetPosition;
                vProximity = 0.0;

                // Offset vertices based on proximity to small spheres
                for (int i = 0; i < numSmallSpheres; i++) {
                    vec3 spherePos = smallSpheres[i].xyz;
                    float sphereRadius = smallSpheres[i].w;

                    // Calculate the distance from the vertex to the sphere center
                    float distance = length(offsetPosition - spherePos);

                    // Calculate the offset factor using smoothstep
                    float offsetFactor = pow(smoothstep(sphereRadius*4.0, 0.0, distance), 2.0); // Adjust the offset strength as needed

                    float proximity =  smoothstep(sphereRadius*4.0, 0.0, distance);
                    // Calculate the direction to move the vertex away from the main sphere center
                    vec3 direction = normalize(offsetPosition);
                    vProximity = max(vProximity, proximity); // Store the maximum offset factor for the vertex
                    // Apply the offset
                    transformed += direction * ( offsetFactor) ; // Adjust the offset strength as needed
                }
                vLocalPosition = transformed;
                `
            )

        shader.fragmentShader = shader.fragmentShader
            .replace(
                '#include <uv_pars_fragment>',
                `
                varying vec2 vUv;
                varying vec3 vLocalPosition;
                uniform vec3 colDark;
                uniform vec3 colMid;
                uniform vec3 colLight;
                uniform vec3 colGlow;
                uniform float minOpacity;
                uniform float maxOpacity;
                uniform float inOpacity;
                uniform float fresnelScale;
                uniform float offset;
                uniform float isBack;
                uniform vec4 smallSpheres[${numSmallSpheres}]; // Maximum size of 12
                uniform int numSmallSpheres;    // Actual number of small spheres
                varying float vSharpness;
                varying float vProximity;

                struct ColorStop {
                    float position;
                    vec3 color;
                };
                
                vec3 ColorRamp(ColorStop colors[4], int numColors, float factor) {
                    int index = 0;
                    for (int i = 0; i < numColors - 1; i++) {
                        ColorStop currentColor = colors[i];
                        ColorStop nextColor = colors[i + 1];
                        bool isInBetween = factor >= currentColor.position && factor <= nextColor.position;
                        index = isInBetween ? i : index;
                    }
                    
                    ColorStop currentColor = colors[index];
                    ColorStop nextColor = colors[index + 1];
                
                    float range = nextColor.position - currentColor.position;
                    float lerpFactor = (factor - currentColor.position) / range;
                    lerpFactor = clamp(lerpFactor, 0.0, 1.0);
                    return mix(currentColor.color, nextColor.color, lerpFactor);
                }
                `
            )
            .replace('#include <dithering_fragment>', sphereFrag)
        material.userData.shader = shader
    }

    return material
}
