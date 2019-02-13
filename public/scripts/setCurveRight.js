AFRAME.registerComponent('set-curve-r-comp', {
    schema: {},
    init : function() {
        const Context_AF = this;
        let z = Context_AF.el.getAttribute('position').z;
        let x = Context_AF.el.getAttribute('position').x;
        let scene = document.querySelector("a-scene");
        
        Context_AF.el.addEventListener('loaded',function(){
            Context_AF.curveRight(scene, z, x);
        });
    },
    curveRight : function (place, zVal, xVal) {
        let curve = document.createElement("a-entity");
        curve.id = "curve-row" + (zVal/6) + "-col" + i;
        curve.setAttribute("obj-model", {obj: "/models/path_curve.obj"});
        //include curve path texture in src below
        curve.setAttribute("material", {src: "/textures/arrow_tex.png"});
        curve.setAttribute("position", {x: xVal + 6, y: 0, z: zVal});
        curve.setAttribute("rotation", {x: 0, y: 90, z: 0});
        place.appendChild(curve);

        for (i = 0; i < numTiles; i++) {
            let plane = document.createElement("a-entity");
            let num = 6 * (i + 1);
            plane.id = "planeRight-row" + (zVal/6) + "-col" + i;
            plane.setAttribute("obj-model", {obj: "/models/ground_plane.obj"});
            //include ground plane texture in src below
            plane.setAttribute("material", {src: "/textures/arrow_tex.png"});
            plane.setAttribute("position", {x: num, y: 0, z: zVal});
            place.appendChild(plane);
        }
        for (i = 0; i < numTiles; i++) {
            let plane = document.createElement("a-entity");
            let num = -6 * (i + 1);
            plane.id = "planeLeft-row" + (zVal/6) + "-col" + i;
            plane.setAttribute("obj-model", {obj: "/models/ground_plane.obj"});
            //include ground plane texture in src below
            plane.setAttribute("material", {src: "/textures/arrow_tex.png"});
            plane.setAttribute("position", {x: num, y: 0, z: zVal});
            place.appendChild(plane);
        }
    }
});