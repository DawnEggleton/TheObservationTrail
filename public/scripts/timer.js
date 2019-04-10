AFRAME.registerComponent('timer-comp', {
    schema: {},
    init : function() {
    },
    tick : function (time, timeDelta) {     
        let scene = document.querySelector("a-scene");
        let cam = document.querySelector("#cam");
        let results = document.createElement("a-entity");
        results.setAttribute("show-results-comp", {});
        let countdown = time - timeStart;
        let minutes = parseInt(countdown / 60000, 10); 
        let seconds = parseInt(countdown % 60000, 10); 
        seconds = Math.floor(seconds / 1000);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds; 
        timer.setAttribute("value", minutes + ":" + seconds);
        console.log(completedAni);
        if (minutes == 5 || completedAni == 7) {
            timer.parentNode.removeChild(timer);
            cam.setAttribute("wasd-controls", {enabled: false});
            scene.appendChild(results);
        }
    }
});