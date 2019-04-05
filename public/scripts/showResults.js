AFRAME.registerComponent('show-results-comp', {
    schema: {},
    init : function() {
        const Context_AF = this;
        console.log("results loaded");
        animalList = [];
        let scene = document.querySelector("a-scene");
        //add deciduous animals
        for (i = 0; i < 3; i++) {
            if (deciAnimals[i] == 1) {
                animalList.push("../images/skunk.png");
            }
            else if (deciAnimals[i] == 2) {
                animalList.push("../images/fox.png");
            }
            else if (deciAnimals[i] == 3) {
                animalList.push("../images/raccoon.png");
            }
            else if (deciAnimals[i] == 4) {
                animalList.push("../images/porcupine.png");
            }
            else if (deciAnimals[i] == 5) {
                animalList.push("../images/owl.png");
            }
        }
        //add boreal animals
        for (i = 0; i < 3; i++) {
            if (borealAnimals[i] == 1) {
                animalList.push("Deer");
            }
            else if (borealAnimals[i] == 2) {
                animalList.push("Black Bear");
            }
            else if (borealAnimals[i] == 3) {
                animalList.push("Moose");
            }
            else if (borealAnimals[i] == 4) {
                animalList.push("Lynx");
            }
            else if (borealAnimals[i] == 5) {
                animalList.push("Red-tailed Hawk");
            }
        }
        //add wetlands animal
        if (wetlandAnimals[i] == 1) {
            animalList.push("Beaver");
        }
        else if (wetlandAnimals[i] == 2) {
            animalList.push("Canadian Goose");
        }
        console.log(animalList);

        let resultDisplay = document.createElement("a-entity");
        resultDisplay.id = "resultsBox";
        resultDisplay.setAttribute('geometry', {primitive: "plane", width: 3, height:1.25});
        resultDisplay.setAttribute('position', {x: 0, y: 1.5, z:0.5});
        resultDisplay.setAttribute('material', {src: animalList[animNum]});

        //create right arrow
        let rightDir = document.createElement('a-entity');
        rightDir.setAttribute('result-change-comp', {dir: "right"});
        rightDir.setAttribute('geometry', {primitive: "plane", width: 0.25, height:0.25});
        rightDir.setAttribute('position', {x: 1.375, y: 2, z: 0.501});
        rightDir.setAttribute('material', {src: "../images/closeButton.png"});

        //create left arrow
        let leftDir = document.createElement('a-entity');
        leftDir.setAttribute('result-change-comp', {dir: "left"});
        leftDir.setAttribute('geometry', {primitive: "plane", width: 0.25, height:0.25});
        leftDir.setAttribute('position', {x: -1.375, y: 2, z: 0.501});
        leftDir.setAttribute('material', {src: "../images/closeButton.png"});

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