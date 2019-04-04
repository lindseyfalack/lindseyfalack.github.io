$(function(){

//alert ("jquery loaded");
});

//click, mouseover, mouseleave -- events we can look for
$('.hide') .on('click', function(){
$('#myimage').hide ();
$('#actiontitle').text('image is hidden');
$('#actiontitle').css('color','red');
});

$('.show') .on('click', function(){
$('#myimage').show ();
$('#actiontitle').text('image is showing');
$('#actiontitle').css('color','green');
});
$('.done').on('click',function(){
$('body').html('<h2> we Are Done! </h2> <p> see ya later </p>');

});

$('.append').on('click',function(){
var username = $('#testinput').val();
$('#list').append('<li>'+username+'</li>');
});
