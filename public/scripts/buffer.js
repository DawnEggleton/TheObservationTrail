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
        tile0.setAttribute("position", {x: 0, y: 0, z: 30});
        pathTiles.push(tile0);

        let tile1 = document.createElement("a-entity");
        tile1.setAttribute("set-ground-comp", {});
        tile1.setAttribute("set-enviro-comp", {});
        tile1.id = "path1";
        tile1.setAttribute("obj-model", {obj: "#straightPath_obj"});
        tile1.setAttribute("material", {src: "#straightPath_mat"});
        tile1.setAttribute("position", {x: 0, y: 0, z: 24});
        pathTiles.push(tile1);

        let tile2 = document.createElement("a-entity");
        tile2.setAttribute("set-ground-comp", {});
        tile2.setAttribute("set-enviro-comp", {});
        tile2.id = "path2";
        tile2.setAttribute("obj-model", {obj: "#straightPath_obj"});
        tile2.setAttribute("material", {src: "#straightPath_mat"});
        tile2.setAttribute("position", {x: 0, y: 0, z: 18});
        pathTiles.push(tile2);

        let tile3 = document.createElement("a-entity");
        tile3.setAttribute("set-ground-comp", {});
        tile3.setAttribute("set-enviro-comp", {});
        tile3.id = "path3";
        tile3.setAttribute("obj-model", {obj: "#straightPath_obj"});
        tile3.setAttribute("material", {src: "#straightPath_mat"});
        tile3.setAttribute("position", {x: 0, y: 0, z: 12});
        pathTiles.push(tile3);

        let tile4 = document.createElement("a-entity");
        tile4.setAttribute("set-ground-comp", {});
        tile4.setAttribute("set-enviro-comp", {});
        tile4.id = "path4";
        tile4.setAttribute("obj-model", {obj: "#straightPath_obj"});
        tile4.setAttribute("material", {src: "#straightPath_mat"});
        tile4.setAttribute("position", {x: 0, y: 0, z: 6});
        pathTiles.push(tile4);

        let tile5 = document.createElement("a-entity");
        tile5.setAttribute("set-ground-comp", {});
        tile5.setAttribute("set-enviro-comp", {});
        tile5.id = "path5";
        tile5.setAttribute("obj-model", {obj: "#straightPath_obj"});
        tile5.setAttribute("material", {src: "#straightPath_mat"});
        tile5.setAttribute("position", {x: 0, y: 0, z: 0});
        pathTiles.push(tile5);

        let tile6 = document.createElement("a-entity");
        tile6.setAttribute("set-ground-comp", {});
        tile6.setAttribute("set-enviro-comp", {});
        tile6.id = "path6";
        tile6.setAttribute("obj-model", {obj: "#straightPath_obj"});
        tile6.setAttribute("material", {src: "#straightPath_mat"});
        tile6.setAttribute("position", {x: 0, y: 0, z: -6});
        pathTiles.push(tile6);

        let tile7 = document.createElement("a-entity");
        tile7.setAttribute("set-ground-comp", {});
        tile7.setAttribute("set-enviro-comp", {});
        tile7.id = "path7";
        tile7.setAttribute("obj-model", {obj: "#straightPath_obj"});
        tile7.setAttribute("material", {src: "#straightPath_mat"});
        tile7.setAttribute("position", {x: 0, y: 0, z: -12});
        pathTiles.push(tile7);

        let tile8 = document.createElement("a-entity");
        tile8.setAttribute("load-animal-comp", {biomeType: "deci", pathDir: "path-left"});
        tile8.setAttribute("set-curve-l-comp", {});
        tile8.setAttribute("set-enviro-comp", {curve: "left"});
        tile8.id = "path8";
        tile8.setAttribute("obj-model", {obj: "#curvePath_obj"});
        tile8.setAttribute("material", {src: "#curvePath_mat"});
        tile8.setAttribute("position", {x: 0, y: 0, z: -18});
        tile8.setAttribute("rotation", {x: 0, y: 180, z: 0});
        pathTiles.push(tile8);

        let tile9 = document.createElement("a-entity");
        tile9.setAttribute("set-ground-comp", {});
        tile9.setAttribute("set-enviro-comp", {});
        tile9.id = "path9";
        tile9.setAttribute("obj-model", {obj: "#straightPath_obj"});
        tile9.setAttribute("material", {src: "#straightPath_mat"});
        tile9.setAttribute("position", {x: -6, y: 0, z: -24});
        pathTiles.push(tile9);

        let tile10 = document.createElement("a-entity");
        tile10.setAttribute("set-ground-comp", {});
        tile10.setAttribute("set-enviro-comp", {});
        tile10.id = "path10";
        tile10.setAttribute("obj-model", {obj: "#straightPath_obj"});
        tile10.setAttribute("material", {src: "#straightPath_mat"});
        tile10.setAttribute("position", {x: -6, y: 0, z: -30});
        pathTiles.push(tile10);

        let tile11 = document.createElement("a-entity");
        tile11.setAttribute("set-ground-comp", {});
        tile11.setAttribute("set-enviro-comp", {});
        tile11.id = "path11";
        tile11.setAttribute("obj-model", {obj: "#straightPath_obj"});
        tile11.setAttribute("material", {src: "#straightPath_mat"});
        tile11.setAttribute("position", {x: -6, y: 0, z: -36});
        pathTiles.push(tile11);

        let tile12 = document.createElement("a-entity");
        tile12.setAttribute("load-animal-comp", {biomeType: "deci", pathDir: "path-right"});
        tile12.setAttribute("set-curve-r-comp", {});
        tile12.setAttribute("set-enviro-comp", {curve: "right"});
        tile12.id = "path12";
        tile12.setAttribute("obj-model", {obj: "#curvePath_obj"});
        tile12.setAttribute("material", {src: "#curvePath_mat"});
        tile12.setAttribute("position", {x: -6, y: 0, z: -42});
        tile12.setAttribute("rotation", {x: 0, y: -90, z: 0});
        pathTiles.push(tile12);

        let tile13 = document.createElement("a-entity");
        tile13.setAttribute("set-ground-comp", {});
        tile13.setAttribute("set-enviro-comp", {});
        tile13.id = "path13";
        tile13.setAttribute("obj-model", {obj: "#straightPath_obj"});
        tile13.setAttribute("material", {src: "#straightPath_mat"});
        tile13.setAttribute("position", {x: 0, y: 0, z: -48});
        pathTiles.push(tile13);

        let tile14 = document.createElement("a-entity");
        tile14.setAttribute("set-ground-comp", {});
        tile14.setAttribute("set-enviro-comp", {});
        tile14.id = "path14";
        tile14.setAttribute("obj-model", {obj: "#straightPath_obj"});
        tile14.setAttribute("material", {src: "#straightPath_mat"});
        tile14.setAttribute("position", {x: 0, y: 0, z: -54});
        pathTiles.push(tile14);

        let tile15 = document.createElement("a-entity");
        tile15.setAttribute("load-animal-comp", {biomeType: "deci", pathDir: "path-right"});
        tile15.setAttribute("set-curve-r-comp", {});
        tile15.setAttribute("set-enviro-comp", {curve: "right"});
        tile15.id = "path15";
        tile15.setAttribute("obj-model", {obj: "#curvePath_obj"});
        tile15.setAttribute("material", {src: "#curvePath_mat"});
        tile15.setAttribute("position", {x: 0, y: 0, z: -60});
        tile15.setAttribute("rotation", {x: 0, y: -90, z: 0});
        pathTiles.push(tile15);

        let tile16 = document.createElement("a-entity");
        tile16.setAttribute("set-ground-comp", {});
        tile16.setAttribute("set-enviro-comp", {});
        tile16.id = "path16";
        tile16.setAttribute("obj-model", {obj: "#straightPath_obj"});
        tile16.setAttribute("material", {src: "#straightPath_mat"});
        tile16.setAttribute("position", {x: 6, y: 0, z: -66});
        pathTiles.push(tile16);

        let tile17 = document.createElement("a-entity");
        tile17.setAttribute("set-ground-comp", {});
        tile17.setAttribute("set-enviro-comp", {});
        tile17.id = "path17";
        tile17.setAttribute("obj-model", {obj: "#straightPath_obj"});
        tile17.setAttribute("material", {src: "#straightPath_mat"});
        tile17.setAttribute("position", {x: 6, y: 0, z: -72});
        pathTiles.push(tile17);

        let tile18 = document.createElement("a-entity");
        tile18.setAttribute("set-ground-comp", {});
        tile18.setAttribute("set-enviro-comp", {});
        tile18.id = "path18";
        tile18.setAttribute("obj-model", {obj: "#straightPath_obj"});
        tile18.setAttribute("material", {src: "#straightPath_mat"});
        tile18.setAttribute("position", {x: 6, y: 0, z: -78});
        pathTiles.push(tile18);

        let scene = document.querySelector("a-scene");

        
        if (startI == -1) {
            for (let j = 0; j < 12; j++) {
                scene.appendChild(pathTiles[j]);
            }
        }
        

        let lastKeyPress = 0;

        document.addEventListener('keydown', function(event) {
            console.log(lastKeyPress);

            //forward movement
            if (event.keyCode == 38 || event.keyCode == 87) {
                console.log(lastKeyPress);
                let camZ = document.querySelector("#cam").getAttribute("position").z;
                let count = Math.floor((camZ * -1)/6);
                if (lastKeyPress != 38 && lastKeyPress != 87) {
                    startI--;
                }
                console.log("start " + startI);
                console.log("count " + count);
                if (startI < count) {
                    startI = count;
                    //remove back tile
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
                    //add new tile, which will generate environment
                    //maybe re-assign obj and mat?
                    console.log("add path " + (count + 11));
                    console.log(pathTiles[count + 11]);
                    scene.appendChild(pathTiles[count + 11]);
                }
                lastKeyPress = event.keyCode;
            }
            
            //backward movement
            if (event.keyCode == 40 || event.keyCode == 83) {
                console.log(lastKeyPress);
                console.log("backwards movement");
                let camZ = document.querySelector("#cam").getAttribute("position").z;
                let count = Math.floor(camZ/6) * -1;
                if (lastKeyPress != 40 && lastKeyPress != 83) {
                    startI++;
                }
                console.log("start " + startI);
                console.log("count " + count);
                if (startI > count) {
                    startI = count;
                    //remove back tile
                    //remove tile
                    console.log("trigger tile change");
                    let tileName = "#path" + (count + 11);
                    console.log("remove path " + tileName);
                    let removeTile = document.querySelector(tileName);
                    removeTile.parentNode.removeChild(removeTile);
                    //remove planes and environment pieces
                    let selector = ".path" + (count + 11);
                    let items = document.querySelectorAll(selector);
                    items.forEach(function(item) {
                        item.parentNode.removeChild(item);
                    });
                    //add new tile, which will generate environment
                    //maybe re-assign obj and mat?
                    console.log("add path " + (count - 1));
                    console.log(pathTiles[count - 1]);
                    scene.appendChild(pathTiles[count - 1]);
                }
                lastKeyPress = event.keyCode;
            }
        });

    }
});