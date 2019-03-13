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