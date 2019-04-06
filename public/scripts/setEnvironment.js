AFRAME.registerComponent('set-enviro-comp', {
    schema: {
        curve: {type: 'string', default: 'straight'}
    },
    init : function() {
        const Context_AF = this;
        let numBigRock1 = numBigRock3 = numFallen1 = numFallen2 = numBigRock2 = numBirch1 = numBirch2 = numBirch3 = numBirch4 = numMaple1 = numMaple2 = 1;
        let numPine1 = numPine2 = numPine3 = numPine4 = numStump = numSedRock = numCattail = 0;
        
        let scene = document.querySelector("a-scene");
        let tileX = Context_AF.el.getAttribute('position').x;
        let tileZ = Context_AF.el.getAttribute('position').z;
        let curve = Context_AF.el.getAttribute('set-enviro-comp').curve;
        let tileClass = Context_AF.el.id;

        if (tileZ < -60) {
            numBigRock1 = numBigRock3 = numFallen1 = numFallen2 = 0;
            numBigRock2 = numBirch1 = numBirch2 = numBirch3 = numBirch4 = numMaple1 = numMaple2 = 1;
            numPine1 = numPine2 = numStump = numSedRock = 1;
        }

        if (tileZ < -72) {
            numBigRock1 = numBigRock3 = numFallen1 = numFallen2 = numBigRock2 = numBirch1 = numBirch2 = numBirch3 = numBirch4 = numMaple1 = numMaple2 = 0;
            numPine1 = numPine2 = numStump = numSedRock = 2;
            numPine3 = numPine4 = 3;
        }

        if (tileZ < -138) {
            numBigRock1 = numBigRock3 = numFallen1 = numFallen2 = numBigRock2 = numBirch1 = numBirch2 = numBirch3 = numBirch4 = numMaple1 = numMaple2 = numPine1 = numPine2 = numPine3 = numPine4 = numStump = numSedRock = 0;
            numCattail = 1;
        }


        Context_AF.el.addEventListener('loaded',function(){
            Context_AF.objectPlace("bigRock1", tileZ, numBigRock1, scene, "#rock1_obj", "#rock_mat", tileX, curve, tileClass);
            Context_AF.objectPlace("bigRock2", tileZ, numBigRock2, scene, "#rock2_obj", "#rock_mat", tileX, curve, tileClass);
            Context_AF.objectPlace("bigRock3", tileZ, numBigRock3, scene, "#rock3_obj", "#rock_mat", tileX, curve, tileClass);
            Context_AF.objectPlace("birch1", tileZ, numBirch1, scene, "#birch1_obj", "#birch_mat", tileX, curve, tileClass);
            Context_AF.objectPlace("birch2", tileZ, numBirch2, scene, "#birch2_obj", "#birch_mat", tileX, curve, tileClass);
            Context_AF.objectPlace("birch3", tileZ, numBirch3, scene, "#birch3_obj", "#birch_mat", tileX, curve, tileClass);
            Context_AF.objectPlace("birch4", tileZ, numBirch4, scene, "#birch4_obj", "#birch_mat", tileX, curve, tileClass);
            Context_AF.objectPlace("maple1", tileZ, numMaple1, scene, "#maple1_obj", "#maple_mat", tileX, curve, tileClass);
            Context_AF.objectPlace("maple2", tileZ, numMaple2, scene, "#maple2_obj", "#maple_mat", tileX, curve, tileClass);
            Context_AF.objectPlace("fallenTree1", tileZ, numFallen1, scene, "#fallen1_obj", "#fallen_mat", tileX, curve, tileClass);
            Context_AF.objectPlace("fallenTree2", tileZ, numFallen2, scene, "#fallen2_obj", "#fallen_mat", tileX, curve, tileClass);
            Context_AF.objectPlace("pine1", tileZ, numPine1, scene, "#pine1_obj", "#pine_mat", tileX, curve, tileClass);
            Context_AF.objectPlace("pine2", tileZ, numPine2, scene, "#pine2_obj", "#pine_mat", tileX, curve, tileClass);
            Context_AF.objectPlace("pine3", tileZ, numPine3, scene, "#pine3_obj", "#pine_mat", tileX, curve, tileClass);
            Context_AF.objectPlace("pine4", tileZ, numPine4, scene, "#pine4_obj", "#pine_mat", tileX, curve, tileClass);
            Context_AF.objectPlace("treeStump", tileZ, numStump, scene, "#treeStump_obj", "#treeStump_mat", tileX, curve, tileClass);
            Context_AF.objectPlace("sedRock", tileZ, numSedRock, scene, "#sedRock_obj", "#sedRock_mat", tileX, curve, tileClass);
            Context_AF.objectPlace("cattail", tileZ, numCattail, scene, "#cattail_obj", "#cattail_mat", tileX, curve, tileClass);
        });
        
    },
    objectPlace : function (type, depth, maxNum, place, objFile, matFile, pos, curving, name) {    
        for (i = 0; i < maxNum; i++) {
            let x = (Math.random() * (6 * numTiles)) + 2;
            let z = ((Math.random() * 6) * -1) + depth + 2;
            if (type == "cattail"){
                x = 7;
                z = depth - 1;
            }
            let lx = pos - 3;
            let rx = pos + 3;
            let randRot = Math.floor(Math.random() * 91);
            if (type == "cattail") {
                randRot = 180;
            }          

            if (curving == "right") {
                rx += 6;
            }
            if (x < lx || x > rx) {
                let item = document.createElement("a-entity");
                item.id = type + "-right-" + i;
                item.className = name;
                item.setAttribute("obj-model", {obj: objFile});
                item.setAttribute("material", {src: matFile});
                item.setAttribute("position", {x: x, y: 0.1, z: z});
                item.setAttribute("rotation", {x: 0, y: randRot, z: 0});
                place.appendChild(item); 

                let sound = document.createElement("a-sound");
                sound.setAttribute("autoplay", true);
                sound.setAttribute("loop", true);
                if (type == "birch1" || type == "birch2") {
                    sound.setAttribute("src", "../audio/chickadee.wav");
                    sound.setAttribute("volume", 3);
                }
                else if (type == "maple1" || type == "maple2") {                    
                    sound.setAttribute("src", "../audio/redSquirrel.wav");
                    sound.setAttribute("volume", 5);
                }
                else if (type == "birch3") {                    
                    sound.setAttribute("src", "../audio/crow.wav");
                    sound.setAttribute("volume", 3);
                }
                else if (type == "pine1" || type =="pine4") {                    
                    sound.setAttribute("src", "../audio/crow.wav"); //birds
                    sound.setAttribute("volume", 3);
                }
                else if (type == "pine2" || type =="pine3") {                    
                    sound.setAttribute("src", "../audio/crow.wav"); //rainforest birds
                    sound.setAttribute("volume", 3);
                }
                else if (type == "treeStump") {                    
                    sound.setAttribute("src", "../audio/crow.wav"); //deer
                    sound.setAttribute("volume", 3);
                }
                else if (type == "cattail1" || type == "cattail3") {                    
                    sound.setAttribute("src", "../audio/crow.wav"); //frogs
                    sound.setAttribute("volume", 3);
                }
                else {
                    sound.setAttribute("src", "../audio/wind.wav");
                    sound.setAttribute("volume", 2);
                }
                item.appendChild(sound);
            }        

        }
        for (i = 0; i < maxNum; i++) {
            let x = (Math.random() * (-6 * numTiles)) - 2;
            let z = ((Math.random() * 6) * -1) + depth + 3;
            if (type == "cattail"){
                x = -7;
                z = depth - 1;
            }
            let lx = pos - 3;
            let randRot = Math.floor(Math.random() * 91);
            if (type == "cattail") {
                randRot = 0;
            }
            if (curving == "left") {
                lx -= 6;
            }
            let rx = pos + 3;
            if (x < lx || x > rx) {
                let item = document.createElement("a-entity");
                item.id = type + "-left-" + i;
                item.className = name;
                item.setAttribute("obj-model", {obj: objFile});
                item.setAttribute("material", {src: matFile});
                item.setAttribute("position", {x: x, y: 0.1, z: z});
                item.setAttribute("rotation", {x: 0, y: randRot, z: 0});
                place.appendChild(item);

                let sound = document.createElement("a-sound");
                sound.setAttribute("autoplay", true);
                sound.setAttribute("loop", true);
                if (type == "birch1" || type == "birch2") {
                    sound.setAttribute("src", "../audio/chickadee.wav");
                    sound.setAttribute("volume", 3);
                }
                else if (type == "maple1" || type == "maple2") {                    
                    sound.setAttribute("src", "../audio/redSquirrel.wav");
                    sound.setAttribute("volume", 5);
                }
                else if (type == "birch3") {                    
                    sound.setAttribute("src", "../audio/crow.wav");
                    sound.setAttribute("volume", 3);
                }
                else if (type == "pine1" || type =="pine4") {                    
                    sound.setAttribute("src", "../audio/crow.wav"); //birds
                    sound.setAttribute("volume", 3);
                }
                else if (type == "pine2" || type =="pine3") {                    
                    sound.setAttribute("src", "../audio/crow.wav"); //rainforest birds
                    sound.setAttribute("volume", 3);
                }
                else if (type == "treeStump") {                    
                    sound.setAttribute("src", "../audio/crow.wav"); //deer
                    sound.setAttribute("volume", 3);
                }
                else if (type == "cattail1" || type == "cattail3") {                    
                    sound.setAttribute("src", "../audio/crow.wav"); //frogs
                    sound.setAttribute("volume", 3);
                }
                else {
                    sound.setAttribute("src", "../audio/wind.wav");
                    sound.setAttribute("volume", 2);
                }
                item.appendChild(sound);
            }
        }
    }
});