AFRAME.registerComponent('set-enviro-comp', {
    schema: {
        curve: {type: 'string', default: 'straight'}
    },
    init : function() {
        const Context_AF = this;
        let numBigRock1 = numBigRock3 = numFallen1 = numFallen2 = 1;
        let numBigRock2 = numBirch1 = numBirch2 = numBirch3 = numBirch4 = numMaple1 = numMaple2 = 2;
        
        let scene = document.querySelector("a-scene");
        let tileX = Context_AF.el.getAttribute('position').x;
        let tileZ = Context_AF.el.getAttribute('position').z;
        let curve = Context_AF.el.getAttribute('set-enviro-comp').curve;

        if (tileZ < -90) {
            let numBigRock1 = numBigRock3 = numFallen1 = numFallen2 = 0;
            let numBigRock2 = numBirch1 = numBirch2 = numBirch3 = numBirch4 = numMaple1 = numMaple2 = 1;
        }

        let sound = document.createElement("a-sound");
        sound.setAttribute("src", "../audio/testSound.mp3");
        sound.setAttribute("autoplay", true);
        sound.setAttribute("loop", true);
        Context_AF.el.addEventListener('loaded',function(){
            Context_AF.objectPlace("bigRock", tileZ, numBigRock1, scene, "#rock1_obj", "#rock_mat", sound, tileX, curve);
            Context_AF.objectPlace("bigRock", tileZ, numBigRock2, scene, "#rock2_obj", "#rock_mat", sound, tileX, curve);
            Context_AF.objectPlace("bigRock", tileZ, numBigRock3, scene, "#rock3_obj", "#rock_mat", sound, tileX, curve);
            Context_AF.objectPlace("birch", tileZ, numBirch1, scene, "#birch1_obj", "#birch_mat", sound, tileX, curve);
            Context_AF.objectPlace("birch", tileZ, numBirch2, scene, "#birch2_obj", "#birch_mat", sound, tileX, curve);
            Context_AF.objectPlace("birch", tileZ, numBirch3, scene, "#birch3_obj", "#birch_mat", sound, tileX, curve);
            Context_AF.objectPlace("birch", tileZ, numBirch4, scene, "#birch4_obj", "#birch_mat", sound, tileX, curve);
            Context_AF.objectPlace("maple", tileZ, numMaple1, scene, "#maple1_obj", "#maple_mat", sound, tileX, curve);
            Context_AF.objectPlace("maple", tileZ, numMaple2, scene, "#maple2_obj", "#maple_mat", sound, tileX, curve);
            Context_AF.objectPlace("fallenTree", tileZ, numFallen1, scene, "#fallen1_obj", "#fallen_mat", sound, tileX, curve);
            Context_AF.objectPlace("fallenTree", tileZ, numFallen2, scene, "#fallen2_obj", "#fallen_mat", sound, tileX, curve);
        });
        
    },
    objectPlace : function (type, depth, maxNum, place, objFile, matFile, soundItem, pos, curving) {    
        for (i = 0; i < maxNum; i++) {
            let x = (Math.random() * (6 * numTiles)) + 2;
            let z = ((Math.random() * 6) * -1) + depth + 2;
            let lx = pos - 3;
            let rx = pos + 3;
            let randRot = Math.floor(Math.random() * 91);
            if (curving == "right") {
                rx += 6;
            }
            if (x < lx || x > rx) {
                let item = document.createElement("a-entity");
                item.id = type + "-right-" + i;
                item.setAttribute("obj-model", {obj: objFile});
                item.setAttribute("material", {src: matFile});
                item.setAttribute("position", {x: x, y: 0.1, z: z});
                item.setAttribute("rotation", {x: 0, y: randRot, z: 0});
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
            let randRot = Math.floor(Math.random() * 91);
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
                item.setAttribute("rotation", {x: 0, y: randRot, z: 0});
                place.appendChild(item);
            }
        }
    }
});