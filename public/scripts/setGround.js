AFRAME.registerComponent('set-ground-comp', {
    schema: {},
    init : function() {
        const Context_AF = this;
        
        let z = Context_AF.el.getAttribute('position').z;
        let x = Context_AF.el.getAttribute('position').x;
        let name = Context_AF.el.id;

        let scene = document.querySelector("a-scene");
        for (i = 0; i < numTiles; i++) {
            let plane = document.createElement("a-entity");
            let num = 6 * (i + 1) + x;
            plane.id = "planeRight-row" + (z/6) + "-col" + i;
            plane.className = name;
            if (z >=-138) {     
                plane.setAttribute("obj-model", {obj: "#groundPlane_obj"});
                plane.setAttribute("material", {src: "#groundPlane_mat"});
            }
            if (z < -138 && z >= -144) {
                plane.setAttribute("obj-model", {obj: "#wetTransit_ground_obj"});
                plane.setAttribute("material", {src: "#wetTransit_ground_mat"});
            }
            if (z < -144) {
                plane.setAttribute("obj-model", {obj: "#wetGround_obj"});
                plane.setAttribute("material", {src: "#wetGround_mat"});
            }
            plane.setAttribute("position", {x: num, y: 0, z: z});
            scene.appendChild(plane);                 

            if (z < -138 && z > -180) {        
                let dockTile = document.createElement("a-entity");
                dockTile.id = "dock";
                dockTile.setAttribute("obj-model", {obj: "#dockTile_obj"});
                dockTile.setAttribute("material", {src: "#dockTile_mat"});
                dockTile.setAttribute("position", {x: 0, y: 0, z: z - 1});
                scene.appendChild(dockTile);
            }
        }
        for (i = 0; i < numTiles; i++) {
            let plane = document.createElement("a-entity");
            let num = -6 * (i + 1) + x;
            plane.id = "planeLeft-row" + (z/6) + "-col" + i;
            plane.className = name;
            if (z >=-138) {        //-138, -144        
                plane.setAttribute("obj-model", {obj: "#groundPlane_obj"});
                plane.setAttribute("material", {src: "#groundPlane_mat"});
            }
            if (z < -138 && z >= -144) {
                plane.setAttribute("obj-model", {obj: "#wetTransit_ground_obj"});
                plane.setAttribute("material", {src: "#wetTransit_ground_mat"});
            }
            if (z < -144) {
                plane.setAttribute("obj-model", {obj: "#wetGround_obj"});
                plane.setAttribute("material", {src: "#wetGround_mat"});
            }
            plane.setAttribute("position", {x: num, y: 0, z: z});
            scene.appendChild(plane);
        }   
    }
});