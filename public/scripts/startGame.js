AFRAME.registerComponent('start-comp', {
    schema: {},
    init : function() {
        const Context_AF = this;
        Context_AF.el.addEventListener('click', function(event) {
            Context_AF.startGame();
        });
    },
    startGame : function() {
        const Context_AF = this;
        Context_AF.el.parentNode.removeChild(Context_AF.el);
        let elem = document.querySelector("#instructLoad");
        elem.parentNode.removeChild(elem);

        //create start button
        let hikerButton = document.createElement('a-entity');
        hikerButton.setAttribute("select-hiker-comp", {});
        hikerButton.id = "hikerButton";
        hikerButton.setAttribute("geometry", {primitive: "plane", width: 0.75, height: 0.25});
        hikerButton.setAttribute("material", {src: "#hikerButton_mat"});
        hikerButton.setAttribute("position", {x: 0, y: 1.2, z: 1});

        //create instructions
        let guideButton = document.createElement('a-entity');
        guideButton.setAttribute('select-guide-comp', {});
        guideButton.id = "guideButton";
        guideButton.setAttribute("geometry", {primitive: "plane", width: 0.75, height: 0.25});
        guideButton.setAttribute("material", {src: "#guideButton_mat"});
        guideButton.setAttribute("position", {x: 0, y: 1.6, z: 1});
        
        //create buttons
        let scene = document.querySelector('a-scene');
        scene.appendChild(hikerButton);
        scene.appendChild(guideButton);
    }
});