//////////////////  JS for restaurant webpage /////////////////////
///////////////////////////////////////////////////////////////////

// Fading in - onload
$("body").hide().fadeIn(1000);
$("#text_onimage").hide().delay(900).fadeIn(1000);
$("img").hide().delay(900).fadeIn(1000);
$("#topnav").hide().delay(900).fadeIn(1000);


//Navbar function
function hamburger() {
  var x = document.getElementById("topnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
