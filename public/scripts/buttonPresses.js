step = document.querySelector('#step_snd');

document.addEventListener('keydown', function(event) {
    if (event.keyCode == 38 || event.keyCode == 87 || event.keyCode == 37 || event.keyCode == 65 || event.keyCode == 39 || event.keyCode == 68 || event.keyCode == 40 || event.keyCode == 83) {
        setTimeout(function() {
            step.components['sound'].playSound();
        }, 500);        
    }
});

clap = document.querySelector('#clap_snd');

document.addEventListener('keydown', function(event) {
    if (event.keyCode == 32) {
        clap.components['sound'].stopSound();
        clap.components['sound'].playSound();
    }
});

//keep left movement on path
document.addEventListener('keydown', function(event) {
    if (event.keyCode == 37 || event.keyCode == 65) {
        let cam = document.querySelector("#cam");
        let camX = cam.getAttribute("position").x;
        let camY = cam.getAttribute("position").y;
        let camZ = cam.getAttribute("position").z;
        if (camX <= -6) {
            cam.setAttribute("position", {x: -6, y: camY, z: camZ});
        }
    }
});
//keep right movement on path
document.addEventListener('keydown', function(event) {
    if (event.keyCode == 39 || event.keyCode == 68) {
        let cam = document.querySelector("#cam");
        let camX = cam.getAttribute("position").x;
        let camY = cam.getAttribute("position").y;
        let camZ = cam.getAttribute("position").z;
        if (camX >= 6) {
            cam.setAttribute("position", {x: 6, y: camY, z: camZ});
        }
    }
});