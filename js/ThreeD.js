import * as THREE from 'three'
import sphereFrag from '../shaders/sphere/sphereFrag.glsl'
import sphereHead from '../shaders/sphere/sphereHead.glsl'
import RAPIER from '@dimforge/rapier3d-compat'
import { getRandomNumber, mapClamp, hexToRgb, rgbaToArray } from './utils'
import Sphere from './sphere'
import { MarchingCubes } from 'three/examples/jsm/Addons.js'

const clamp = (num, min, max) => Math.min(Math.max(num, min), max)

const glsl = (x) => x

function sRGBToLinear(hex) {
    let c = new THREE.Color(...hexToRgb(hex))
    return c
}

class ThreeD {
    constructor(pixelRatio, tier, app) {
        //lets set up our three.js scene
        this.app = app
        this.height = window.innerHeight
        this.width = window.innerWidth
        this.scene = new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera(
            20,
            this.width / this.height,
            0.1,
            1000
        )
        this.camera.position.z = 10 // Set camera position to view the object
        this.bbox = new THREE.Vector3()
        this.isMobile = tier.isMobile
        this.mouse = new THREE.Vector3(0, 0, 0)

        this.renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: tier.tier > 2 ? true : false,
        })
        this.renderer.setSize(this.width, this.height)
        this.renderer.setPixelRatio(pixelRatio)
        this.renderer.setClearColor(0x00000000, 0) // Set background color to black
        this.renderer.sortObjects = false
        this.renderer.autoClear = false
        this.canvas = this.renderer.domElement
        this.velocity = new THREE.Vector3()
        this.vectorUtil = new THREE.Vector3()
        this.vHeight = 0
        this.sphereOpacity = 1.0

        this.clock = new THREE.Clock()

        this.material = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            flatShading: false,
            transparent: true,
            opacity: 0.5,
            vertexColors: true,
            depthTest: false,
        })

        this.sphereRad = 2
        this.geo = new THREE.IcosahedronGeometry(this.sphereRad, 6)

        this.mesh = new THREE.Mesh(this.geo, this.createMaterial(this.material))

        // Create 8 smaller spheres
        this.smallSpheres = []
        this.smallSphereRadius = 0.3
        this.orbitRadius = 1
        this.orbitSpeed = 0.1
        this.group = new THREE.Group()
        this.lightGroup = new THREE.Group()

        this.scene.add(this.group)
        this.scene.add(this.lightGroup)
        // this.group.add(this.mesh)

        this.camera.position.z = 10
        this.time = 0

        this.domEl = this.app.canvasContainer.appendChild(
            this.renderer.domElement
        )
        this.domEl.style.zIndex = 10000
        this.domEl.style.position = 'fixed'
        this.domEl.style.top = 0

        this.lightTop = new THREE.RectAreaLight(0xffffff, 2.0, 25, 25)
        this.lightTop.lookAt(0, 0, 0)
        this.lightBack = new THREE.PointLight(0xffffff, 10000)
        this.lightGroup.add(this.lightTop)
        //this.lightGroup.add(this.lightBack)
        this.lightTop.position.set(0, -20, 40)
        this.lightBack.position.set(0, 20, -50)
        // Add lighting
        const width = 40
        const height = 40
        const intensity = 3.5
        const light = new THREE.RectAreaLight(
            0xffffff,
            intensity,
            width,
            height
        )
        light.position.set(0, -40, 0)
        light.lookAt(0, 0, 0)
        this.lightGroup.add(light)

        const bbox = new THREE.Box3().setFromObject(this.mesh)
        this.bboxMin = bbox.min
        this.bboxMax = bbox.max

        this.frontMat = this.createMaterial(this.material)

        this.metaballs = new MarchingCubes(
            80,
            this.frontMat,
            false,
            true,
            100000
        )
        this.metaScale = 4.2
        this.metaballs.scale.setScalar(this.metaScale)
        this.metaballs.isolation = 20
        this.metaSub = 1 // lightness
        this.scene.add(this.metaballs)

        this.backMat = this.createMaterial(this.material, THREE.BackSide)

        this.colDark = sRGBToLinear('#2F3720')
        this.colMid = sRGBToLinear('#F0C464')
        this.colLight = sRGBToLinear('#FCF6E1')
        this.colGlow = sRGBToLinear('#C38B38')
        this.lightRot = { z: 0.0, x: 0.0 }

        RAPIER.init()
            .then(() => {
                this.world = new RAPIER.World({ x: 0, y: 0, z: 0 })

                this.mouseBody =
                    RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(
                        0,
                        0,
                        0
                    )
                this.mouseRigid = this.world.createRigidBody(this.mouseBody)
                this.mouseRigid.setRotation(
                    {
                        w: Math.cos(Math.PI / 4),
                        x: Math.sin(Math.PI / 4),
                        y: 0.0,
                        z: 0.0,
                    },
                    true
                )
                this.dynamicCollider = RAPIER.ColliderDesc.cylinder(100, 0.5)

                this.world.createCollider(this.dynamicCollider, this.mouseRigid)

                const debugMouseGeometry = new THREE.CylinderGeometry(
                    0.25,
                    0.25,
                    10,
                    8,
                    1
                )
                const debugMouseMaterial = new THREE.MeshBasicMaterial({
                    color: 0xff0000,
                })
                this.debugMouse = new THREE.Mesh(
                    debugMouseGeometry,
                    debugMouseMaterial
                )
                this.debugMouse.rotation.set(Math.PI / 2, 0, 0)
                // this.scene.add(this.debugMouse)

                // CreateSpheres
                for (let i = 0; i < 6; i++) {
                    let x = getRandomNumber(-this.orbitRadius, this.orbitRadius)
                    let y = getRandomNumber(-this.orbitRadius, this.orbitRadius)
                    let z = getRandomNumber(-this.orbitRadius, this.orbitRadius)
                    let size = getRandomNumber(0.8, 1.3)
                    let density = mapClamp(size, 0.5, 1, 5, 2)
                    let sphere = new Sphere(
                        size * this.smallSphereRadius,
                        this.createMaterial(this.material),
                        this.group,
                        { x, y, z },
                        density,
                        this.world,
                        this.colLight,
                        this.colGlow
                    )
                    sphere.init()
                    this.smallSpheres.push(sphere)
                }

                // Start the render loop
                this.animate()
            })
            .catch((error) => {
                console.error('Error loading RAPIER:', error)
            })
    }

    createMaterial(baseMaterial, side = THREE.FrontSide) {
        const material = baseMaterial.clone()
        material.side = side

        material.onBeforeCompile = (shader) => {
            shader.uniforms.offset = { value: 0.0 } // Add the new uniform offset
            shader.uniforms.bboxMin = { value: this.bboxMin.clone() }
            shader.uniforms.bboxMax = { value: this.bboxMax.clone() }
            shader.uniforms.minOpacity = { value: 0 }
            shader.uniforms.maxOpacity = { value: 1.0 }
            shader.uniforms.inOpacity = { value: 1.0 }
            shader.uniforms.fresnelScale = { value: 1.0 }
            shader.uniforms.maxRadius = { value: this.sphereRad * 2 }
            // Add color uniforms
            shader.uniforms.colDark = { value: this.colDark }
            shader.uniforms.colMid = { value: this.colMid }
            shader.uniforms.colLight = { value: this.colLight }
            shader.uniforms.colGlow = { value: this.colGlow }
            shader.uniforms.isBack = { value: material.side }

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
                vScaleFactor = color.b;
                `
                )

            shader.fragmentShader = shader.fragmentShader
                .replace(
                    '#include <uv_pars_fragment>',
                    glsl`
                varying vec2 vUv;
                varying vec3 vLocalPosition;
                uniform vec3 bboxMin;
                uniform vec3 bboxMax;
                uniform vec3 colDark;
                uniform vec3 colMid;
                uniform vec3 colLight;
                uniform vec3 colGlow;
                uniform float minOpacity;
                uniform float maxOpacity;
                uniform float inOpacity;
                uniform float maxRadius;
                uniform float fresnelScale;
                uniform float offset;
                uniform float isBack;
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
                .replace('#include <dithering_fragment>', sphereFrag)
            material.userData.shader = shader
        }

        return material
    }

    onMouseMove(x, y) {
        this.lightRot.z = mapClamp(
            x,
            -1,
            1,
            THREE.MathUtils.degToRad(-90),
            THREE.MathUtils.degToRad(90)
        )
        this.lightRot.x = -mapClamp(
            y,
            -1,
            1,
            THREE.MathUtils.degToRad(-20),
            THREE.MathUtils.degToRad(180)
        )
        this.mouse = this.screenToPos(x, y)
        if (isNaN(this.mouse.x) || isNaN(this.mouse.y) || isNaN(this.mouse.z)) {
            console.error('Invalid mouse position:', this.mouse)
            this.mouse = new THREE.Vector3(0, 0, 0)
        }
    }

    setPixelRatio(pixelRatio) {
        this.renderer.setPixelRatio(pixelRatio)
    }

    screenToPos(x, y) {
        this.vectorUtil.set(x, y, 0)
        this.vectorUtil.unproject(this.camera)
        var dir = this.vectorUtil.sub(this.camera.position).normalize()
        var distance = -this.camera.position.z / dir.z
        var pos = this.camera.position.clone().add(dir.multiplyScalar(distance))
        return pos
    }

    init() {
        this.renderer.render(this.scene, this.camera)
        this.metaballs.material = this.backMat
        this.renderer.render(this.scene, this.camera)
        // this.mesh.geometry.computeBoundingBox()
        // this.move({ range: 0, x: 0, y: 0, size: 20, rotation: 0, rotRange: 1}, {x: 0, y:0});
        this.animate()
        this.render()
    }

    setScale(size) {
        let dist = this.camera.position.distanceTo(this.group.position)
        let vFOV = (this.camera.fov * Math.PI) / 180 // convert vertical fov to radians
        this.vHeight = 2 * Math.tan(vFOV / 2) * dist // visible height
        this.group.scale.x = this.vHeight * (size / this.height)
        this.group.scale.y = this.vHeight * (size / this.height)
        this.group.scale.z = this.vHeight * (size / this.height)
    }

    metaPos(pos) {
        //Marching cubes use a different coordinate system
        //Transforms the three.js vector position to the metaball coordinate system
        let metaOffset = new THREE.Vector3(0.5, 0.5, 0.5)
        return pos
            .clone()
            .multiplyScalar(1 / this.metaScale / 2)
            .add(metaOffset)
    }

    metaRad(scale) {
        return scale / this.metaScale
    }

    animSpheres(axes) {
        // this.setScale(axes.size)

        // smoothly lerp lights on mouse move
        this.lightGroup.rotation.z = THREE.MathUtils.lerp(
            this.lightGroup.rotation.z,
            this.lightRot.z,
            0.1
        )
        this.lightGroup.rotation.x = THREE.MathUtils.lerp(
            this.lightGroup.rotation.x,
            this.lightRot.x,
            0.1
        )

        // Check if this.world is initialized
        if (this.world) {
            // Step the RAPIER physics world
            // Update bounding box uniforms for metaballs
            // Update bounding box uniforms for metaballs
            let bboxMin = this.bboxMin
                .clone()
                .multiplyScalar(1 / this.metaScale)
            let bboxMax = this.bboxMax
                .clone()
                .multiplyScalar(1 / this.metaScale)

            if (this.metaballs.material.userData.shader) {
                this.metaballs.material.userData.shader.uniforms.bboxMin.value.copy(
                    bboxMin
                )
                this.metaballs.material.userData.shader.uniforms.bboxMax.value.copy(
                    bboxMax
                )
                this.sphereOpacity = THREE.MathUtils.lerp(
                    this.sphereOpacity,
                    1.0 - axes.opacity * 0.25,
                    0.01
                )
            }

            this.world.step()

            this.metaballs.reset()

            // Sync the positions of the small spheres with their RAPIER bodies
            this.smallSpheres.forEach((sphere, index) => {
                sphere.update(axes, this.camera)
                let scaledPos = this.metaPos(sphere.sphere.position)
                let scaleFactor = mapClamp(
                    sphere.distancefromOrigin,
                    1.2,
                    1.8,
                    0,
                    1
                )
                let opFactor = mapClamp(
                    sphere.distancefromOrigin,
                    0.8,
                    1.5,
                    0,
                    1
                )
                //console.log(1.0 - scaleFactor)
                this.metaballs.addBall(
                    scaledPos.x,
                    scaledPos.y,
                    scaledPos.z,
                    (this.metaRad(sphere.radius) / 3) * (1.0 - scaleFactor),
                    this.metaSub,
                    new THREE.Color(1.0, 1.0, opFactor)
                )
            })

            let scaledPos = this.metaPos(this.mesh.position)
            this.metaballs.addBall(
                scaledPos.x,
                scaledPos.y,
                scaledPos.z,
                this.metaRad(this.sphereRad),
                1,
                new THREE.Color(1.0, 1.0, 0.0)
            )

            this.metaballs.update()

            if (this.mouseRigid) {
                const currentPos = this.mouseRigid.translation()
                const targetPos = this.mouse
                const lerpFactor = 0.2 // Adjust the lerp factor as needed (0.1 means 10% of the way each frame)
                const newPos = new THREE.Vector3().lerpVectors(
                    currentPos,
                    targetPos,
                    lerpFactor
                )
                this.mouseRigid.setTranslation(newPos)

                const position = this.mouseRigid.translation()
                // Update the debug sphere position
                this.debugMouse.position.set(position.x, position.y, position.z)
            }
        } else {
            console.error('RAPIER world is not initialized.')
        }
    }

    render() {
        this.metaballs.layers.set(0)
        this.smallSpheres.forEach((sphere) => {
            if (sphere && sphere.sphere) {
                sphere.sphere.layers.set(1)
            }
        })

        if (this.metaballs.material.userData.shader) {
            this.metaballs.material = this.backMat
            this.metaballs.material.userData.shader.uniforms.maxRadius.value =
                this.sphereRad * 0.63 * (1 / this.metaScale)
            this.metaballs.material.userData.shader.uniforms.minOpacity.value = 1
            this.metaballs.material.userData.shader.uniforms.colGlow.value =
                this.colGlow
            this.metaballs.material.userData.shader.uniforms.offset.value = 0.0

            this.renderer.render(this.scene, this.camera)
            this.metaballs.material = this.frontMat
            this.metaballs.material.userData.shader.uniforms.fresnelScale.value = 1.0
            this.metaballs.material.userData.shader.uniforms.maxRadius.value =
                this.sphereRad * 0.65 * (1 / this.metaScale)
            this.metaballs.material.userData.shader.uniforms.minOpacity.value = 1
            this.metaballs.material.userData.shader.uniforms.colGlow.value =
                this.colGlow
            this.metaballs.material.userData.shader.uniforms.offset.value = 0.03
            this.frontMat.userData.shader.uniforms.inOpacity.value = 1.0
            this.renderer.autoClear = false

            this.renderer.render(this.scene, this.camera)
            this.metaballs.material = this.frontMat
            this.metaballs.material.userData.shader.uniforms.fresnelScale.value = 1.0
            this.metaballs.material.userData.shader.uniforms.maxRadius.value =
                this.sphereRad * 0.63 * (1 / this.metaScale)
            this.metaballs.material.userData.shader.uniforms.minOpacity.value = 0
            this.metaballs.material.userData.shader.uniforms.colGlow.value =
                this.colLight
            this.metaballs.material.userData.shader.uniforms.offset.value = 0.0

            this.frontMat.userData.shader.uniforms.inOpacity.value =
                this.sphereOpacity
        }

        this.renderer.clearDepth()
        this.metaballs.layers.set(1)

        this.smallSpheres.forEach((sphere) => {
            if (sphere && sphere.sphere) {
                sphere.sphere.layers.set(0)
            }
        })

        this.camera.layers.set(0)
        this.renderer.render(this.scene, this.camera)

        this.smallSpheres.forEach((sphere) => {
            if (sphere && sphere.sphere) {
                sphere.sphere.layers.set(1)
            }
        })

        this.metaballs.layers.set(0)
        this.renderer.clearDepth()
        this.renderer.render(this.scene, this.camera)
        this.renderer.autoClear = true
    }

    onWindowResize() {
        this.height = window.innerHeight
        this.width = window.innerWidth
        this.camera.aspect = this.width / this.height
        this.camera.updateProjectionMatrix()
        this.renderer.setSize(this.width, this.height)
    }

    animate() {
        let axes = this.app.getTimelineValues()
        this.animSpheres(axes)
        this.render()
        requestAnimationFrame(this.animate.bind(this))
    }
}

export default ThreeD
