/////////////  JS For kristofhracza.com  /////////////////
/////////////////////////////////////////////////////////

// Fading in the page, onload then the "NERDS" banner
$("body").hide().fadeIn(900);
$("#text_over_image").hide().delay(1000).fadeIn(1000);

////////////////////////////////////////////////////////////////////////////////

// Media query for background size change, and number of brs
function image_size(img) {
  if (img.matches) {
    // Function for appending <br> elements between sections
    for (i = 0; i < 4; i++) {
      var br = document.createElement("BR");
      document.getElementById("brs").appendChild(br);
    }
  } else {
    // Function for appending <br> elements between sections
    for (i = 0; i < 9; i++) {
      var br = document.createElement("BR");
      document.getElementById("brs").appendChild(br);
    }
  }
}
var img = window.matchMedia("(max-width: 900px)")
if (document.getElementById("brs")) {
  image_size(img)
  img.addListener(image_size)
}
////////////////////////////////////////////////////////////////////////////////
//Navbar function
function hamburger() {
  var x = document.getElementById("topnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////
//////////////////////////////////////////////////
/////////// PROJECTS SECTION//////////////////////
//////////////////////////////////////////////////

// IF clicking headers in "Projects" section, text will be displayed

//If header clicked make text appear -- Snake
function snake(){
  s = document.getElementById('p_snake')
  if (s.style.display === "none") {
    s.style.display = "block";
  } else {
    s.style.display = "none";
  }
}

//If header clicked make text appear -- Flappy Bird
function flappy(){
  s = document.getElementById('p_flappy')
  if (s.style.display === "none") {
    s.style.display = "block";
  } else {
    s.style.display = "none";
  }
}

//If header clicked make text appear -- Password Manager
function pass(){
  s = document.getElementById('p_pass')
  if (s.style.display === "none") {
    s.style.display = "block";
  } else {
    s.style.display = "none";
  }
}

//If header clicked make text appear -- Slow Loris DoS
function slow(){
  s = document.getElementById('p_slow')
  if (s.style.display === "none") {
    s.style.display = "block";
  } else {
    s.style.display = "none";
  }
}

//If header clicked make text appear -- Website
function website(){
  s = document.getElementById('p_web')
  if (s.style.display === "none") {
    s.style.display = "block";
  } else {
    s.style.display = "none";
  }
}

//If header clicked make text appear -- Instagram Attack
function insta(){
  s = document.getElementById('p_insta')
  if (s.style.display === "none") {
    s.style.display = "block";
  } else {
    s.style.display = "none";
  }
}

//If header clicked make text appear -- Space Invaders
function space(){
  s = document.getElementById('p_space')
  if (s.style.display === "none") {
    s.style.display = "block";
  } else {
    s.style.display = "none";
  }
}

//If header clicked make text appear -- Web Scraper
function amazon(){
  s = document.getElementById('p_amazon')
  if (s.style.display === "none") {
    s.style.display = "block";
  } else {
    s.style.display = "none";
  }
}

//If header clicked make text appear -- Old website
function old_website(){
  s = document.getElementById('p_old_website')
  if (s.style.display === "none") {
    s.style.display = "block";
  } else {
    s.style.display = "none";
  }
}
//////////////////////////////////////////
////////// END OF PROJECTS///////////////
////////////////////////////////////////
