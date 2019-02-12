AFRAME.registerComponent('timer-comp', {
    schema: {},
    init : function() {
    },
    tick : function (time, timeDelta) {     
        let countdown = time - timeStart;
        let minutes = parseInt(countdown / 60000, 10); 
        let seconds = parseInt(countdown % 60000, 10); 
        seconds = Math.floor(seconds / 1000);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds; 
        timer.setAttribute("value", minutes + ":" + seconds);
    }
});