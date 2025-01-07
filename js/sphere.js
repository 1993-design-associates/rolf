import * as THREE from 'three';
import RAPIER from '@dimforge/rapier3d-compat';
import { clamp, mapClamp, getRandomNumber } from './utils.js';
import anime from 'animejs';

class Sphere {
    constructor(radius, material, parent, position, density, world, colLight, colGlow) {
        this.world = world;
        this.radius = radius;
        this.material = material;
        this.parent = parent;
        this.position = position;
        this.density = density

        const Geo = new THREE.IcosahedronGeometry(this.radius,3);
        const colors = [];
        const color = new THREE.Color(1.0, 1.0, 0.0);
        for (let i = 0; i < Geo.attributes.position.count; i++) {
            colors.push(color.r, color.g, color.b);
        }
        Geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        this.sphere = new THREE.Mesh(Geo, this.material);
        this.parent.add(this.sphere);
        this.scale = { x: 1, y: 1, z: 1 };

        this.fresnelScale = getRandomNumber(0.5, 1.3);
        this.opacity = getRandomNumber(0.5, 1.0);
        this.maxOpacity = getRandomNumber(1.0, 1.0);
        this.distancefromOrigin = 0.0;
        if (this.opacity< 0.5) {
            [this.colLight, this.colGlow, this.colDark] = [colGlow, colLight, colLight];
        } else {
            this.colLight = colLight;
            this.colGlow = colGlow;
            this.colDark = colGlow;
        }

        this.axes ={
            opacity : this.opacity,
            fres: this.fresnelScale,
            maxOpacity: this.maxOpacity,
            inOpacity: this.opacity
        }
    }

    init() {
        const bodyDesc = RAPIER.RigidBodyDesc.dynamic().setTranslation(this.position.x, this.position.y, this.position.z)
        .setLinearDamping(10);
        this.body = this.world.createRigidBody(bodyDesc);
        this.collider = RAPIER.ColliderDesc.ball(this.radius*1.2)
        .setDensity(this.density)
        this.world.createCollider(this.collider, this.body);

                // Create an animation to scale the sphere up and down
                anime({
                    targets: this.sphere.scale,
                    x: [0.8, 1.2],
                    y: [0.8, 1.2],
                    z: [0.8, 1.2],
                    duration: getRandomNumber(8000, 6000),
                    easing: 'easeInOutSine',
                    loop: true,
                    direction: 'alternate',
                    delay: getRandomNumber(500,2000)
                });
                anime({
                    targets: this.axes,
                    opacity: [0.0, this.opacity],
                    fres: [this.fresnelScale / 2, this.fresnelScale],
                    maxOpacity: [0.8, 1.0],
                    inOpacity: [0.5, 1.0],
                    duration: getRandomNumber(12000, 4000),
                    easing: 'easeInOutSine',
                    loop: true,
                    direction: 'alternate',
                    delay: getRandomNumber(500,2000)
                });
    }
    

    calculateVisibleAreaAtDistance(distance, camera) {
        const fov = THREE.MathUtils.degToRad(camera.fov); // Convert vertical FOV to radians
        const heightAtDistance = 2 * Math.tan(fov / 2) * distance; // Calculate height at the given distance
        const widthAtDistance = heightAtDistance * camera.aspect; // Calculate width at the given distance
    
        return {
            minX: -widthAtDistance / 2,
            maxX: widthAtDistance / 2,
            minY: -heightAtDistance / 2,
            maxY: heightAtDistance / 2
        };
    }

    update(axes, camera) {
            this.body.resetForces(true);
            let { x, y, z } = this.body.translation();
            let pos = new THREE.Vector3(x, y, z);
            let dir = pos.clone().sub(this.parent.position).normalize();

            // Calculate the target position based on axes.step
            let targetDistance = clamp(axes.step*1.5, 0.5, 2); // Adjust this value as needed
            
            this.distancefromOrigin = pos.distanceTo(this.parent.position);
            console.log(this.opacity*axes.opacity)

            if(this.material.userData.shader){
                this.material.userData.shader.uniforms.fresnelScale.value = this.axes.fres;
                this.material.userData.shader.uniforms.maxOpacity.value = THREE.MathUtils.lerp(this.material.userData.shader.uniforms.maxOpacity.value, axes.opacity*0.5 +0.5, 0.01);
                this.material.userData.shader.uniforms.inOpacity.value = THREE.MathUtils.lerp(this.material.userData.shader.uniforms.inOpacity.value, axes.opacity*this.axes.inOpacity, 0.01);
                this.material.userData.shader.uniforms.minOpacity.value = this.axes.opacity;
                this.material.userData.shader.uniforms.colDark.value = this.colDark
                this.material.userData.shader.uniforms.colMid.value = this.colLight
                this.material.userData.shader.uniforms.colLight.value = this.colLight
                this.material.userData.shader.uniforms.colGlow.value = this.colGlow
            }
            
            let targetPos = dir.multiplyScalar(targetDistance).add(this.parent.position);
            
            // Calculate the distance from the sphere to the camera
            let distanceToCamera = pos.distanceTo(camera.position);

            // Calculate the visible area at the distance of the sphere from the camera
            const visibleArea = this.calculateVisibleAreaAtDistance( distanceToCamera, camera,);
            // Clamp the target position to the visible area of the camera at the distance of the sphere from the camera
            targetPos.x = clamp(targetPos.x, visibleArea.minX+this.radius, visibleArea.maxX-this.radius);
            targetPos.y = clamp(targetPos.y, visibleArea.minY+this.radius, visibleArea.maxY-this.radius);
            targetPos.z = clamp(targetPos.y, -camera.position.z+this.radius, camera.position.z-this.radius);

            // Calculate the distance to the target position
            let distanceToTarget = pos.distanceTo(targetPos);
            // Apply force to move the sphere towards the target position
            let forceMagnitude = distanceToTarget * 3; // Adjust the scaling factor as needed

            let force = targetPos.clone().sub(pos).normalize().multiplyScalar(forceMagnitude); // Adjust the force magnitude as needed
            // Calculate the tangential force for circular motion around the z-axis
            let zAxis = new THREE.Vector3(0, 1, 0.2);
            let orbitSpeed = axes.step*2+0.5; // Adjust the orbit speed as needed
            let tangentialForce = new THREE.Vector3().crossVectors(dir, zAxis).normalize().multiplyScalar(orbitSpeed); // Adjust the tangential force magnitude as needed
           
            this.body.addForce(tangentialForce.add(force), true);

            let position = this.body.translation();
                // Lerp the sphere's position to the body's position
            let currentPos = this.sphere.position;
            let lerpFactor = 0.1; // Adjust the lerp factor as needed (0.1 means 10% of the way each frame)
            
            position.x = clamp(position.x, visibleArea.minX+this.radius, visibleArea.maxX-this.radius);
            position.y = clamp(position.y, visibleArea.minY+this.radius, visibleArea.maxY-this.radius);
            position.z = clamp(position.y, -camera.position.z+this.radius, camera.position.z-this.radius);

            let newPos = new THREE.Vector3().lerpVectors(currentPos, position, lerpFactor);


            this.sphere.position.set(newPos.x, newPos.y, newPos.z);
            //this.sphere.scale.set(this.scale.x, this.scale.y, this.scale.z);
    }
}

export default Sphere;