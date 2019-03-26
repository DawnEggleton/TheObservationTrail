AFRAME.registerComponent('select-hiker-comp', {
    schema: {},
    init : function() {
        const Context_AF = this;
        Context_AF.el.addEventListener('click', function(event) {
            Context_AF.selectHiker();
        });
    },
    selectHiker : function() {
        //remove hiker and guide option buttons
        const Context_AF = this;
        Context_AF.el.parentNode.removeChild(Context_AF.el);
        let elem = document.querySelector("#selectGuide");
        elem.parentNode.removeChild(elem);

        //create start button
        let startButton = document.createElement('a-entity');
        startButton.setAttribute("hiker-start-comp", {});
        startButton.id = "startGame";
        startButton.setAttribute("geometry", {primitive: "plane", width: 0.75, height: 0.25});
        startButton.setAttribute("material", {src: "#startButton_mat"});
        startButton.setAttribute("position", {x: 0, y: 1.2, z: 1});

        //create instructions
        let instructButton = document.createElement('a-entity');
        instructButton.setAttribute('show-instructions-comp', {});
        instructButton.id = "instructLoad";
        instructButton.setAttribute("geometry", {primitive: "plane", width: 1.4, height: 0.25});
        instructButton.setAttribute("material", {src: "#instructButton_mat"});
        instructButton.setAttribute("position", {x: 0, y: 1.6, z: 1});
        
        //create buttons
        let scene = document.querySelector('a-scene');
        scene.appendChild(startButton);
        scene.appendChild(instructButton);
    }
});