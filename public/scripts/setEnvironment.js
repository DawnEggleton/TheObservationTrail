AFRAME.registerComponent('set-enviro-comp', {
    schema: {},
    init : function() {
        const Context_AF = this;
        let numBigRock1 = 5;
        let numBigRock2 = 5;
        let numBigRock3 = 5;
        let numMaple = 10;
        let numBirch = 10;
        let numPine = 0;
        let numSpruce = 0;
        
        let tileZ = Context_AF.el.getAttribute('position').z;

        /*
        if (tileZ < -9.8) { //if tileZ is less than the far edge of the last tile in an area, change tree values to shift to new environment seamlessly
            numMaple = 0;
            numBirch = 0;
        }
        */

        let scene = document.querySelector("a-scene");
        let sound = document.createElement("a-sound");
        sound.setAttribute("src", "../audio/testSound.mp3");
        sound.setAttribute("autoplay", true);
        sound.setAttribute("loop", true);
        

        //big rock 1
        for (i = 0; i < numBigRock1; i++) {
            let tree = document.createElement("a-entity");
            let x = (Math.random() * (6 * numTiles)) + 2;
            let z = ((Math.random() * 6) * -1) + tileZ + 3;
            tree.id = "bigRockRight-" + i;
            tree.setAttribute("obj-model", {obj: "/models/bigRock1.obj", mtl: "/models/bigRock1.mtl"});
            tree.setAttribute("position", {x: x, y: 0.1, z: z});
            tree.setAttribute("scale", {x: 0.09, y: 0.09, z: 0.09});
            //set sound to a few trees; will be different sounds, so currently separated
            if(i == 0) {
                tree.appendChild(sound);
            }
            if(i == 1) {
                tree.appendChild(sound);
            }
            scene.appendChild(tree);
        }
        for (i = 0; i < numBigRock1; i++) {
            let tree = document.createElement("a-entity");
            let x = (Math.random() * (-6 * numTiles)) - 2;
            let z = ((Math.random() * 6) * -1) + tileZ + 3;
            tree.id = "bigRockLeft-" + i;
            tree.setAttribute("obj-model", {obj: "/models/bigRock1.obj", mtl: "/models/bigRock1.mtl"});
            tree.setAttribute("position", {x: x, y: 0.1, z: z});
            tree.setAttribute("scale", {x: 0.09, y: 0.09, z: 0.09});
            if(i == 0) {
                tree.appendChild(sound);
            }
            if(i == 1) {
                tree.appendChild(sound);
            }
            scene.appendChild(tree);
        }
        //big rock 2
        for (i = 0; i < numBigRock2; i++) {
            let tree = document.createElement("a-entity");
            let x = (Math.random() * (6 * numTiles)) + 2;
            let z = ((Math.random() * 6) * -1) + tileZ + 3;
            tree.id = "bigRockRight-" + i;
            tree.setAttribute("obj-model", {obj: "/models/bigRock2.obj", mtl: "/models/bigRock2.mtl"});
            tree.setAttribute("position", {x: x, y: 0.1, z: z});
            tree.setAttribute("scale", {x: 0.09, y: 0.09, z: 0.09});
            //set sound to a few trees; will be different sounds, so currently separated
            if(i == 0) {
                tree.appendChild(sound);
            }
            if(i == 1) {
                tree.appendChild(sound);
            }
            scene.appendChild(tree);
        }
        for (i = 0; i < numBigRock2; i++) {
            let tree = document.createElement("a-entity");
            let x = (Math.random() * (-6 * numTiles)) - 2;
            let z = ((Math.random() * 6) * -1) + tileZ + 3;
            tree.id = "bigRockLeft-" + i;
            tree.setAttribute("obj-model", {obj: "/models/bigRock2.obj", mtl: "/models/bigRock2.mtl"});
            tree.setAttribute("position", {x: x, y: 0.1, z: z});
            tree.setAttribute("scale", {x: 0.09, y: 0.09, z: 0.09});
            if(i == 0) {
                tree.appendChild(sound);
            }
            if(i == 1) {
                tree.appendChild(sound);
            }
            scene.appendChild(tree);
        }
        //big rock 3
        for (i = 0; i < numBigRock2; i++) {
            let tree = document.createElement("a-entity");
            let x = (Math.random() * (6 * numTiles)) + 2;
            let z = ((Math.random() * 6) * -1) + tileZ + 3;
            tree.id = "bigRockRight-" + i;
            tree.setAttribute("obj-model", {obj: "/models/bigRock3.obj", mtl: "/models/bigRock3.mtl"});
            tree.setAttribute("position", {x: x, y: 0.1, z: z});
            tree.setAttribute("scale", {x: 0.09, y: 0.09, z: 0.09});
            //set sound to a few trees; will be different sounds, so currently separated
            if(i == 0) {
                tree.appendChild(sound);
            }
            if(i == 1) {
                tree.appendChild(sound);
            }
            scene.appendChild(tree);
        }
        for (i = 0; i < numBigRock2; i++) {
            let tree = document.createElement("a-entity");
            let x = (Math.random() * (-6 * numTiles)) - 2;
            let z = ((Math.random() * 6) * -1) + tileZ + 3;
            tree.id = "bigRockLeft-" + i;
            tree.setAttribute("obj-model", {obj: "/models/bigRock3.obj", mtl: "/models/bigRock3.mtl"});
            tree.setAttribute("position", {x: x, y: 0.1, z: z});
            tree.setAttribute("scale", {x: 0.09, y: 0.09, z: 0.09});
            if(i == 0) {
                tree.appendChild(sound);
            }
            if(i == 1) {
                tree.appendChild(sound);
            }
            scene.appendChild(tree);
        }
        

        //maple trees
        for (i = 0; i < numMaple; i++) {
            let tree = document.createElement("a-entity");
            let x = (Math.random() * (6 * numTiles)) + 2;
            let z = ((Math.random() * 6) * -1) + tileZ + 3;
            tree.id = "mapleRight-" + i;
            tree.setAttribute("obj-model", {obj: "/models/flr_TreeObj.obj", mtl: "/models/flr_TreeObj.mtl"});
            tree.setAttribute("position", {x: x, y: 0.1, z: z});
            //set sound to a few trees; will be different sounds, so currently separated
            if(i == 0) {
                tree.appendChild(sound);
            }
            if(i == 1) {
                tree.appendChild(sound);
            }
            scene.appendChild(tree);
        }
        for (i = 0; i < numMaple; i++) {
            let tree = document.createElement("a-entity");
            let x = (Math.random() * (-6 * numTiles)) - 2;
            let z = ((Math.random() * 6) * -1) + tileZ + 3;
            tree.id = "mapleLeft-" + i;
            tree.setAttribute("obj-model", {obj: "/models/flr_TreeObj.obj", mtl: "/models/flr_TreeObj.mtl"});
            tree.setAttribute("position", {x: x, y: 0.1, z: z});
            if(i == 0) {
                tree.appendChild(sound);
            }
            if(i == 1) {
                tree.appendChild(sound);
            }
            scene.appendChild(tree);
        }

        //birch trees
        for (i = 0; i < numBirch; i++) {
            let tree = document.createElement("a-entity");
            let x = (Math.random() * (6 * numTiles)) + 2;
            let z = ((Math.random() * 6) * -1) + tileZ + 3;
            tree.id = "birchRight-" + i;
            tree.setAttribute("obj-model", {obj: "/models/flr_TreeObj.obj", mtl: "/models/flr_TreeObj.mtl"});
            tree.setAttribute("position", {x: x, y: 0.1, z: z});
            if(i == 0) {
                tree.appendChild(sound);
            }
            if(i == 1) {
                tree.appendChild(sound);
            }
            scene.appendChild(tree);
        }
        for (i = 0; i < numBirch; i++) {
            let tree = document.createElement("a-entity");
            let x = (Math.random() * (-6 * numTiles)) - 2;
            let z = ((Math.random() * 6) * -1) + tileZ + 3;
            tree.id = "birchLeft-" + i;
            tree.setAttribute("obj-model", {obj: "/models/flr_TreeObj.obj", mtl: "/models/flr_TreeObj.mtl"});
            tree.setAttribute("position", {x: x, y: 0.1, z: z});
            if(i == 0) {
                tree.appendChild(sound);
            }
            if(i == 1) {
                tree.appendChild(sound);
            }
            scene.appendChild(tree);
        }

        //pine trees
        for (i = 0; i < numPine; i++) {
            let tree = document.createElement("a-entity");
            let x = (Math.random() * (6 * numTiles)) + 2;
            let z = ((Math.random() * 6) * -1) + tileZ + 3;
            tree.id = "pineRight-" + i;
            tree.setAttribute("obj-model", {obj: "/models/flr_TreeObj.obj", mtl: "/models/flr_TreeObj.mtl"});
            tree.setAttribute("position", {x: x, y: 0.1, z: z});
            if(i == 0) {
                tree.appendChild(sound);
            }
            if(i == 1) {
                tree.appendChild(sound);
            }
            scene.appendChild(tree);
        }
        for (i = 0; i < numPine; i++) {
            let tree = document.createElement("a-entity");
            let x = (Math.random() * (-6 * numTiles)) - 2;
            let z = ((Math.random() * 6) * -1) + tileZ + 3;
            tree.id = "pineLeft-" + i;
            tree.setAttribute("obj-model", {obj: "/models/flr_TreeObj.obj", mtl: "/models/flr_TreeObj.mtl"});
            tree.setAttribute("position", {x: x, y: 0.1, z: z});
            if(i == 0) {
                tree.appendChild(sound);
            }
            if(i == 1) {
                tree.appendChild(sound);
            }
            scene.appendChild(tree);
        }

        //spruce trees
        for (i = 0; i < numSpruce; i++) {
            let tree = document.createElement("a-entity");
            let x = (Math.random() * (6 * numTiles)) + 2;
            let z = ((Math.random() * 6) * -1) + tileZ + 3;
            tree.id = "spruceRight-" + i;
            tree.setAttribute("obj-model", {obj: "/models/flr_TreeObj.obj", mtl: "/models/flr_TreeObj.mtl"});
            tree.setAttribute("position", {x: x, y: 0.1, z: z});
            if(i == 0) {
                tree.appendChild(sound);
            }
            if(i == 1) {
                tree.appendChild(sound);
            }
            scene.appendChild(tree);
        }
        for (i = 0; i < numSpruce; i++) {
            let tree = document.createElement("a-entity");
            let x = (Math.random() * (-6 * numTiles)) - 2;
            let z = ((Math.random() * 6) * -1) + tileZ + 3;
            tree.id = "spruceLeft-" + i;
            tree.setAttribute("obj-model", {obj: "/models/flr_TreeObj.obj", mtl: "/models/flr_TreeObj.mtl"});
            tree.setAttribute("position", {x: x, y: 0.1, z: z});
            if(i == 0) {
                tree.appendChild(sound);
            }
            if(i == 1) {
                tree.appendChild(sound);
            }
            scene.appendChild(tree);
        }
        
    }
});