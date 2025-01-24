import * as THREE from 'three'
import RAPIER from '@dimforge/rapier3d-compat'
import { getRandomNumber, mapClamp, hexToRgb, isElementInView } from './utils'
import Sphere from './sphere'
import { sphereMaterial } from './sphereMat.js'
import { smlSphereMat } from './smlSphereMat.js'

import GUI from 'lil-gui'
import Stats from 'stats.js'

const clamp = (num, min, max) => Math.min(Math.max(num, min), max)

function sRGBToLinear(hex) {
    let c = new THREE.Color(...hexToRgb(hex))
    return c
}

const COLORS = {
    color1: '#2F3720',
    color2: '#F0C464',
    color3: '#FCF6E1',
    color4: '#C38B38',
}

//TBC remove this code
const LOCAL_STORAGE_KEY = 'guiSphere'

// Initialize the numberOfSmallSpheres to store the value
const numberOfSmallSpheres = {
    number: 9, // Default value
}

// Check if the value is already stored in localStorage
if (localStorage.getItem(LOCAL_STORAGE_KEY)) {
    numberOfSmallSpheres.number = parseFloat(
        localStorage.getItem(LOCAL_STORAGE_KEY)
    )
}

class ThreeD {
    constructor(pixelRatio, tier, app) {
        //lets set up our three.js scene

        this.frames = []
        this.pixelRatio = pixelRatio
        this.numSmallSpheres = tier.tier > 2 ? numberOfSmallSpheres.number : 6

        this.colDark = sRGBToLinear(COLORS.color1) //Dark
        this.colMid = sRGBToLinear(COLORS.color2) //Light Gold
        this.colLight = sRGBToLinear(COLORS.color3) //Cream
        this.colGlow = sRGBToLinear(COLORS.color4) //Darker Gold

        this.app = app
        this.height = window.innerHeight
        this.width = window.innerWidth
        this.scene = new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera(
            32,
            this.width / this.height,
            0.1,
            1000
        )
        this.camera.position.z = 30 // Set camera position to view the object
        // this.bbox = new THREE.Box3(
        //     new THREE.Vector3(-1, -1, -1),
        //     new THREE.Vector3(1, 1, 1)
        // )
        //this.isMobile = tier.isMobile
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
        //this.canvas = this.renderer.domElement
        //this.velocity = new THREE.Vector3()
        this.vectorUtil = new THREE.Vector3()
        //this.vHeight = 0
        this.sphereOpacity = 1.0

        //this.clock = new THREE.Clock()

        this.material = new THREE.MeshStandardMaterial({
            color: new THREE.Color(1.0, 0.0, 0.0),
            flatShading: false,
            transparent: true,
            opacity: 0.5,
            vertexColors: false,
            depthTest: false,
        })

        this.frontMat = sphereMaterial(
            this.material,
            this.colDark,
            this.colMid,
            this.colLight,
            this.colGlow,
            this.sphereRad,
            THREE.FrontSide,
            this.numSmallSpheres
        )

        this.sphereRad = 1.8
        this.geo = new THREE.IcosahedronGeometry(this.sphereRad, 32)

        this.metaballs = new THREE.Mesh(this.geo, this.frontMat)

        // Create smaller spheres
        this.smallSpheres = []
        this.smallSphereRadius = 0.3
        this.orbitRadius = 1
        this.orbitSpeed = 0.1
        this.group = new THREE.Group()
        this.lightGroup = new THREE.Group()

        this.scene.add(this.group)
        this.scene.add(this.lightGroup)
        this.group.add(this.metaballs)

        //this.camera.position.z = 10
        //this.time = 0

        this.domEl = this.app.canvasContainer.appendChild(
            this.renderer.domElement
        )
        // this.domEl.style.zIndex = 10000
        // this.domEl.style.position = '-webkit-sticky'
        // this.domEl.style.top = 0

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

        this.backMat = sphereMaterial(
            this.material,
            this.colDark,
            this.colMid,
            this.colLight,
            this.colGlow,
            3,
            THREE.BackSide,
            this.numSmallSpheres
        )

        this.lightRot = { z: 0.0, x: 0.0 }

        RAPIER.init()
            .then(() => {
                this.world = new RAPIER.World({ x: 0, y: 0, z: 0 })

                this.mouseBody = RAPIER.RigidBodyDesc.kinematicPositionBased()
                    .setTranslation(0, 0, 0)
                    .setCcdEnabled(true)
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
                    .setRestitution(1)
                    .setFriction(0)

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
                //this.scene.add(this.debugMouse)
                // CreateSpheres
                for (let i = 0; i < this.numSmallSpheres; i++) {
                    let x = getRandomNumber(-this.orbitRadius, this.orbitRadius)
                    let y = getRandomNumber(-this.orbitRadius, this.orbitRadius)
                    let z = getRandomNumber(-this.orbitRadius, this.orbitRadius)
                    let size = getRandomNumber(0.8, 1.8)
                    let density = mapClamp(size, 0.45, 1, 5, 2)
                    let sphere = new Sphere(
                        size * this.smallSphereRadius,
                        smlSphereMat(
                            this.material,
                            this.colDark,
                            this.colMid,
                            this.colLight,
                            this.colGlow,
                            this.sphereRad
                        ),
                        this.group,
                        { x, y, z },
                        density,
                        this.world,
                        this.colLight,
                        this.colGlow,
                        this.sphereRad * 0.8
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

    onMouseMove(x, y) {
        this.lightRot.z = mapClamp(
            x,
            -1,
            1,
            THREE.MathUtils.degToRad(-45),
            THREE.MathUtils.degToRad(45)
        )
        this.lightRot.x = -mapClamp(
            y,
            -1,
            1,
            THREE.MathUtils.degToRad(-5),
            THREE.MathUtils.degToRad(15)
        )
        this.mouse = this.screenToPos(x, y)
        if (isNaN(this.mouse.x) || isNaN(this.mouse.y) || isNaN(this.mouse.z)) {
            console.error('Invalid mouse position:', this.mouse)
            this.mouse = new THREE.Vector3(0, 0, 0)
        }
    }

    setPixelRatio(pixelRatio) {
        //console.log('Setting pixel ratio', pixelRatio)
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
        this.initStatAndGUI()

        this.renderer.render(this.scene, this.camera)
        this.metaballs.material = this.backMat
        // TBC - redundant renderer?
        //this.renderer.render(this.scene, this.camera)
        this.metaballs.geometry.computeBoundingBox()
        // this.move({ range: 0, x: 0, y: 0, size: 20, rotation: 0, rotRange: 1}, {x: 0, y:0});
        this.animate()
        this.render()
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
        // smoothly lerp lights on mouse move
        this.lightGroup.rotation.z = THREE.MathUtils.lerp(
            this.lightGroup.rotation.z,
            this.lightRot.z,
            0.05
        )
        this.lightGroup.rotation.x = THREE.MathUtils.lerp(
            this.lightGroup.rotation.x,
            this.lightRot.x,
            0.1
        )

        // Check if this.world is initialized
        if (this.world) {
            // Step the RAPIER physics world

            this.world.step()

            // this.metaballs.reset()

            let cStep = clamp(axes.step, 0, 1)

            // Sync the positions of the small spheres with their RAPIER bodies
            this.smallSpheres.forEach((sphere, index) => {
                sphere.boundaryRadius = THREE.MathUtils.lerp(
                    sphere.boundaryRadius,
                    mapClamp(Math.pow(cStep, 3), 0, 1, 1, 3),
                    0.01
                )
                sphere.update(axes, this.camera)
            })

            // Update smallSpheres uniform
            const smallSpheresData = this.smallSpheres.map((sphere) => {
                if (sphere && sphere.sphere && sphere.sphere.position) {
                    const pos = sphere.sphere.position

                    return new THREE.Vector4(pos.x, pos.y, pos.z, sphere.radius)
                }
                return new THREE.Vector4(0, 0, 0, 0) // Fallback value
            })

            if (this.frontMat.userData.shader) {
                const smallSpheresUniform =
                    this.frontMat.userData.shader.uniforms.smallSpheres.value
                smallSpheresData.forEach((data, index) => {
                    smallSpheresUniform[index].copy(data)
                })
            }

            if (this.backMat.userData.shader) {
                const smallSpheresUniform =
                    this.backMat.userData.shader.uniforms.smallSpheres.value
                smallSpheresData.forEach((data, index) => {
                    smallSpheresUniform[index].copy(data)
                })
            }

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

    monitorPerformance(delta) {
        //this.frames[this.frames.length] = delta
        //console.log(this.pixelRatio)
        this.frames.push(delta)
        if (this.frames.length >= 45) {
            let total = this.frames.reduce((acc, val) => acc + val)
            if (total / 45 > 1 / 30 && this.pixelRatio > 0.8) {
                let minus = total / 45 > 1 / 15 ? 0.15 : 0.1
                this.pixelRatio = this.pixelRatio - minus
                this.setPixelRatio(this.pixelRatio)
            }

            this.frames = []
        }
    }

    getDelta() {
        let delta = (performance.now() - this.lastFrame) / 1000
        delta = delta > 1.0 ? 1.0 : delta
        this.lastFrame = performance.now()
        this.monitorPerformance(delta)
        return delta
    }

    render() {
        this.metaballs.layers.set(0)
        this.smallSpheres.forEach((sphere) => {
            if (sphere && sphere.sphere) {
                sphere.sphere.layers.set(1)
            }
        })
        // we render the scene four times layered on top of each other
        // once for the back metaball interior,
        // once for the back metaball exterior,
        // once for the small spheres
        // and once for the front metaball exterior
        if (this.metaballs.material.userData.shader) {
            //render background metaball interior (back Side)
            this.metaballs.material = this.backMat
            this.metaballs.material.userData.shader.uniforms.minOpacity.value = 1
            this.metaballs.material.userData.shader.uniforms.colGlow.value =
                this.colGlow
            this.metaballs.material.userData.shader.uniforms.offset.value = 0.0
            //TBC - THIS RENDERER POSSIBLY NOT NEEDED
            this.renderer.render(this.scene, this.camera)

            // render background metaball exterior (front side)
            this.metaballs.material = this.frontMat
            this.metaballs.material.userData.shader.uniforms.fresnelScale.value = 1.0
            this.metaballs.material.userData.shader.uniforms.minOpacity.value = 1
            this.metaballs.material.userData.shader.uniforms.colGlow.value =
                this.colGlow
            this.metaballs.material.userData.shader.uniforms.offset.value = 0.03
            this.frontMat.userData.shader.uniforms.inOpacity.value = 1.0

            this.renderer.autoClear = false
            this.renderer.render(this.scene, this.camera)

            //reset material for front metaball exterior (front side)
            //TBC - removing this improves the performance
            //The Largest Contentful Paint (LCP) goes from .7 to .3
            this.metaballs.material = this.frontMat
            this.metaballs.material.userData.shader.uniforms.fresnelScale.value = 1.0
            this.metaballs.material.userData.shader.uniforms.minOpacity.value = 0
            this.metaballs.material.userData.shader.uniforms.colGlow.value =
                this.colLight
            this.metaballs.material.userData.shader.uniforms.offset.value = 0.0

            this.frontMat.userData.shader.uniforms.inOpacity.value =
                this.sphereOpacity
        }

        this.renderer.clearDepth()

        //render interior spheres
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

        //render front material
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

    animateCamera(axes) {
        // console.log(axes.transition)
        this.app.canvasContainer.style.opacity = THREE.MathUtils.lerp(
            0,
            axes.transition * 100,
            0.009
        )
        this.camera.position.z = THREE.MathUtils.lerp(
            this.camera.position.z,
            20 - axes.transition * 10,
            0.09
        )
    }

    updateRadius(val) {
        this.geo.dispose()
        this.metaballs.geometry = new THREE.IcosahedronGeometry(val, 32)
    }

    updateColor(val, color = 'colDark') {
        this.frontMat.userData.shader.uniforms[color].value.setRGB(
            val.r,
            val.g,
            val.b
        )
        this.backMat.userData.shader.uniforms[color].value.setRGB(
            val.r,
            val.g,
            val.b
        )
    }

    initStatAndGUI() {
        // TBC - Stats
        this.stats = new Stats()
        this.stats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
        this.stats.dom.classList.add('stats')
        document.body.appendChild(this.stats.dom)

        this.gui = new GUI()

        const colorLayers = {
            front: {
                color1: 'colDark',
                color2: 'colMid',
                color3: 'colLight',
                color4: 'colGlow',
            },
            back: {
                color1: 'colDark',
                color2: 'colMid',
                color3: 'colLight',
                color4: 'colGlow',
            },
        }

        Object.keys(colorLayers).forEach((layer) => {
            const a = this.gui.addFolder(layer)
            const innerObject = colorLayers[layer]

            Object.entries(innerObject).forEach(([color, colorName]) => {
                a.addColor(COLORS, color.toString()).onChange((value) => {
                    this.updateColor(sRGBToLinear(value), colorName)
                })
            })
        })

        this.obj = { radius: 1.8 }
        this.gui.add(this.obj, 'radius', 1, 3, 0.01).onChange((value) => {
            this.updateRadius(value)
        })

        this.gui
            .add(numberOfSmallSpheres, 'number', 4, 20, 1)
            .onChange((newValue) => {
                // When the value changes, store it in localStorage
                localStorage.setItem(LOCAL_STORAGE_KEY, newValue)
            })
    }

    animate() {
        // TBC - Stats
        this.getDelta()
        this.stats.begin()

        let axes = this.app.getTimelineValues()

        //console.log(isElementInView(this.app.canvasContainer))
        if (isElementInView(this.app.canvasContainer)) {
            this.animateCamera(axes)
            this.animSpheres(axes)
            this.render()
        }
        // TBC - Stats
        this.stats.end()

        requestAnimationFrame(this.animate.bind(this))
    }
}

export default ThreeD
