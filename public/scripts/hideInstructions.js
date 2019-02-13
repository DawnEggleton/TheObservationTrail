AFRAME.registerComponent('hide-instructions-comp', {
    schema: {},
    init : function() {
        const Context_AF = this;
        console.log("hide instruct init");
        Context_AF.el.addEventListener('click', function(event) {
            Context_AF.hideInstruct();
        });
    },
    hideInstruct : function() {
        console.log("hide instruct run");
        //remove instructions
        const Context_AF = this;
        Context_AF.el.parentNode.removeChild(Context_AF.el);
        let elem = document.querySelector("#instructionsBox");
        elem.parentNode.removeChild(elem);

        //re-create start button
        let startButton = document.createElement('a-entity');
        startButton.setAttribute("hiker-start-comp", {});
        startButton.id = "startGame";
        startButton.setAttribute("geometry", {primitive: "plane", width: 0.75, height: 0.25});
        startButton.setAttribute("material", {color: "#ff9048"});
        startButton.setAttribute("position", {x: 0, y: 1.2, z: 1});
        let startText = document.createElement('a-text');
        startText.setAttribute("value", "Start");
        startText.setAttribute("color", "#ffffff");
        startText.setAttribute("anchor", "center");
        startText.setAttribute("align", "center");
        startText.setAttribute("baseline", "center");

        //re-create instructions button
        let instructButton = document.createElement('a-entity');
        instructButton.setAttribute('show-instructions-comp', {});
        instructButton.id = "instructLoad";
        instructButton.setAttribute("geometry", {primitive: "plane", width: 1.4, height: 0.25});
        instructButton.setAttribute("material", {color: "#ff9048"});
        instructButton.setAttribute("position", {x: 0, y: 1.6, z: 1});
        let instructText = document.createElement('a-text');
        instructText.setAttribute("value", "Instructions");
        instructText.setAttribute("color", "#ffffff");
        instructText.setAttribute("anchor", "center");
        instructText.setAttribute("align", "center");
        instructText.setAttribute("baseline", "center");
        
        //create buttons
        let scene = document.querySelector('a-scene');
        scene.appendChild(startButton);
        startButton.appendChild(startText);
        scene.appendChild(instructButton);
        instructButton.appendChild(instructText);
    }
});