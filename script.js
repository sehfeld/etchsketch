$(document).ready(function() {
   
var count=256;

while(count){
	$('#container').append("<div class='blocks'></div>");
	count= count-1;
}
	
$('.blocks').mouseenter(function(){
	$(this).css('backgroundColor','#000000');
});

$('button').click(function(){
	$('.blocks').css('backgroundColor','#ffffff');
});

});

