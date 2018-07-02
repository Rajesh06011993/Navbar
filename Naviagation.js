$(document).ready(()=>{

let dropClick = 0;
let togClick = 0;

$(".dropdown-menu").hide();


$(".nav-drop").click(()=>{
  $("#drop").toggle();
  dropClick = dropClick+1;

})


$(".lol").click(()=>{

	$(".disp").toggle();
   $("#drop").hide();
  togClick = togClick+1;
})

$(window).resize(function(){

 if ($( window ).width() >= 900) {
    
      $(".disp").show();

    if ( dropClick%2 == 1) {

        $(".disp").show();
    }
 }

 if ($( window ).width() < 900) {

    if ( dropClick%2 == 1) {

        $(".disp").show();
    }
   
 }
  });
})

/*
var display = false;
var click = 0;

$(".lol").click(()=>{

if (display === true) {
	
$(".disp").toggle();
$(".dropdown-menu").hide();

display = false;
click = click+1;

}

})



$(".lol").click(()=>{

if(click == 0){

	if (display === false) {
	
$(".disp").show();
$(".dropdown-menu").hide();

display = true;
}

}
else click=0;
})

*/        

















