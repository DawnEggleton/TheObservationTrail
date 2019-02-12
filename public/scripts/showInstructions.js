AFRAME.registerComponent('show-instructions-comp', {
    schema: {},
    init : function() {
        const Context_AF = this;
        Context_AF.el.addEventListener('click', function(event) {
            Context_AF.showInstruct();
        });
    },
    showInstruct : function() {
        //clear buttons
        const Context_AF = this;
        Context_AF.el.parentNode.removeChild(Context_AF.el);
        let elem = document.querySelector("#startGame");
        elem.parentNode.removeChild(elem);

        //save line text as variables
        const line1 = "Line 1";
        const line2 = "Line 2";
        const line3 = "Line 3";
        const line4 = "Line 4";

        //create box
        let instructBox = document.createElement('a-entity');
        instructBox.id = "instructionsBox";
        instructBox.setAttribute('geometry', {primitive: "plane", width: 3, height:1.25});
        instructBox.setAttribute('position', {x: 0, y: 1.5, z:1});
        instructBox.setAttribute('material', {color: "#000000"});

        //create exit button
        let exitBox = document.createElement('a-entity');
        exitBox.setAttribute('hide-instructions-comp', {});
        exitBox.setAttribute('geometry', {primitive: "plane", width: 0.25, height:0.25});
        exitBox.setAttribute('position', {x: 1.375, y: 2, z: 1.001});
        exitBox.setAttribute('material', {color: "#f3223f"});
        let exitText = document.createElement('a-text');
        exitText.setAttribute("value", "X");
        exitText.setAttribute("color", "#ffffff");
        exitText.setAttribute("anchor", "center");
        exitText.setAttribute("align", "center");
        exitText.setAttribute("baseline", "center");
        
        let scene = document.querySelector('a-scene');
        scene.appendChild(instructBox);
        scene.appendChild(exitBox);
        exitBox.appendChild(exitText);
    }
});