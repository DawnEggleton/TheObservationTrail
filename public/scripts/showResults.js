AFRAME.registerComponent('show-results-comp', {
    schema: {},
    init : function() {
        const Context_AF = this;
        console.log("results loaded");
        animalList = [];
        let scene = document.querySelector("a-scene");
        let cam = document.querySelector("#cam");
        let camZ = cam.getAttribute("position").z;
        let camX = cam.getAttribute("position").x;
        //add deciduous animals
        for (i = 0; i < 3; i++) {
            if (deciAnimals[i] == 1) {
                animalList.push("../images/skunkResult.png");
            }
            else if (deciAnimals[i] == 2) {
                animalList.push("../images/foxResult.png");
            }
            else if (deciAnimals[i] == 3) {
                animalList.push("../images/raccoonResult.png");
            }
            else if (deciAnimals[i] == 4) {
                animalList.push("../images/porcupineResult.png");
            }
            else if (deciAnimals[i] == 5) {
                animalList.push("../images/owlResult.png");
            }
        }
        //add boreal animals
        for (i = 0; i < 3; i++) {
            if (borealAnimals[i] == 1) {
                animalList.push("../images/deerResult.png");
            }
            else if (borealAnimals[i] == 2) {
                animalList.push("../images/blackBearResult.png");
            }
            else if (borealAnimals[i] == 3) {
                animalList.push("../images/mooseResult.png");
            }
            else if (borealAnimals[i] == 4) {
                animalList.push("../images/lynxResult.png");
            }
            else if (borealAnimals[i] == 5) {
                animalList.push("../images/hawkResult.png");
            }
        }
        //add wetlands animal
        if (wetlandAnimals[i] == 1) {
            animalList.push("../images/beaverResult.png");
        }
        else if (wetlandAnimals[i] == 2) {
            animalList.push("../images/gooseResult.png");
        }

        let resultDisplay = document.createElement("a-entity");
        resultDisplay.id = "resultsBox";
        resultDisplay.setAttribute('geometry', {primitive: "plane", width: 3, height:1.25});
        resultDisplay.setAttribute('position', {x: camX, y: 1.5, z: (camZ - 1.5)});
        resultDisplay.setAttribute('material', {src: animalList[animNum]});

        //create right arrow
        let rightDir = document.createElement('a-entity');
        rightDir.setAttribute('result-change-comp', {dir: "right"});
        rightDir.setAttribute('geometry', {primitive: "plane", width: 0.25, height:0.25});
        rightDir.setAttribute('position', {x: (camX + 1.375), y: 2, z: (camZ - 1.499)});
        rightDir.setAttribute('material', {src: "../images/rightArrow.png"});

        //create left arrow
        let leftDir = document.createElement('a-entity');
        leftDir.setAttribute('result-change-comp', {dir: "left"});
        leftDir.setAttribute('geometry', {primitive: "plane", width: 0.25, height:0.25});
        leftDir.setAttribute('position', {x: (camX - 1.375), y: 2, z: (camZ - 1.499)});
        leftDir.setAttribute('material', {src: "../images/leftArrow.png"});

        scene.appendChild(resultDisplay);
        scene.appendChild(rightDir);
        scene.appendChild(leftDir);
        console.log(animNum);
    },
    tick : function (time, timeDelta) {   
        let resultDisplay = document.querySelector("#resultsBox");
        resultDisplay.setAttribute('material', {src: animalList[animNum]});
    }
});