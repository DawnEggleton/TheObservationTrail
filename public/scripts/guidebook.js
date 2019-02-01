$(document).ready( function() {
    $('.nav.biome').show();
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
});