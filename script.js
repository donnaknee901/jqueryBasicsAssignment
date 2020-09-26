$(document).ready(function(){
    $('#nox1').click(function(){
        $( this ).slideUp();

    });
    $('#nox2').click(function(){
        $( this ).css('color', 'red');

    });
    $('.hide').click(function(){
        $('#nox4').hide("slow");

    });
    $('.show').click(function(){
        $('#nox4').show("slow");

    });
    
});

