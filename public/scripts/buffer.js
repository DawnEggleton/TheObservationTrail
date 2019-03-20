AFRAME.registerComponent('buffer-comp', {
    schema: {},
    init : function() {
        const Context_AF = this;     
        console.log("intiated");
        let pathTiles = [];
        let startI = -1;

        let tile0 = document.createElement("a-entity");
        tile0.setAttribute("set-ground-comp", {});
        tile0.setAttribute("set-enviro-comp", {});
        tile0.id = "path0";
        tile0.setAttribute("obj-model", {obj: "#straightPath_obj"});
        tile0.setAttribute("material", {src: "#straightPath_mat"});
        tile0.setAttribute("position", {x: 0, y: 0, z: 6});
        pathTiles.push(tile0);

        let tile1 = document.createElement("a-entity");
        tile1.setAttribute("set-ground-comp", {});
        tile1.setAttribute("set-enviro-comp", {});
        tile1.id = "path1";
        tile1.setAttribute("obj-model", {obj: "#straightPath_obj"});
        tile1.setAttribute("material", {src: "#straightPath_mat"});
        tile1.setAttribute("position", {x: 0, y: 0, z: 0});
        pathTiles.push(tile1);

        let tile2 = document.createElement("a-entity");
        tile2.setAttribute("set-ground-comp", {});
        tile2.setAttribute("set-enviro-comp", {});
        tile2.id = "path2";
        tile2.setAttribute("obj-model", {obj: "#straightPath_obj"});
        tile2.setAttribute("material", {src: "#straightPath_mat"});
        tile2.setAttribute("position", {x: 0, y: 0, z: -6});
        pathTiles.push(tile2);

        let tile3 = document.createElement("a-entity");
        tile3.setAttribute("set-ground-comp", {});
        tile3.setAttribute("set-enviro-comp", {});
        tile3.id = "path3";
        tile3.setAttribute("obj-model", {obj: "#straightPath_obj"});
        tile3.setAttribute("material", {src: "#straightPath_mat"});
        tile3.setAttribute("position", {x: 0, y: 0, z: -12});
        pathTiles.push(tile3);

        let tile4 = document.createElement("a-entity");
        tile4.setAttribute("set-ground-comp", {});
        tile4.setAttribute("set-enviro-comp", {});
        tile4.id = "path4";
        tile4.setAttribute("obj-model", {obj: "#straightPath_obj"});
        tile4.setAttribute("material", {src: "#straightPath_mat"});
        tile4.setAttribute("position", {x: 0, y: 0, z: -18});
        pathTiles.push(tile4);

        let tile5 = document.createElement("a-entity");
        tile5.setAttribute("set-ground-comp", {});
        tile5.setAttribute("set-enviro-comp", {});
        tile5.id = "path5";
        tile5.setAttribute("obj-model", {obj: "#straightPath_obj"});
        tile5.setAttribute("material", {src: "#straightPath_mat"});
        tile5.setAttribute("position", {x: 0, y: 0, z: -24});
        pathTiles.push(tile5);

        let tile6 = document.createElement("a-entity");
        tile6.setAttribute("set-ground-comp", {});
        tile6.setAttribute("set-enviro-comp", {});
        tile6.id = "path6";
        tile6.setAttribute("obj-model", {obj: "#straightPath_obj"});
        tile6.setAttribute("material", {src: "#straightPath_mat"});
        tile6.setAttribute("position", {x: 0, y: 0, z: -30});
        pathTiles.push(tile6);

        let tile7 = document.createElement("a-entity");
        tile7.setAttribute("set-ground-comp", {});
        tile7.setAttribute("set-enviro-comp", {});
        tile7.id = "path7";
        tile7.setAttribute("obj-model", {obj: "#straightPath_obj"});
        tile7.setAttribute("material", {src: "#straightPath_mat"});
        tile7.setAttribute("position", {x: 0, y: 0, z: -36});
        pathTiles.push(tile7);

        let tile8 = document.createElement("a-entity");
        tile8.setAttribute("set-ground-comp", {});
        tile8.setAttribute("set-enviro-comp", {});
        tile8.id = "path8";
        tile8.setAttribute("obj-model", {obj: "#straightPath_obj"});
        tile8.setAttribute("material", {src: "#straightPath_mat"});
        tile8.setAttribute("position", {x: 0, y: 0, z: -42});
        pathTiles.push(tile8);

        let tile9 = document.createElement("a-entity");
        tile9.setAttribute("set-ground-comp", {});
        tile9.setAttribute("set-enviro-comp", {});
        tile9.id = "path9";
        tile9.setAttribute("obj-model", {obj: "#straightPath_obj"});
        tile9.setAttribute("material", {src: "#straightPath_mat"});
        tile9.setAttribute("position", {x: 0, y: 0, z: -48});
        pathTiles.push(tile9);

        let scene = document.querySelector("a-scene");

        
        if (startI == -1) {
            for (let j = 0; j < 3; j++) {
                scene.appendChild(pathTiles[j]);
            }
        }
        

        document.addEventListener('keydown', function(event) {
            if (event.keyCode == 38 || event.keyCode == 87) {
                let camZ = document.querySelector("#cam").getAttribute("position").z;
                let count = Math.floor((camZ * -1)/6);
                if (camZ > 0) {
                    count = Math.floor(camZ / 6); 
                }
                if (startI < count) {
                    startI = count;
                    //remove back tile
                    if ((count - 1) >= 0) {
                        //remove tile
                        let tileName = "#path" + (count - 1);
                        let removeTile = document.querySelector(tileName);
                        removeTile.parentNode.removeChild(removeTile);
                        //remove planes and environment pieces
                        let selector = ".path" + (count - 1);
                        let items = document.querySelectorAll(selector);
                        items.forEach(function(item) {
                            item.parentNode.removeChild(item);
                        });
                        scene.appendChild(pathTiles[count + 2]);
                    }
                }
            }
        });

    }
});