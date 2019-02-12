AFRAME.registerComponent('set-ground-comp', {
    schema: {},
    init : function() {
        const Context_AF = this;
        let z = Context_AF.el.getAttribute('position').z;
        let scene = document.querySelector("a-scene");
        
        Context_AF.el.addEventListener('loaded',function(){
            Context_AF.straightTiling(scene, z);
        });
    },
    straightTiling : function (place, zVal) {
        for (i = 0; i < numTiles; i++) {
            let plane = document.createElement("a-entity");
            let num = 6 * (i + 1) + x;
            plane.id = "planeRight-row" + (zVal/6) + "-col" + i;
            plane.setAttribute("obj-model", {obj: "/models/ground_plane.obj", mtl: "/models/ground_plane.mtl"});
            plane.setAttribute("position", {x: num, y: 0, z: zVal});
            place.appendChild(plane);
        }
        for (i = 0; i < numTiles; i++) {
            let plane = document.createElement("a-entity");
            let num = -6 * (i + 1) + x;
            plane.id = "planeLeft-row" + (zVal/6) + "-col" + i;
            plane.setAttribute("obj-model", {obj: "/models/ground_plane.obj", mtl: "/models/ground_plane.mtl"});
            plane.setAttribute("position", {x: num, y: 0, z: zVal});
            place.appendChild(plane);
        }
    }
});