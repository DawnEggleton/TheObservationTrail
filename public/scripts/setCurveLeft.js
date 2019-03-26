AFRAME.registerComponent('set-curve-l-comp', {
    schema: {},
    init : function() {
        const Context_AF = this;
        let z = Context_AF.el.getAttribute('position').z;
        let x = Context_AF.el.getAttribute('position').x;
        let scene = document.querySelector("a-scene");
        let tileName = Context_AF.el.id;
        console.log("path name " + name);
        
        Context_AF.el.addEventListener('loaded',function(){
            Context_AF.curveLeft(scene, z, x, tileName);
        });
    },
    curveLeft : function (place, zVal, xVal, name) {
        let curve = document.createElement("a-entity");
        curve.id = "curve-row" + (zVal/6) + "-col" + i;
        curve.setAttribute("obj-model", {obj: "#curvePath_obj"});
        //include curved path texture in src below
        curve.setAttribute("material", {src: "#curvePath_mat"});
        curve.setAttribute("position", {x: xVal - 6, y: 0, z: zVal});
        place.appendChild(curve);

        for (i = 0; i < numTiles; i++) {
            let plane = document.createElement("a-entity");
            let num = 6 * (i + 1);
            plane.id = "planeRight-row" + (zVal/6) + "-col" + i;
            plane.className = name;
            plane.setAttribute("obj-model", {obj: "#groundPlane_obj"});
            //include ground plane texture in src below
            plane.setAttribute("material", {src: "#groundPlane_mat"});
            plane.setAttribute("position", {x: xVal + num, y: 0, z: zVal});
            place.appendChild(plane);
        }
        for (i = 1; i < numTiles; i++) {
            let plane = document.createElement("a-entity");
            let num = -6 * (i + 1);
            plane.id = "planeLeft-row" + (zVal/6) + "-col" + i;
            plane.className = name;
            plane.setAttribute("obj-model", {obj: "#groundPlane_obj"});
            //include ground plane texture in src below
            plane.setAttribute("material", {src: "#groundPlane_mat"});
            plane.setAttribute("position", {x: xVal + num, y: 0, z: zVal});
            place.appendChild(plane);
        }
    }
});