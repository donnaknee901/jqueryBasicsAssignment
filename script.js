$(document).ready(function(){
    $('#nox1').click(function(){
        $( this ).slideUp();

    });
    $('#nox2').hover(function(){
        $( '#nox1' ).slideDown();

    });
    $('.hide').click(function(){
        $('#nox3').hide("slow");

    });
    $('.show').click(function(){
        $('#nox3').show("slow");
        $( '#nox4' ).css('color', 'red');

    });
    $('#nox2').hover(function(){
        $( '#nox1' ).slideToggle(slow);

    });
    $('#nox5').hover(function(){
        $( '#nox6' ).fadein();

    });
    

    
});

