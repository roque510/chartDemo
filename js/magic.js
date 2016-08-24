$(document).ready(function(){

	var ctxa =$( "#myChart" );

var $test = $( "#woot" );
 
function handler1() {
 console.log( "handler1" );
}
 
function handler2() {
  console.log( "handler2" );
}
 
$test.on( "click", handler1 );

});