import * as THREE from 'three'
// import frag from '/shaders/mesh.frag'
// import meshdither from '/shaders/mesh.glsl'
// import headfrag from'/shaders/head.glsl'
// import vs from'/shaders/mesh.vert'
// import vertHead from '/shaders/vertex/head.vert'
// import vertBody from '/shaders/vertex/body.vert'
import RAPIER from '@dimforge/rapier3d-compat';
import { getRandomNumber, mapClamp } from './utils';
import Sphere from './sphere';

const clamp = (num, min, max) => Math.min(Math.max(num, min), max)

class ThreeD {
    constructor(pixelRatio, tier, app){ //lets set up our three.js scene
        this.app = app
        this.height = window.innerHeight
        this.width = window.innerWidth
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 50, this.width / this.height, 0.1, 1000 );
        this.camera.position.z = 5; // Set camera position to view the object
        this.bbox = new THREE.Vector3()
        this.isMobile = tier.isMobile
    
        this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: tier.tier > 2 ? true : false });
        this.renderer.setSize( this.width, this.height );
        this.renderer.setPixelRatio(pixelRatio)
        this.renderer.setClearColor(0x00000000, 0); // Set background color to black
        this.canvas = this.renderer.domElement
        this.velocity = new THREE.Vector3()
        this.vectorUtil = new THREE.Vector3()
        this.vHeight = 0

        this.clock = new THREE.Clock()

                // Add lighting
                const light = new THREE.PointLight(0xffffff, 1000);
                light.position.set(10, 10, 10);
                this.scene.add(light);

        //attractor
        // this.material = new THREE.ShaderMaterial({
        //     vertexShader : vs,
        //     fragmentShader: frag,
        //     side : THREE.DoubleSide
        // })

        this.material = new THREE.MeshStandardMaterial({ color: 0xff0000 });


        this.geo = new THREE.IcosahedronGeometry(0.3,3)
        this.material.transparent = true;
        this.material.opacity = 0.5; // Adjust the opacity value as needed
        this.mesh = new THREE.Mesh(this.geo, this.material)

            // Create 8 smaller spheres
            this.smallSpheres = [];
            this.smallSphereRadius = 0.2;
            this.orbitRadius = 0.2;
            this.orbitSpeed = 0.01;
            this.group = new THREE.Group()
    


            this.scene.add(this.group)
            this.group.add(this.mesh)

            this.scale = 5
            this.camera.position.z = 10
            this.mouse = { x : 0.5, y: 0.5}
            this.time = 0
            
            this.domEl = this.app.canvasContainer.appendChild( this.renderer.domElement )
            this.domEl.style.zIndex = 10000
            this.domEl.style.position = 'fixed'
            this.domEl.style.top = 0
    
            this.lightTop = new THREE.PointLight( 0xffffff, 1000);
            this.lightBottom = new THREE.PointLight( 0xffffff, 1000);
            this.scene.add(this.lightTop)
            this.scene.add(this.lightBottom)
            this.lightTop.position.set(-5, 40, 3)
            this.lightBottom.position.set(10, -40, 50)

            RAPIER.init().then(() => {

                this.world = new RAPIER.World({ x: 0, y: 0, z: 0 });
                for (let i = 0; i < 8; i++) {   
                    let x = getRandomNumber(-this.orbitRadius, this.orbitRadius);
                    let y = getRandomNumber(-this.orbitRadius, this.orbitRadius);
                    let z = getRandomNumber(-this.orbitRadius, this.orbitRadius);
                    let size = getRandomNumber(0.5, 1);
                    let density = mapClamp(size, 0.5, 1, 1, 2);
                    let sphere = new Sphere(size*this.smallSphereRadius, this.material, this.group, { x, y, z }, density, this.world);
                    sphere.init();   
                    this.smallSpheres.push(sphere)
                }

                // Start the render loop
                this.animate();
            }).catch(error => {
                console.error('Error loading RAPIER:', error);
            });

        // this.material.onBeforeCompile =  ( shader ) => {
        //     shader.uniforms.uAttractor = { value: this.attractor.position}
        //     shader.uniforms.uVelocity = { value: this.velocity}
        //     shader.vertexShader = shader.vertexShader.replace(
        //         '#include <uv_pars_vertex>',
        //         vertHead
        //     ).replace(
        //         '#include <uv_vertex>',
        //         'vUv = uv;'
        //     ).replace(
        //         '#include <worldpos_vertex>',
        //         vertBody
        //     )

        //     shader.fragmentShader = shader.fragmentShader.replace(
        //         '#include <dithering_fragment>',
        //         meshdither
        //     ).replace(
        //         '#define PHONG',
        //         headfrag
        //     ).replace(
        //         '#include <uv_pars_fragment>',
        //         'varying vec2 vUv;'
        //     )

        //     this.material.userData.shader = shader
        // }



    }

    setPixelRatio(pixelRatio){
        this.renderer.setPixelRatio(pixelRatio)
    }



    screenToPos(x, y){
        this.vectorUtil.set(x, y, 0);
        this.vectorUtil.unproject( this.camera );
        var dir = this.vectorUtil.sub( this.camera.position ).normalize();
        var distance = - this.camera.position.z / dir.z;
        var pos = this.camera.position.clone().add( dir.multiplyScalar( distance ) );
        return pos
    }

    init(){
        // this.mesh.geometry.computeBoundingBox()
        // this.move({ range: 0, x: 0, y: 0, size: 20, rotation: 0, rotRange: 1}, {x: 0, y:0});
        this.animate()
        this.render()
    }

    setScale(size){
        let dist = this.camera.position.distanceTo(this.mesh.position)
        let vFOV = this.camera.fov * Math.PI / 180;        // convert vertical fov to radians
        this.vHeight = 2 * Math.tan( vFOV / 2 ) * dist; // visible height
        this.mesh.scale.x = this.vHeight * (size/ this.height);
        this.mesh.scale.y = this.vHeight * (size/ this.height);
        this.mesh.scale.z = this.vHeight * (size/ this.height);
    }

    setPos(axes){
        this.setScale(axes.size)
        let pos = this.screenToPos(axes.x, axes.y)
        this.group.position.copy(pos)
    }


    animSpheres(axes){
        this.setScale(axes.size)

    // Check if this.world is initialized
    if (this.world) {
        // Step the RAPIER physics world
        this.world.step();
        // Sync the positions of the small spheres with their RAPIER bodies
        this.smallSpheres.forEach((sphere, index) => {
            sphere.update(axes)
        });
    } else {
        console.error('RAPIER world is not initialized.');
    }
        // console.log(axes.step)
        // let mpos = this.isMobile ?  this.mobileMove(axes): this.screenToPos(mouse.x, mouse.y)
        // let pos = this.screenToPos(axes.x, axes.y)

        // let mobMult = this.isMobile ? (1 + (0.2*  axes.rotRange)) : 1


        // this.setScale(axes.size * mobMult)

        // pos.lerp(mpos, axes.range)

        // this.mesh.rotation.z += (this.group.position.distanceTo(pos) * delta * 0.4)* axes.range
        // this.group.position.lerp(pos, delta * 1.5)

        // this.time += delta / 2
    }



    render() {
        this.renderer.render(this.scene, this.camera)
    }

    onWindowResize(){
        this.height = window.innerHeight
        this.width = window.innerWidth
        this.camera.aspect = this.width / this.height
        this.camera.updateProjectionMatrix()
        this.renderer.setSize( this.width, this.height)
    }

    animate(){
        let axes = this.app.getTimelineValues()
        this.animSpheres(axes)
        this.render()
        requestAnimationFrame(this.animate.bind(this))
    }

    
}

export default ThreeD;