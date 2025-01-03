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
import { MarchingCubes } from 'three/examples/jsm/Addons.js';

const clamp = (num, min, max) => Math.min(Math.max(num, min), max)

class ThreeD {
    constructor(pixelRatio, tier, app){ //lets set up our three.js scene
        this.app = app
        this.height = window.innerHeight
        this.width = window.innerWidth
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 50, this.width / this.height, 0.1, 1000 );
        this.camera.position.z = 10; // Set camera position to view the object
        this.bbox = new THREE.Vector3()
        this.isMobile = tier.isMobile
        this.mouse = new THREE.Vector3(0,0,0)
    
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

        this.material = new THREE.MeshStandardMaterial({ color: 0xff0000, flatShading: false   });

        this.sphereRad = 2
        this.geo = new THREE.IcosahedronGeometry(this.sphereRad,6)
        this.material.transparent = true;
        this.material.opacity = 0.5; // Adjust the opacity value as needed
        this.mesh = new THREE.Mesh(this.geo, this.material)

            // Create 8 smaller spheres
            this.smallSpheres = [];
            this.smallSphereRadius = 0.3;
            this.orbitRadius = 1;
            this.orbitSpeed = 0.1;
            this.group = new THREE.Group()
    


            this.scene.add(this.group)
            // this.group.add(this.mesh)

            this.camera.position.z = 10
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

            this.metaballs = new MarchingCubes(96, this.material, false, 90000 );
            this.metaScale = 7
            this.metaballs.scale.setScalar( this.metaScale );
            this.metaballs.isolation = 20;
            this.metaSub = 10 // lightness
            this.scene.add(this.metaballs);


            RAPIER.init().then(() => {

                this.world = new RAPIER.World({ x: 0, y: 0, z: 0 });

                this.mouseBody = RAPIER.RigidBodyDesc.dynamic().setTranslation(0, 0, 0).setLinearDamping(100);
                this.mouseRigid = this.world.createRigidBody(this.mouseBody);
                this.mouseRigid.setRotation({ w: Math.cos(Math.PI / 4), x: Math.sin(Math.PI / 4), y: 0.0, z: 0.0 }, true);
                this.dynamicCollider = RAPIER.ColliderDesc.cylinder(100, 0.5).setDensity(0.005);
                this.world.createCollider(this.dynamicCollider, this.mouseRigid);

                const debugMouseGeometry =  new THREE.CylinderGeometry(0.25, 0.25, 10, 8, 1);
                const debugMouseMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000});
                this.debugMouse = new THREE.Mesh(debugMouseGeometry, debugMouseMaterial);
                this.debugMouse.rotation.set(Math.PI / 2, 0, 0);
                // this.scene.add(this.debugMouse);


                for (let i = 0; i < 8; i++) {   
                    let x = getRandomNumber(-this.orbitRadius, this.orbitRadius);
                    let y = getRandomNumber(-this.orbitRadius, this.orbitRadius);
                    let z = getRandomNumber(-this.orbitRadius, this.orbitRadius);
                    let size = getRandomNumber(0.5, 1);
                    let density = mapClamp(size, 0.5, 1, 5, 2);
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

    onMouseMove(x,y){
        this.mouse = this.screenToPos(x, y)
        if (isNaN(this.mouse.x) || isNaN(this.mouse.y) || isNaN(this.mouse.z)) {
            console.error('Invalid mouse position:', this.mouse);
            this.mouse = new THREE.Vector3(0,0,0);
        }
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
        let dist = this.camera.position.distanceTo(this.group.position)
        let vFOV = this.camera.fov * Math.PI / 180;        // convert vertical fov to radians
        this.vHeight = 2 * Math.tan( vFOV / 2 ) * dist; // visible height
        this.group.scale.x = this.vHeight * (size/ this.height);
        this.group.scale.y = this.vHeight * (size/ this.height);
        this.group.scale.z = this.vHeight * (size/ this.height);
    }

    setPos(axes){
        // this.setScale(axes.size)
        let pos = this.screenToPos(axes.x, axes.y)
        this.group.position.copy(pos)
    }

    metaPos(pos){
        //Marching cubes use a different coordinate system
        //Transforms the three.js vector position to the metaball coordinate system
        let metaOffset = new THREE.Vector3(0.5, 0.5, 0.5);
       return pos.clone().multiplyScalar(1/this.metaScale/2).add(metaOffset)
    }

    metaRad(scale){
        return scale / this.metaScale
    }

    animSpheres(axes){
        // this.setScale(axes.size)

    // Check if this.world is initialized
    if (this.world) {
        // Step the RAPIER physics world
        this.world.step();

        this.metaballs.reset()


        // Sync the positions of the small spheres with their RAPIER bodies
        this.smallSpheres.forEach((sphere, index) => {
            sphere.update(axes)
            let scaledPos = this.metaPos(sphere.sphere.position)
            this.metaballs.addBall(scaledPos.x, scaledPos.y, scaledPos.z,  this.metaRad(sphere.radius) / 2, this.metaSub,  0xff0000);

        });

        let scaledPos = this.metaPos(this.mesh.position)
        this.metaballs.addBall(scaledPos.x, scaledPos.y, scaledPos.z, this.metaRad(this.sphereRad),1, 0x0000ff);

        this.metaballs.update()

        if (this.mouseRigid) {
            this.mouseRigid.resetForces(true);
            // Calculate the distance to the target mouse position
            const currentPos = new THREE.Vector3(this.mouseRigid.translation().x, this.mouseRigid.translation().y, this.mouseRigid.translation().z);
            const targetPos = new THREE.Vector3(this.mouse.x, this.mouse.y, this.mouse.z);

            // Calculate the distance using THREE.Vector3
            const distance = currentPos.distanceTo(targetPos);

            // Calculate the direction vector
            const direction = new THREE.Vector3().subVectors(targetPos, currentPos).normalize();

            // Calculate the velocity proportional to the distance
            const forceMag = 100*distance; // Adjust the scaling factor as needed
            const force = direction.multiplyScalar(forceMag);

            // Set the linear velocity of the kinematic body
            this.mouseRigid.addForce(force, true);

            const position = this.mouseRigid.translation();
            // Update the debug sphere position
            
            this.debugMouse.position.set(position.x, position.y, position.z);
        }   
    } else {
        console.error('RAPIER world is not initialized.');
    }
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