$(document).ready(function(){
    $('#nox1').click(function(){
        $( this ).slideUp();

    });
    $('#nox2').hover(function(){
        $( '#nox1' ).slideDown();

    });
    $('#nox2').click(function(){
        $( this ).css('color', 'red');

    });
    $('.hide').click(function(){
        $('#nox3').hide("slow");

    });
    $('.show').click(function(){
        $('#nox3').show("slow");

    });
    

    
});

