import * as THREE from 'three';
import RAPIER from '@dimforge/rapier3d-compat';

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
        this.sphere = new THREE.Mesh(Geo, Mat);
        this.parent.add(this.sphere);
    }

    init() {
        console.log(this.position)
        const bodyDesc = RAPIER.RigidBodyDesc.dynamic().setTranslation(this.position.x, this.position.y, this.position.z)
        .setLinearDamping(2);
        this.body = this.world.createRigidBody(bodyDesc);
        this.collider = RAPIER.ColliderDesc.ball(this.radius*2.5).setDensity(this.density);
        this.world.createCollider(this.collider, this.body);
    }

    update(axes) {
            this.body.resetForces(true);
            let { x, y, z } = this.body.translation();
            let pos = new THREE.Vector3(x, y, z);
            let dir = pos.clone().sub(this.parent.position).normalize();
            this.body.addForce(dir.multiplyScalar(-0.01 + 0.01 * axes.step), true);
            const position = this.body.translation();
            this.sphere.position.set(position.x, position.y, position.z);
    }
}

export default Sphere;