$(document).ready(function() {
   $('div').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   });
   $('div').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       }); 
   });
   $('div').click(function() {
       $(this).toggle(1000);
   });
   $('#badd').click(function(){
      $('.nl').append('<p>'+$('input[name="add"]').val()+'</p>');
      $('.nl').append('<button type=button id=rem>Remove last line</button>');
   });
   $('#rem').click(function(){
      $('.nl').last().remove;
   });
});
