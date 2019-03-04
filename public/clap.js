clap = document.querySelector('#clap_snd');

document.addEventListener('keydown', function(event) {
    if (event.keyCode == 32) {
        clap.components['sound'].stopSound();
        clap.components['sound'].playSound();
    }
});