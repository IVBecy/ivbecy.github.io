/////////////  JS For kristofhracza.com  /////////////////
/////////////////////////////////////////////////////////

// Fading in the page, onload then the "NERDS" banner
$("body").hide().fadeIn(900);
$("#text_over_image").hide().delay(1000).fadeIn(1000);
////////////////////////////////////////////////////////////////////////////////
//Navbar function
// Getting count as a variable
var count = 0;
const hamburger = () => {
  // Making both of the animations work
  const toggling = () =>{
    count++;
    // Closing navbar
    if (count % 2 == 0 ) {
      document.body.style.overflow = "scroll";
      document.getElementById("navbar").style.animation = "toggleout 0.5s ease";
      $("#navbar").toggle(500);
    }
     // opening navbar
    else{
      document.body.style.overflow = "hidden";
      $("#navbar").toggle();
      document.getElementById("navbar").style.animation = "toggle 0.5s ease";
    }
  }
  toggling() 
}

////////////////////////////////////////////////////////////////////////////////

// Media query for background size change, and number of brs
function image_size(img) {
  if (img.matches) {
    var i = 0;
    // Function for appending <br> elements between sections
    for (i = 0; i < 4; i++) {
      var br = document.createElement("BR");
      document.getElementById("brs").appendChild(br);
    }
  } else {
    var i = 0;
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


        ///////////////////////// REACT ////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// React FOOTER render
function Footer(){
  return(
    <footer>
        <a href="mailto:kristofhracza@gmail.com"><i className="fa fa-envelope" style={{fontSize:30}}></i></a>
      <a href="https://github.com/IVBecy"><i className="fa fa-github" style={{ fontSize: 30 }} ></i></a>
      <a href="https://www.youtube.com/channel/UCPdJpsymfMobXq6oncfvicA?view_as=subscriber"><i className="fa fa-youtube" style={{ fontSize: 30 }}></i></a>
      <p>© Kristof Hracza 2020 | All rights reserved</p>
    </footer>
  )
}
ReactDOM.render(<Footer />, document.getElementById('footer'));

/////////////////////////////////////////////////////////////////////////////////

// React Navigation Bar render
function Navbar(){
  return(
    <div>
      <div>
        <i id="navbar_icon"  onClick={hamburger} className="fa fa-bars"></i>
      </div>
      <div className="navbar" id="navbar">
        <a href="index.html" id="index.html"><h2>Home</h2></a>
        <a href="about.html" id="about.html"><h2>About me</h2></a>
        <a href="projects.html" id="projects.html"><h2>Projects</h2></a>
        <a href="experience.html" id="experience.html"><h2>Experience</h2></a>
        <a href="template.html" id="template.html"><h2>Templates</h2></a>
        <a href="apps.html" id="apps.html"><h2>Apps</h2></a>
      </div>
    </div>
  )
}
ReactDOM.render(<Navbar />, document.getElementById("navigation_bar"))
// Giving an active class to the current page
var path = window.location.pathname;
var page = path.split("/").pop();
if (page === "") {
  // On starting page
  document.getElementById("index.html").className = "active"
}
// Any page
else { document.getElementById(page).className = "active"}


////////////////////////////////////////////////////////////////////////////////
////////////////////  Fading cards on hover ////////////////////////////////////
////////////////////  PROJECTS SECTION      ////////////////////////////////////

$(".flip-card").hover(function(e){
  var cards = document.getElementsByClassName('flip-card')
  for (var i = 0; i < cards.length; i++) {
    cards[i].style.opacity = 0.2;
  };
  // For catching errors 200IQ
  if (document.getElementById(e.target.id)) {
     document.getElementById(e.target.id).style.opacity = 1;
  }
  // For catching errors
  else{}
},function(e){
    var cards = document.getElementsByClassName('flip-card')
    for (var i = 0; i < cards.length; i++) {
      cards[i].style.opacity = 1;
    }
});

////////////////////////////////////////////////////////////////////////////////
///////////////////////   END OF PROJECTS   ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
