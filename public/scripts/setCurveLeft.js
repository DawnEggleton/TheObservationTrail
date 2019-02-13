AFRAME.registerComponent('set-curve-l-comp', {
    schema: {},
    init : function() {
        const Context_AF = this;
        let z = Context_AF.el.getAttribute('position').z;
        let scene = document.querySelector("a-scene");
        
        Context_AF.el.addEventListener('loaded',function(){
            Context_AF.curveLeft(scene, z);
        });
    },
    curveleft : function (place, zVal) {
        let curve = document.createElement("a-entity");
        curve.id = "curve-row" + (zVal/6) + "-col" + i;
        curve.setAttribute("obj-model", {obj: "/models/path_curve.obj"});
        curve.setAttribute("material", {src: "/textures/arrow_tex.png"});
        curve.setAttribute("position", {x: -6, y: 0, z: zVal});
        place.appendChild(curve);

        for (i = 0; i < numTiles; i++) {
            let plane = document.createElement("a-entity");
            let num = 6 * (i + 1);
            plane.id = "planeRight-row" + (zVal/6) + "-col" + i;
            plane.setAttribute("obj-model", {obj: "/models/ground_plane.obj"});
            plane.setAttribute("material", {src: "/textures/arrow_tex.png"});
            plane.setAttribute("position", {x: num, y: 0, z: zVal});
            place.appendChild(plane);
        }
        for (i = 1; i < numTiles; i++) {
            let plane = document.createElement("a-entity");
            let num = -6 * (i + 1);
            plane.id = "planeLeft-row" + (zVal/6) + "-col" + i;
            plane.setAttribute("obj-model", {obj: "/models/ground_plane.obj"});
            plane.setAttribute("material", {src: "/textures/arrow_tex.png"});
            plane.setAttribute("position", {x: num, y: 0, z: zVal});
            place.appendChild(plane);
        }
    }
});