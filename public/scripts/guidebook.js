$(document).ready( function() {
    $('#biome').on('click', function(){	
        $('.nav.biome').show();
        $('.nav.species').hide();
        $('.nav.size').hide();
        $('.nav.color').hide();
    });
    
    $('#species').on('click', function(){	
        $('.nav.biome').hide();
        $('.nav.species').show();
        $('.nav.size').hide();
        $('.nav.color').hide();
    });
    
    $('#size').on('click', function(){	
        $('.nav.biome').hide();
        $('.nav.species').hide();
        $('.nav.size').show();
        $('.nav.color').hide();
    });
    
    $('#color').on('click', function(){	
        $('.nav.biome').hide();
        $('.nav.species').hide();
        $('.nav.size').hide();
        $('.nav.color').show();
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