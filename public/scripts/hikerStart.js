AFRAME.registerComponent('hiker-start-comp', {
    schema: {},
    init : function() {
        const Context_AF = this;
        Context_AF.el.addEventListener('click', function(event) {
            Context_AF.startHike();
        });
    },
    startHike : function() {
        //clear elements
        const Context_AF = this;
        Context_AF.el.parentNode.removeChild(Context_AF.el);
        let elem = document.querySelector("#instructLoad");
        elem.parentNode.removeChild(elem);

        //create timer
        let timer = document.createElement("a-text");
        timer.setAttribute('timer-comp', {});
        timer.id = "timer";
        timer.setAttribute("value", "test");
        timer.setAttribute("position", {x: 0, y: -0.8, z: -1.25});
        timer.setAttribute("color", "#ffffff");
        timer.setAttribute("align", "center");
        timer.setAttribute("anchor", "center");
        timer.setAttribute("baseline", "center");
        timer.setAttribute("scale", {x: 0.5, y: 0.5, z: 0.5});
        
        let scene = document.querySelector("#cam");
        scene.appendChild(timer);
    },
    tock : function (time, timeDelta) {
        timeStart = time;
        console.log(timeStart);
    }
});