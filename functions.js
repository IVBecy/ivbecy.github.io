/////////////  JS For kristofhracza.com  /////////////////
/////////////////////////////////////////////////////////

// Fading in the page, onload then the "NERDS" banner
$("body").hide().fadeIn(900);
$("#text_over_image").hide().delay(1000).fadeIn(1000);

////////////////////////////////////////////////////////////////////////////////

//Navbar function
function hamburger() {
  var navbar = document.getElementById("topnav");
  if (navbar.className === "topnav") {
    navbar.className += " responsive";
  } else {
    navbar.className = "topnav";
  }
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


/////////////////////////////////////////////////////////////////////////////
/////////////////////// Footer rendering by REACT  /////////////////////////
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

////////////////////////////////////////////////////////////////////////////////
////////////////////  Fading cards on hover ////////////////////////////////////
////////////////////  PROJECTS SECTION      ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

            //////////////   Password cracker   //////////////
if(document.getElementById('snake')){
  document.getElementById('password_cracker').onmouseover = function() {password_cracker()};
  document.getElementById('password_cracker').onmouseout = function() {notclick()};
}

function password_cracker(){
  var cards = document.getElementsByClassName('flip-card')
  for(var i=0; i<cards.length; i++){
  cards[i].style.opacity = "0.2";
  }
  document.getElementById('password_cracker').style.opacity = "1";
}

            //////////////   Old  website   //////////////
if (document.getElementById('old_website')){
  document.getElementById('old_website').onmouseover = function() {old_website()};
  document.getElementById('old_website').onmouseout = function() {notclick()};
}

function old_website(){
  var cards = document.getElementsByClassName('flip-card')
  for(var i=0; i<cards.length; i++){
    cards[i].style.opacity = "0.3";
  }
  document.getElementById('old_website').style.opacity = "1";
}

            //////////////   Amazon   //////////////
if(document.getElementById('amazon')){
  document.getElementById('amazon').onmouseover = function() {amazon()};
  document.getElementById('amazon').onmouseout = function() {notclick()};
}

function amazon(){
  var cards = document.getElementsByClassName('flip-card')
  for(var i=0; i<cards.length; i++){
    cards[i].style.opacity = "0.2";
  }
  document.getElementById('amazon').style.opacity = "1";
}

          //////////////   Space Invaders   //////////////
if(document.getElementById('space')){
  document.getElementById('space').onmouseover = function() {space()};
  document.getElementById('space').onmouseout = function() {notclick()};
}

function space(){
  var cards = document.getElementsByClassName('flip-card')
  for(var i=0; i<cards.length; i++){
    cards[i].style.opacity = "0.2";
  }
  document.getElementById('space').style.opacity = "1";
}


          //////////////   Insta   //////////////
if(document.getElementById('insta')){
  document.getElementById('insta').onmouseover = function() {insta()};
  document.getElementById('insta').onmouseout = function() {notclick()};
}

function insta(){
  var cards = document.getElementsByClassName('flip-card')
  for(var i=0; i<cards.length; i++){
    cards[i].style.opacity = "0.2";
  }
  document.getElementById('insta').style.opacity = "1";
}

          //////////////   Slow Loris   //////////////
if(document.getElementById('slow_loris')){
  document.getElementById('slow_loris').onmouseover = function() {slow_loris()};
  document.getElementById('slow_loris').onmouseout = function() {notclick()};
}

function slow_loris(){
  var cards = document.getElementsByClassName('flip-card')
  for(var i=0; i<cards.length; i++){
    cards[i].style.opacity = "0.2";
  }
  document.getElementById('slow_loris').style.opacity = "1";
}

        //////////////   Flappy Bird  //////////////
if(document.getElementById('flappy')){
  document.getElementById('flappy').onmouseover = function() {flappy()};
  document.getElementById('flappy').onmouseout = function() {notclick()};
}

function flappy(){
  var cards = document.getElementsByClassName('flip-card')
  for(var i=0; i<cards.length; i++){
    cards[i].style.opacity = "0.2";
  }
  document.getElementById('flappy').style.opacity = "1";
}

        //////////////   Password Manager  //////////////
if(document.getElementById('pass')){
  document.getElementById('pass').onmouseover = function() {pass()};
  document.getElementById('pass').onmouseout = function() {notclick()};
}

function pass(){
  var cards = document.getElementsByClassName('flip-card')
  for(var i=0; i<cards.length; i++){
    cards[i].style.opacity = "0.2";
  }
  document.getElementById('pass').style.opacity = "1";
}


      //////////////   Website  //////////////
if(document.getElementById('website')){
  document.getElementById('website').onmouseover = function() {website()};
  document.getElementById('website').onmouseout = function() {notclick()};
}

function website(){
  var cards = document.getElementsByClassName('flip-card')
  for(var i=0; i<cards.length; i++){
    cards[i].style.opacity = "0.2";
  }
  document.getElementById('website').style.opacity = "1";
}


        //////////////   Snake  //////////////
if(document.getElementById('snake')){
  document.getElementById('snake').onmouseover = function() {snake()};
  document.getElementById('snake').onmouseout = function() {notclick()};
}

function snake(){
  var cards = document.getElementsByClassName('flip-card')
  for(var i=0; i<cards.length; i++){
    cards[i].style.opacity = "0.2";
  }
  document.getElementById('snake').style.opacity = "1";
}

////  Function called when we move the mouse out of the bounds of any box ////
function notclick(){
  var cards = document.getElementsByClassName('flip-card')
  for(var i=0; i<cards.length; i++){
    cards[i].style.opacity = "1";
  }
}

////////////////////////////////////////////////////////////////////////////////
///////////////////////   END OF PROJECTS   ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
