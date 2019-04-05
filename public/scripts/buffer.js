AFRAME.registerComponent('buffer-comp', {
    schema: {},
    init : function() {
        const Context_AF = this;     
        let pathTiles = [];
        let startI = -1;

        //back-load tiles
        let tile0 = document.createElement("a-entity");
        tile0.setAttribute("set-ground-comp", {});
        tile0.setAttribute("set-enviro-comp", {});
        tile0.id = "path0";
        tile0.setAttribute("obj-model", {obj: "#straightPath_obj"});
        tile0.setAttribute("material", {src: "#straightPath_mat"});
        tile0.setAttribute("position", {x: 0, y: 0, z: 18});
        pathTiles.push(tile0);

        let tile1 = document.createElement("a-entity");
        tile1.setAttribute("set-ground-comp", {});
        tile1.setAttribute("set-enviro-comp", {});
        tile1.id = "path1";
        tile1.setAttribute("obj-model", {obj: "#straightPath_obj"});
        tile1.setAttribute("material", {src: "#straightPath_mat"});
        tile1.setAttribute("position", {x: 0, y: 0, z: 12});
        pathTiles.push(tile1);

        let tile2 = document.createElement("a-entity");
        tile2.setAttribute("set-ground-comp", {});
        tile2.setAttribute("set-enviro-comp", {});
        tile2.id = "path2";
        tile2.setAttribute("obj-model", {obj: "#straightPath_obj"});
        tile2.setAttribute("material", {src: "#straightPath_mat"});
        tile2.setAttribute("position", {x: 0, y: 0, z: 6});
        pathTiles.push(tile2);

        //deciduous environment tiles
        let tile3 = document.createElement("a-entity");
        tile3.setAttribute("set-ground-comp", {});
        tile3.setAttribute("set-enviro-comp", {});
        tile3.id = "path3";
        tile3.setAttribute("obj-model", {obj: "#straightPath_obj"});
        tile3.setAttribute("material", {src: "#straightPath_mat"});
        tile3.setAttribute("position", {x: 0, y: 0, z: 0});
        pathTiles.push(tile3);

        let tile4 = document.createElement("a-entity");
        tile4.setAttribute("set-ground-comp", {});
        tile4.setAttribute("set-enviro-comp", {});
        tile4.id = "path4";
        tile4.setAttribute("obj-model", {obj: "#straightPath_obj"});
        tile4.setAttribute("material", {src: "#straightPath_mat"});
        tile4.setAttribute("position", {x: 0, y: 0, z: -6});
        pathTiles.push(tile4);

        let tile5 = document.createElement("a-entity");
        tile5.setAttribute("set-ground-comp", {});
        tile5.setAttribute("set-enviro-comp", {});
        tile5.id = "path5";
        tile5.setAttribute("obj-model", {obj: "#straightPath_obj"});
        tile5.setAttribute("material", {src: "#straightPath_mat"});
        tile5.setAttribute("position", {x: 0, y: 0, z: -12});
        pathTiles.push(tile5);

        let tile6 = document.createElement("a-entity");
        tile6.setAttribute("load-animal-comp", {biomeType: "deci", pathDir: "path-left"});
        tile6.setAttribute("set-curve-l-comp", {});
        tile6.setAttribute("set-enviro-comp", {curve: "left"});
        tile6.id = "path6";
        tile6.setAttribute("obj-model", {obj: "#curvePath_obj"});
        tile6.setAttribute("material", {src: "#curvePath_mat"});
        tile6.setAttribute("position", {x: 0, y: 0, z: -18});
        tile6.setAttribute("rotation", {x: 0, y: 180, z: 0});
        pathTiles.push(tile6);

        let tile7 = document.createElement("a-entity");
        tile7.setAttribute("set-ground-comp", {});
        tile7.setAttribute("set-enviro-comp", {});
        tile7.id = "path7";
        tile7.setAttribute("obj-model", {obj: "#straightPath_obj"});
        tile7.setAttribute("material", {src: "#straightPath_mat"});
        tile7.setAttribute("position", {x: -6, y: 0, z: -24});
        pathTiles.push(tile7);

        let tile8 = document.createElement("a-entity");
        tile8.setAttribute("set-ground-comp", {});
        tile8.setAttribute("set-enviro-comp", {});
        tile8.id = "path8";
        tile8.setAttribute("obj-model", {obj: "#straightPath_obj"});
        tile8.setAttribute("material", {src: "#straightPath_mat"});
        tile8.setAttribute("position", {x: -6, y: 0, z: -30});
        pathTiles.push(tile8);

        let tile9 = document.createElement("a-entity");
        tile9.setAttribute("set-ground-comp", {});
        tile9.setAttribute("set-enviro-comp", {});
        tile9.id = "path9";
        tile9.setAttribute("obj-model", {obj: "#straightPath_obj"});
        tile9.setAttribute("material", {src: "#straightPath_mat"});
        tile9.setAttribute("position", {x: -6, y: 0, z: -36});
        pathTiles.push(tile9);

        let tile10 = document.createElement("a-entity");
        tile10.setAttribute("load-animal-comp", {biomeType: "deci", pathDir: "path-right"});
        tile10.setAttribute("set-curve-r-comp", {});
        tile10.setAttribute("set-enviro-comp", {curve: "right"});
        tile10.id = "path10";
        tile10.setAttribute("obj-model", {obj: "#curvePath_obj"});
        tile10.setAttribute("material", {src: "#curvePath_mat"});
        tile10.setAttribute("position", {x: -6, y: 0, z: -42});
        tile10.setAttribute("rotation", {x: 0, y: -90, z: 0});
        pathTiles.push(tile10);

        let tile11 = document.createElement("a-entity");
        tile11.setAttribute("set-ground-comp", {});
        tile11.setAttribute("set-enviro-comp", {});
        tile11.id = "path11";
        tile11.setAttribute("obj-model", {obj: "#straightPath_obj"});
        tile11.setAttribute("material", {src: "#straightPath_mat"});
        tile11.setAttribute("position", {x: 0, y: 0, z: -48});
        pathTiles.push(tile11);

        let tile12 = document.createElement("a-entity");
        tile12.setAttribute("set-ground-comp", {});
        tile12.setAttribute("set-enviro-comp", {});
        tile12.id = "path12";
        tile12.setAttribute("obj-model", {obj: "#straightPath_obj"});
        tile12.setAttribute("material", {src: "#straightPath_mat"});
        tile12.setAttribute("position", {x: 0, y: 0, z: -54});
        pathTiles.push(tile12);

        let tile13 = document.createElement("a-entity");
        tile13.setAttribute("load-animal-comp", {biomeType: "deci", pathDir: "path-right"});
        tile13.setAttribute("set-curve-r-comp", {});
        tile13.setAttribute("set-enviro-comp", {curve: "right"});
        tile13.id = "path13";
        tile13.setAttribute("obj-model", {obj: "#curvePath_obj"});
        tile13.setAttribute("material", {src: "#curvePath_mat"});
        tile13.setAttribute("position", {x: 0, y: 0, z: -60});
        tile13.setAttribute("rotation", {x: 0, y: -90, z: 0});
        pathTiles.push(tile13);

        let tile14 = document.createElement("a-entity");
        tile14.setAttribute("set-ground-comp", {});
        tile14.setAttribute("set-enviro-comp", {});
        tile14.id = "path14";
        tile14.setAttribute("obj-model", {obj: "#straightPath_obj"});
        tile14.setAttribute("material", {src: "#straightPath_mat"});
        tile14.setAttribute("position", {x: 6, y: 0, z: -66});
        pathTiles.push(tile14);

        let tile15 = document.createElement("a-entity");
        tile15.setAttribute("set-ground-comp", {});
        tile15.setAttribute("set-enviro-comp", {});
        tile15.id = "path15";
        tile15.setAttribute("obj-model", {obj: "#straightPath_obj"});
        tile15.setAttribute("material", {src: "#straightPath_mat"});
        tile15.setAttribute("position", {x: 6, y: 0, z: -72});
        pathTiles.push(tile15);

        //boreal tiles
        let tile16 = document.createElement("a-entity");
        tile16.setAttribute("set-ground-comp", {});
        tile16.setAttribute("set-enviro-comp", {});
        tile16.id = "path16";
        tile16.setAttribute("obj-model", {obj: "#straightPath_obj"});
        tile16.setAttribute("material", {src: "#straightPath_mat"});
        tile16.setAttribute("position", {x: 6, y: 0, z: -78});
        pathTiles.push(tile16);

        let tile17 = document.createElement("a-entity");
        tile17.setAttribute("set-ground-comp", {});
        tile17.setAttribute("set-enviro-comp", {});
        tile17.id = "path17";
        tile17.setAttribute("obj-model", {obj: "#straightPath_obj"});
        tile17.setAttribute("material", {src: "#straightPath_mat"});
        tile17.setAttribute("position", {x: 6, y: 0, z: -84});
        pathTiles.push(tile17);

        let tile18 = document.createElement("a-entity");
        tile18.setAttribute("load-animal-comp", {biomeType: "boreal", pathDir: "path-left"});
        tile18.setAttribute("set-curve-l-comp", {});
        tile18.setAttribute("set-enviro-comp", {curve: "left"});
        tile18.id = "path18";
        tile18.setAttribute("obj-model", {obj: "#curvePath_obj"});
        tile18.setAttribute("material", {src: "#curvePath_mat"});
        tile18.setAttribute("position", {x: 6, y: 0, z: -90});
        tile18.setAttribute("rotation", {x: 0, y: 180, z: 0});
        pathTiles.push(tile18);

        let tile19 = document.createElement("a-entity");
        tile19.setAttribute("set-ground-comp", {});
        tile19.setAttribute("set-enviro-comp", {});
        tile19.id = "path19";
        tile19.setAttribute("obj-model", {obj: "#straightPath_obj"});
        tile19.setAttribute("material", {src: "#straightPath_mat"});
        tile19.setAttribute("position", {x: 0, y: 0, z: -96});
        pathTiles.push(tile19);

        let tile20 = document.createElement("a-entity");
        tile20.setAttribute("set-ground-comp", {});
        tile20.setAttribute("set-enviro-comp", {});
        tile20.id = "path20";
        tile20.setAttribute("obj-model", {obj: "#straightPath_obj"});
        tile20.setAttribute("material", {src: "#straightPath_mat"});
        tile20.setAttribute("position", {x: 0, y: 0, z: -102});
        pathTiles.push(tile20);

        let tile21 = document.createElement("a-entity");
        tile21.setAttribute("load-animal-comp", {biomeType: "boreal", pathDir: "path-left"});
        tile21.setAttribute("set-curve-l-comp", {});
        tile21.setAttribute("set-enviro-comp", {curve: "left"});
        tile21.id = "path21";
        tile21.setAttribute("obj-model", {obj: "#curvePath_obj"});
        tile21.setAttribute("material", {src: "#curvePath_mat"});
        tile21.setAttribute("position", {x: 0, y: 0, z: -108});
        tile21.setAttribute("rotation", {x: 0, y: 180, z: 0});
        pathTiles.push(tile21);

        let tile22 = document.createElement("a-entity");
        tile22.setAttribute("set-ground-comp", {});
        tile22.setAttribute("set-enviro-comp", {});
        tile22.id = "path22";
        tile22.setAttribute("obj-model", {obj: "#straightPath_obj"});
        tile22.setAttribute("material", {src: "#straightPath_mat"});
        tile22.setAttribute("position", {x: -6, y: 0, z: -114});
        pathTiles.push(tile22);

        let tile23 = document.createElement("a-entity");
        tile23.setAttribute("set-ground-comp", {});
        tile23.setAttribute("set-enviro-comp", {});
        tile23.id = "path23";
        tile23.setAttribute("obj-model", {obj: "#straightPath_obj"});
        tile23.setAttribute("material", {src: "#straightPath_mat"});
        tile23.setAttribute("position", {x: -6, y: 0, z: -120});
        pathTiles.push(tile23);

        let tile24 = document.createElement("a-entity");
        tile24.setAttribute("set-ground-comp", {});
        tile24.setAttribute("set-enviro-comp", {});
        tile24.id = "path24";
        tile24.setAttribute("obj-model", {obj: "#straightPath_obj"});
        tile24.setAttribute("material", {src: "#straightPath_mat"});
        tile24.setAttribute("position", {x: -6, y: 0, z: -126});
        pathTiles.push(tile24);

        let tile25 = document.createElement("a-entity");
        tile25.setAttribute("load-animal-comp", {biomeType: "boreal", pathDir: "path-right"});
        tile25.setAttribute("set-curve-r-comp", {});
        tile25.setAttribute("set-enviro-comp", {curve: "right"});
        tile25.id = "path25";
        tile25.setAttribute("obj-model", {obj: "#curvePath_obj"});
        tile25.setAttribute("material", {src: "#curvePath_mat"});
        tile25.setAttribute("position", {x: -6, y: 0, z: -132});
        tile25.setAttribute("rotation", {x: 0, y: -90, z: 0});
        pathTiles.push(tile25);

        let tile26 = document.createElement("a-entity");
        tile26.setAttribute("set-ground-comp", {});
        tile26.setAttribute("set-enviro-comp", {});
        tile26.id = "path26";
        tile26.setAttribute("obj-model", {obj: "#straightPath_obj"});
        tile26.setAttribute("material", {src: "#straightPath_mat"});
        tile26.setAttribute("position", {x: 0, y: 0, z: -138});
        pathTiles.push(tile26);

        //wetlands tiles
        let tile27 = document.createElement("a-entity");
        tile27.setAttribute("set-ground-comp", {});
        tile27.setAttribute("set-enviro-comp", {});
        tile27.id = "path27";
        tile27.setAttribute("obj-model", {obj: "#wetTransit_path_obj"});
        tile27.setAttribute("material", {src: "#wetTransit_path_mat"});
        tile27.setAttribute("position", {x: 0, y: 0, z: -144});
        pathTiles.push(tile27);
        
        let tile28 = document.createElement("a-entity");
        tile28.setAttribute("set-ground-comp", {});
        tile28.setAttribute("set-enviro-comp", {});
        tile28.id = "path28";
        tile28.setAttribute("obj-model", {obj: "#wetGround_obj"});
        tile28.setAttribute("material", {src: "#wetGround_mat"});
        tile28.setAttribute("position", {x: 0, y: 0, z: -150});
        pathTiles.push(tile28);
        
        let tile29 = document.createElement("a-entity");
        tile29.setAttribute("load-animal-comp", {biomeType: "wetland", pathDir: "path-right"});
        tile29.setAttribute("set-ground-comp", {});
        tile29.setAttribute("set-enviro-comp", {});
        tile29.id = "path29";
        tile28.setAttribute("obj-model", {obj: "#wetGround_obj"});
        tile28.setAttribute("material", {src: "#wetGround_mat"});
        tile29.setAttribute("position", {x: 0, y: 0, z: -156});
        pathTiles.push(tile29);
        
        let tile30 = document.createElement("a-entity");
        tile30.setAttribute("set-ground-comp", {});
        tile30.setAttribute("set-enviro-comp", {});
        tile30.id = "path30";
        tile28.setAttribute("obj-model", {obj: "#wetGround_obj"});
        tile28.setAttribute("material", {src: "#wetGround_mat"});
        tile30.setAttribute("position", {x: 0, y: 0, z: -162});
        pathTiles.push(tile30);
        
        let tile31 = document.createElement("a-entity");
        tile31.setAttribute("set-ground-comp", {});
        tile31.setAttribute("set-enviro-comp", {});
        tile31.id = "path31";
        tile28.setAttribute("obj-model", {obj: "#wetGround_obj"});
        tile28.setAttribute("material", {src: "#wetGround_mat"});
        tile31.setAttribute("position", {x: 0, y: 0, z: -168});
        pathTiles.push(tile31);
        
        let tile32 = document.createElement("a-entity");
        tile32.setAttribute("set-ground-comp", {});
        tile32.setAttribute("set-enviro-comp", {});
        tile32.id = "path32";
        tile28.setAttribute("obj-model", {obj: "#wetGround_obj"});
        tile28.setAttribute("material", {src: "#wetGround_mat"});
        tile32.setAttribute("position", {x: 0, y: 0, z: -174});
        pathTiles.push(tile32);

        let scene = document.querySelector("a-scene");

        
        if (startI == -1) {
            for (let j = 0; j < 7; j++) {
                scene.appendChild(pathTiles[j]);
            }
        }
        

        let lastKeyPress = 0;

        document.addEventListener('keydown', function(event) {
            //forward movement
            if (event.keyCode == 38 || event.keyCode == 87) {
                let camZ = document.querySelector("#cam").getAttribute("position").z;
                let count = Math.floor((camZ * -1)/6);
                if (lastKeyPress != 38 && lastKeyPress != 87) {
                    startI--;
                }
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
                    scene.appendChild(pathTiles[count + 6]);
                }
                lastKeyPress = event.keyCode;
            }
        });

    }
});