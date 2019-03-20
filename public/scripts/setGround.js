AFRAME.registerComponent('set-ground-comp', {
    schema: {},
    init : function() {
        const Context_AF = this;
        
        let z = Context_AF.el.getAttribute('position').z;
        let x = Context_AF.el.getAttribute('position').x;
        let name = Context_AF.el.id;
        console.log("path name " + name);

        let scene = document.querySelector("a-scene");
        for (i = 0; i < numTiles; i++) {
            let plane = document.createElement("a-entity");
            let num = 6 * (i + 1) + x;
            plane.id = "planeRight-row" + (z/6) + "-col" + i;
            plane.className = name;
            plane.setAttribute("obj-model", {obj: "#groundPlane_obj"});
            //include ground plane texture in src below
            plane.setAttribute("material", {src: "#groundPlane_mat"});
            plane.setAttribute("position", {x: num, y: 0, z: z});
            scene.appendChild(plane);
        }
        for (i = 0; i < numTiles; i++) {
            let plane = document.createElement("a-entity");
            let num = -6 * (i + 1) + x;
            plane.id = "planeLeft-row" + (z/6) + "-col" + i;
            plane.className = name;
            plane.setAttribute("obj-model", {obj: "#groundPlane_obj"});
            //include ground plane texture in src below
            plane.setAttribute("material", {src: "#groundPlane_mat"});
            plane.setAttribute("position", {x: num, y: 0, z: z});
            scene.appendChild(plane);
        }        
    }
});