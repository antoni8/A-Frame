AFRAME.registerComponent("sala", {
    schema: {
        widthH:{type:'number', default: 20},
        widthV:{type:'number', default: 20},
        height:{type:'number', default: 20},
    },
    init:function() {

        var el = this.el;

        let entityleft = document.createElement("a-plane");
        entityleft.setAttribute('width', this.data.widthV);
        entityleft.setAttribute('height', this.data.height);
        entityleft.setAttribute('color', el.getAttribute('color'));
        console.log(el.object3D.position);
        entityleft.setAttribute('position', {
            x: el.object3D.position.x  - 10,
            y: this.data.height/2,
            z: el.object3D.position.z
        });
        entityleft.setAttribute('rotation', {
            x: 0,
            y: el.object3D.rotation.y + 90,
            z: 0
        });
        console.log(entityleft.object3D.rotation);
        el.appendChild(entityleft);

        let entityright = document.createElement("a-plane");
        entityright.setAttribute('width', this.data.widthV);
        entityright.setAttribute('height', this.data.height);
        entityright.setAttribute('color', el.getAttribute('color'));
        entityright.setAttribute("position", {
            x: el.object3D.position.x + 10,
            y: this.data.height/2,
            z: el.object3D.position.z
        });
        entityright.setAttribute('rotation', {
            x: 0,
            y: el.object3D.rotation.y  - 90,
            z: 0
        });
        el.appendChild(entityright);

        let entityfront = document.createElement("a-plane");
        entityfront.setAttribute('width', this.data.widthH);
        entityfront.setAttribute('height', this.data.height);
        entityfront.setAttribute('color', el.getAttribute('color'));
        entityfront.setAttribute("position", {
            x: el.object3D.position.x,
            y: this.data.height/2,
            z: el.object3D.position.z - 10,
        });
        el.appendChild(entityfront);

        let entityback = document.createElement("a-plane");
        entityback.setAttribute('width', this.data.widthH);
        entityback.setAttribute('height', this.data.height);
        entityback.setAttribute('color', el.getAttribute('color'));
        entityback.setAttribute("position", {
            x: el.object3D.position.x,
            y: this.data.height/2,
            z: el.object3D.position.z + 10,
        });
        entityback.setAttribute('rotation', {
            x: 0,
            y: el.object3D.rotation.y - 180,
            z: 0
        });
        el.appendChild(entityback);

        let entityfloor = document.createElement("a-plane");
        entityfloor.setAttribute('width', this.data.widthH);
        entityfloor.setAttribute('height', this.data.widthH);
        entityfloor.setAttribute('color', '#222');
        entityfloor.setAttribute('body', 'type', 'static');
        entityfloor.setAttribute("position", {
            x: 0,
            y: 0,
            z: 0,
        });
        entityfloor.setAttribute("rotation", {
            x: -90,
            y: 0,
            z: 0,
        });
        el.appendChild(entityfloor);
    }
});