import * as THREE from 'three'
import sphereHead from '../shaders/sphere/sphereHead.glsl'
import smlSphereFrag from '../shaders/sphere/smlSphereFrag.glsl'

const glsl = (x) => x

export function smlSphereMat(
    baseMaterial,
    colDark,
    colMid,
    colLight,
    colGlow,
    sphereRad,
    side = THREE.FrontSide
) {
    const material = baseMaterial.clone()
    material.side = side

    material.onBeforeCompile = (shader) => {
        shader.uniforms.offset = { value: 0.0 } // Add the new uniform offset
        shader.uniforms.minOpacity = { value: 0 }
        shader.uniforms.maxOpacity = { value: 0.0 }
        shader.uniforms.inOpacity = { value: 1.0 }
        shader.uniforms.fresnelScale = { value: 1.0 }
        // Add color uniforms
        shader.uniforms.colDark = { value: colDark }
        shader.uniforms.colMid = { value: colMid }
        shader.uniforms.colLight = { value: colLight }
        shader.uniforms.colGlow = { value: colGlow }
        shader.uniforms.isSwitch = { value: 0 }

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
                varying float vScaleFactor;
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
                vLocalPosition = offsetPosition;
                `
            )

        shader.fragmentShader = shader.fragmentShader
            .replace(
                '#include <uv_pars_fragment>',
                glsl`
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
                uniform float isSwitch;
                varying float vSharpness;
                varying float vScaleFactor;

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
            .replace('#include <dithering_fragment>', smlSphereFrag)
        material.userData.shader = shader
    }

    return material
}
