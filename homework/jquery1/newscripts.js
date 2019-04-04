
$('head').append('<link rel="stylesheet" href="css/styles.css" type="text/css" />');


//Executes when page loads and it's ready to view
var step = 0;

var titles = [
  'Wax Your Board', // this is 0 titles[0]
  'Put your leash on', // this is 1 titles[1]
  'Stretch', // this is 2
  'Paddle out', // this is 3
  'Wait for a set of waves', //this is 4
  'Paddle', //this is 5
  'Pop Up!', //this is 6
  'Ride the Wave', //this is 7

  ];

$(function(){
  $("#stepinfo, section, footer, .prev").hide();
});

// We use the start button to begin our tutorial
$('.start').on('click',function(){
  //do stuff when the button is clicked
  $('.intro, .start').hide();
  //$('.start').hide();
  $('footer, #stepinfo').show();
  step = 1;

  $('#step'+step).show();
  //f(x) = x + 2
  // Set the title for our current step
  $('#stepinfo').text('Step '+step+': '+titles[step-1]);
  //$('#stepinfo').text(step + step);
});
// Next to advance each slide
$('.next').on('click',function(){
  // make the chnage only if we are under our number of steps
  $('#step'+step).hide();
  step++;
  if(step == 2) {
    $('.prev').show();
  }
  if(step == 8){
    $('.next').hide();
  }
  if(step <= 8) {
    $('#step'+step).show();
    $('#stepinfo').text('Step '+step+': '+ titles[step-1]);
  } else {
    step--;
    $('#step'+step).show();
  }

});

//Previous

$('.prev').on('click',function(){
  // make the change only if we are under our number of steps
  $('#step'+step).hide();
  step--;
  if(step == 1) {
    $('.prev').hide();
  } else {
    $('.next').show();
  }
  if(step >= 1) {
    $('#step'+step).show();
    $('#stepinfo').text('Step '+step+': '+ titles[step-1]);
  } else {
    step--;
    $('#step'+step).show();
  }
});
