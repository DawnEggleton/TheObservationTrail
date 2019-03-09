step = document.querySelector('#step_snd');

document.addEventListener('keydown', function(event) {
    if (event.keyCode == 38 || event.keyCode == 87) {
        setTimeout(function() {
            step.components['sound'].playSound();
        }, 500);        
    }
});