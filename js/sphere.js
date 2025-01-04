import * as THREE from 'three';
import RAPIER from '@dimforge/rapier3d-compat';
import { clamp, getRandomNumber } from './utils.js';
import anime from 'animejs';

class Sphere {
    constructor(radius, material, parent, position, density, world) {
        this.world = world;
        this.radius = radius;
        this.material = material;
        this.parent = parent;
        this.position = position;
        this.density = density
        const Geo = new THREE.IcosahedronGeometry(this.radius,3);
        const Mat = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
        this.sphere = new THREE.Mesh(Geo, this.material);
        this.parent.add(this.sphere);
        this.scale = { x: 1, y: 1, z: 1 };
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
                    x: [0.9, 1.15],
                    y: [0.9, 1.15],
                    z: [0.9, 1.15],
                    duration: getRandomNumber(8000, 4000),
                    easing: 'easeInOutSine',
                    loop: true,
                    direction: 'alternate'
                });
    }

    update(axes) {
            this.body.resetForces(true);
            let { x, y, z } = this.body.translation();
            let pos = new THREE.Vector3(x, y, z);
            let dir = pos.clone().sub(this.parent.position).normalize();

            // Calculate the target position based on axes.step
            let targetDistance = clamp(axes.step*1.5, 1, 3); // Adjust this value as needed
            let targetPos = dir.multiplyScalar(targetDistance).add(this.parent.position);
            
            // Calculate the distance to the target position
            let distanceToTarget = pos.distanceTo(targetPos);
            // Apply force to move the sphere towards the target position
            let forceMagnitude = distanceToTarget * 1; // Adjust the scaling factor as needed

            let force = targetPos.clone().sub(pos).normalize().multiplyScalar(forceMagnitude); // Adjust the force magnitude as needed
            // Calculate the tangential force for circular motion around the z-axis
            let zAxis = new THREE.Vector3(0, 1, 1);
            let orbitSpeed = clamp(axes.step*0.5, 0.2, 1); // Adjust the orbit speed as needed
            let tangentialForce = new THREE.Vector3().crossVectors(dir, zAxis).normalize().multiplyScalar(orbitSpeed); // Adjust the tangential force magnitude as needed
           
            this.body.addForce(tangentialForce.add(force), true);

            let position = this.body.translation();
                // Lerp the sphere's position to the body's position
            let currentPos = this.sphere.position;
            let lerpFactor = 0.1; // Adjust the lerp factor as needed (0.1 means 10% of the way each frame)
            let newPos = new THREE.Vector3().lerpVectors(currentPos, position, lerpFactor);


            this.sphere.position.set(newPos.x, newPos.y, newPos.z);
            //this.sphere.scale.set(this.scale.x, this.scale.y, this.scale.z);
    }
}

export default Sphere;