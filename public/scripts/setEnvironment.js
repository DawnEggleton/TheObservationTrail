AFRAME.registerComponent('set-enviro-comp', {
    schema: {
        curve: {type: 'string', default: 'straight'}
    },
    init : function() {
        const Context_AF = this;
        let numBigRock1 = 2;
        let numBigRock2 = 2;
        let numBigRock3 = 2;
        let numBirch1 = 3;
        let numBirch2 = 3;
        let numBirch3 = 3;
        let numBirch4 = 3;
        let numMaple1 = 3;
        let numMaple2 = 3;
        let numFallen1 = 2;
        let numFallen2 = 2;
        
        let scene = document.querySelector("a-scene");
        let tileX = Context_AF.el.getAttribute('position').x;
        let tileZ = Context_AF.el.getAttribute('position').z;
        let curve = Context_AF.el.getAttribute('set-enviro-comp').curve;

        if (tileZ < -90) {
            numBigRock1 = 1;
            numBigRock2 = 1;
            numBigRock3 = 1;
            numBirch1 = 1;
            numBirch2 = 1;
            numBirch3 = 1;
            numBirch4 = 1;
            numMaple1 = 1;
            numMaple2 = 1;
            numFallen1 = 0;
            numFallen2 = 0;
        }

        let sound = document.createElement("a-sound");
        sound.setAttribute("src", "../audio/testSound.mp3");
        sound.setAttribute("autoplay", true);
        sound.setAttribute("loop", true);
        Context_AF.el.addEventListener('loaded',function(){
            Context_AF.objectPlace("bigRock", tileZ, numBigRock1, scene, "/models/bigRock1.obj", "/textures/bigRock_tex.png", sound, tileX, curve);
            Context_AF.objectPlace("bigRock", tileZ, numBigRock2, scene, "/models/bigRock2.obj", "/textures/bigRock_tex.png", sound, tileX, curve);
            Context_AF.objectPlace("bigRock", tileZ, numBigRock3, scene, "/models/bigRock3.obj", "/textures/bigRock_tex.png", sound, tileX, curve);
            Context_AF.objectPlace("birch", tileZ, numBirch1, scene, "/models/tree_birch_01.obj", "/textures/birchTree_tex.png", sound, tileX, curve);
            Context_AF.objectPlace("birch", tileZ, numBirch2, scene, "/models/tree_birch_02.obj", "/textures/birchTree_tex.png", sound, tileX, curve);
            Context_AF.objectPlace("birch", tileZ, numBirch3, scene, "/models/tree_birch_03.obj", "/textures/birchTree_tex.png", sound, tileX, curve);
            Context_AF.objectPlace("birch", tileZ, numBirch4, scene, "/models/tree_birch_04.obj", "/textures/birchTree_tex.png", sound, tileX, curve);
            Context_AF.objectPlace("maple", tileZ, numMaple1, scene, "/models/tree_maple_01.obj", "/textures/mapleTree_tex.png", sound, tileX, curve);
            Context_AF.objectPlace("maple", tileZ, numMaple2, scene, "/models/tree_maple_02.obj", "/textures/mapleTree_tex.png", sound, tileX, curve);
            Context_AF.objectPlace("fallenTree", tileZ, numFallen1, scene, "/models/tree_fallen_01.obj", "/textures/fallenTree_tex.png", sound, tileX, curve);
            Context_AF.objectPlace("fallenTree", tileZ, numFallen2, scene, "/models/tree_fallen_02.obj", "/textures/fallenTree_tex.png", sound, tileX, curve);
        });
        
    },
    objectPlace : function (type, depth, maxNum, place, objFile, matFile, soundItem, pos, curving) {    
        for (i = 0; i < maxNum; i++) {
            let x = (Math.random() * (6 * numTiles)) + 2;
            let z = ((Math.random() * 6) * -1) + depth + 2;
            let lx = pos - 3;
            let rx = pos + 3;
            if (curving == "right") {
                rx += 6;
            }
            if (x < lx || x > rx) {
                let item = document.createElement("a-entity");
                item.id = type + "-right-" + i;
                item.setAttribute("obj-model", {obj: objFile});
                item.setAttribute("material", {src: matFile});
                item.setAttribute("position", {x: x, y: 0.1, z: z});
                place.appendChild(item);
            }
            /*if (type == "maple" && i == 0) {
                item.appendChild(soundItem);
            }*/
        }
        for (i = 0; i < maxNum; i++) {
            let item = document.createElement("a-entity");
            let x = (Math.random() * (-6 * numTiles)) - 2;
            let z = ((Math.random() * 6) * -1) + depth + 3;
            let lx = pos - 3;
            if (curving == "left") {
                lx -= 6;
            }
            let rx = pos + 3;
            if (x < lx || x > rx) {
                let item = document.createElement("a-entity");
                item.id = type + "-left-" + i;
                item.setAttribute("obj-model", {obj: objFile});
                item.setAttribute("material", {src: matFile});
                item.setAttribute("position", {x: x, y: 0.1, z: z});
                place.appendChild(item);
            }
        }
    }
});