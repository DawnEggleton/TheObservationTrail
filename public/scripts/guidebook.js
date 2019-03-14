$(document).ready( function() {
    let biomeOpen = false;
    let speciesOpen = false;
    let sizeOpen = false;
    let colorOpen = false;

    $('#biome').on('click', function(){	
        if (biomeOpen == false) {
            $('.nav.biome').show();
            $('.nav.species').hide();
            $('.nav.size').hide();
            $('.nav.color').hide();
            biomeOpen = true;
        }
        else {
            $('.nav.biome').hide();
            biomeOpen = false;
        }
    });
    
    $('#species').on('click', function(){	
        if (speciesOpen == false) {
            $('.nav.biome').hide();
            $('.nav.species').show();
            $('.nav.size').hide();
            $('.nav.color').hide();
            speciesOpen = true;
        }
        else {
            $('.nav.species').hide();
            speciesOpen = false;
        }
    });
    
    $('#size').on('click', function(){	
        if (sizeOpen == false) {
            $('.nav.biome').hide();
            $('.nav.species').hide();
            $('.nav.size').show();
            $('.nav.color').hide();
            sizeOpen = true;
        }
        else {
            $('.nav.size').hide();
            sizeOpen = false;
        }
    });
    
    $('#color').on('click', function(){	
        if (colorOpen == false) {
            $('.nav.biome').hide();
            $('.nav.species').hide();
            $('.nav.size').hide();
            $('.nav.color').show();
            colorOpen = true;
        }
        else {
            $('.nav.color').hide();
            colorOpen = false;
        }
    });

    // jQuery Modal Popups Code by Black of Code
    // http://code.jfbs.net/?showtopic=57
    var fadeBackground = $(document.createElement("div")).hide().attr("id", "fade-background"),
        modalWindow = $(document.createElement("div")).hide().attr("id", "modal-window");

    $(document.body).append(fadeBackground, modalWindow);

    $(document).on("click", ".modal-link", function(e) {
        $("#fade-background").css({ "opacity": "1.0" }).fadeIn("fast");
        var newContents = $("#" + $(this).data("modal-target")).html();
        $("#modal-window").html(newContents);
        $("#modal-window").fadeIn("fast");
        e.preventDefault();
    });

    $(document).on("click", ".modal-close", function() {
        $("#fade-background").fadeOut("fast");
        $("#modal-window").fadeOut("fast");
    });

    $(document).on("click", ".modal-close-skills", function() {
        $("#fade-background").fadeOut("fast");
        $("#modal-window").fadeOut("fast");
    });
    $(document).on("click", "#fade-background", function() {
        $("#fade-background").fadeOut("fast");
        $("#modal-window").fadeOut("fast");
    });

    $(document).keypress(function(e) {
        if(e.keyCode == 27) {
            $("#fade-background").fadeOut("fast");
            $("#modal-window").fadeOut("fast");
        }
    });

});