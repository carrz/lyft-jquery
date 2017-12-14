$(function(){
   setTimeout(function() {
      $('#splash').fadeOut(500);
   }, 2000);
});


 $(document).ready(function() {
    $('select').material_select();
  });

$(document).ready(function(){

});

$('#sign-in').click(function(){
	$('#sign').hide();
	$('#sign-phone').show();
	$('#verify').hide();
	$('#sign-up').hide();
    $('#ready').hide();

});

$('#back-btn').click(function(){
	$('#sign').show();
	$('#sign-phone').hide();
	$('#verify').hide();
	$('#sign-up').hide();
    $('#ready').hide();

});
function code() {
  var code = "";
  var str = "123456789";
  for (var i = 0; i < 3; i++) {
  	code += str.charAt(Math.floor(Math.random() * str.length));
  }
  return code;
}


$('#tel-number').change(function(){
  if (($('#tel-number').val().length)===11){
    $('a#next').removeClass('disabled');
  }else{
    $('a#next').addClass('disabled');
  }
});

$('#code').change(function(){
  if (($('#code').val().length)===3){
    $('a#next-2').removeClass('disabled');
  }else{
    $('a#next-2').addClass('disabled');
  }
});

$('#next').click(function(){
	alert(code());
	$('#sign').hide();
	$('#sign-phone').hide();
	$('#verify').show();
	$('#sign-up').hide();
	$('#ready').hide();
});
$('#resend').click(function(){
	alert(code());
});
$('#next-2').click(function(){
	$('#sign').hide();
	$('#sign-phone').hide();
	$('#verify').hide();
	$('#sign-up').show();
	$('#ready').hide();
});
$('#next-3').click(function(){
	$('#sign').hide();
	$('#sign-phone').hide();
	$('#verify').hide();
	$('#sign-up').hide();
	$('#ready').show();
});