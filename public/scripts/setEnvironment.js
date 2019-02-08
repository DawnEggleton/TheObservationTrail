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
        Context_AF.el.addEventListener('loaded',function(){
            console.log("listener called");     
            Context_AF.objectPlace("bigRock1", tileZ, numBigRock1, scene, "/models/bigRock1.obj", "/textures/bigRock_tex.png");
            Context_AF.objectPlace("bigRock2", tileZ, numBigRock2, scene, "/models/bigRock2.obj", "/textures/bigRock_tex.png");
            Context_AF.objectPlace("bigRock3", tileZ, numBigRock3, scene, "/models/bigRock3.obj", "/textures/bigRock_tex.png");
        });
        
    },
    objectPlace : function (type, depth, maxNum, place, objFile, matFile) {    
        for (i = 0; i < maxNum; i++) {
            let item = document.createElement("a-entity");
            let x = (Math.random() * (6 * numTiles)) + 2;
            let z = ((Math.random() * 6) * -1) + depth + 3;
            item.id = type + "-right-" + i;
            item.setAttribute("obj-model", {obj: objFile});
            item.setAttribute("material", {src: matFile});
            item.setAttribute("position", {x: x, y: 0.1, z: z});
            item.setAttribute("scale", {x: 0.09, y: 0.09, z: 0.09});
            place.appendChild(item);
        }
        for (i = 0; i < maxNum; i++) {
            let item = document.createElement("a-entity");
            let x = (Math.random() * (-6 * numTiles)) - 2;
            let z = ((Math.random() * 6) * -1) + depth + 3;
            item.id = type + "-left-" + i;
            item.setAttribute("obj-model", {obj: objFile});
            item.setAttribute("material", {src: matFile});
            item.setAttribute("position", {x: x, y: 0.1, z: z});
            item.setAttribute("scale", {x: 0.09, y: 0.09, z: 0.09});
            place.appendChild(item);
        }
    }
});