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
   
    $( "#nox6" ).click(function() {
        $( '#nox5' ).slideToggle( "slow" );
      });

      $( "#nox7" ).click(function() {
        $( 'h1' ).toggle( "slow" );
      });
      $( "button" ).click(function() {
        $( "p" ).slideToggle( "slow" );
      });
});

