AFRAME.registerComponent('set-enviro-comp', {
    schema: {},
    init : function() {
        const Context_AF = this;
        let numBigRock1 = 2;
        let numBigRock2 = 2;
        let numBigRock3 = 2;
        let numBirch1 = 3;
        let numBirch2 = 3;
        let numBirch3 = 3;
        let numBirch4 = 3;
        //let numMaple = 10;
        //let numPine = 0;
        //let numSpruce = 0;
        
        let scene = document.querySelector("a-scene");
        let tileX = Context_AF.el.getAttribute('position').x + 3;
        let tileZ = Context_AF.el.getAttribute('position').z;

        /*
        if (tileZ < -9.8) { //if tileZ is less than the far edge of the last tile in an area, change tree values to shift to new environment seamlessly
            numMaple = 0;
            numBirch = 0;
        }
        */

        let sound = document.createElement("a-sound");
        sound.setAttribute("src", "../audio/testSound.mp3");
        sound.setAttribute("autoplay", true);
        sound.setAttribute("loop", true);
        Context_AF.el.addEventListener('loaded',function(){
            Context_AF.objectPlace("bigRock", tileZ, numBigRock1, scene, "/models/bigRock1.obj", "/textures/bigRock_tex.png", sound, tileX);
            Context_AF.objectPlace("bigRock", tileZ, numBigRock2, scene, "/models/bigRock2.obj", "/textures/bigRock_tex.png", sound, tileX);
            Context_AF.objectPlace("bigRock", tileZ, numBigRock3, scene, "/models/bigRock3.obj", "/textures/bigRock_tex.png", sound, tileX);
            Context_AF.objectPlace("birch", tileZ, numBirch1, scene, "/models/tree_birch_01.obj", "/textures/birchTree_tex.png", sound, tileX);
            Context_AF.objectPlace("birch", tileZ, numBirch2, scene, "/models/tree_birch_02.obj", "/textures/birchTree_tex.png", sound, tileX);
            Context_AF.objectPlace("birch", tileZ, numBirch3, scene, "/models/tree_birch_03.obj", "/textures/birchTree_tex.png", sound, tileX);
            Context_AF.objectPlace("birch", tileZ, numBirch4, scene, "/models/tree_birch_04.obj", "/textures/birchTree_tex.png", sound, tileX);
        });
        
    },
    objectPlace : function (type, depth, maxNum, place, objFile, matFile, soundItem, pos) {    
        for (i = 0; i < maxNum; i++) {
            let item = document.createElement("a-entity");
            let x = (Math.random() * (6 * numTiles)) + (pos/2);
            let z = ((Math.random() * 6) * -1) + depth + 3;
            item.id = type + "-right-" + i;
            item.setAttribute("obj-model", {obj: objFile});
            item.setAttribute("material", {src: matFile});
            item.setAttribute("position", {x: x, y: 0.1, z: z});
            place.appendChild(item);

            if (type == "maple" && i == 0) {
                item.appendChild(soundItem);
            }
        }
        for (i = 0; i < maxNum; i++) {
            let item = document.createElement("a-entity");
            let x = (Math.random() * (-6 * numTiles)) - (pos/2);
            let z = ((Math.random() * 6) * -1) + depth + 3;
            item.id = type + "-left-" + i;
            item.setAttribute("obj-model", {obj: objFile});
            item.setAttribute("material", {src: matFile});
            item.setAttribute("position", {x: x, y: 0.1, z: z});
            place.appendChild(item);
        }
    }
});