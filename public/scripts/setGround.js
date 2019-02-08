AFRAME.registerComponent('set-ground-comp', {
    schema: {},
    init : function() {
        const Context_AF = this;
        
        let z = Context_AF.el.getAttribute('position').z;

        let scene = document.querySelector("a-scene");
        for (i = 0; i < numTiles; i++) {
            let plane = document.createElement("a-entity");
            let num = 6 * (i + 1);
            plane.id = "planeRight-row" + (z/6) + "-col" + i;
            plane.setAttribute("obj-model", {obj: "/models/ground_plane.obj", mtl: "/models/ground_plane.mtl"});
            plane.setAttribute("position", {x: num, y: 0, z: z});
            scene.appendChild(plane);
        }
        for (i = 0; i < numTiles; i++) {
            let plane = document.createElement("a-entity");
            let num = -6 * (i + 1);
            plane.id = "planeLeft-row" + (z/6) + "-col" + i;
            plane.setAttribute("obj-model", {obj: "/models/ground_plane.obj", mtl: "/models/ground_plane.mtl"});
            plane.setAttribute("position", {x: num, y: 0, z: z});
            scene.appendChild(plane);
        }
        
    }
});