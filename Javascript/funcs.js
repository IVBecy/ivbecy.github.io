//Javascript for the NEWS, ABOUT and GAMES section
// Function to control the contact images according to the display size
function display_contact(screen_size) {
  if (screen_size.matches) {
    //If the screen is or less than 600 px :
      document.getElementById("contact_ico").style.display = "none";
  }// Else:
   else {
      document.getElementById("contact_ico").style.display = "block";
  }
}
var screen_size = window.matchMedia("(max-width: 600px)")
display_contact(screen_size)
screen_size.addListener(display_contact)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Responsive navigation bar + sliding the banner down if needed and contolling contact
//images
function dropdown() {
  var navbar = document.getElementById("myTopnav");
  //If the navigation bar is being dropped down, change the Class name to - "topnav responsive"
  //and show all the contact images + Drop down the "NERDS--PROGRAMMING" text
  if (navbar.className === "topnav") {
    navbar.className += " responsive";
    document.getElementById("h1_all").style.margin = "100px auto 0 auto";
    document.getElementById("contact_ico").style.display = "block";
    document.getElementById("cont_git").style.display = "block";
    document.getElementById("cont_mail").style.display = "block";
    document.getElementById("cont_dis").style.display = "block";
  } else {
    //Once the menu is back to normal, reset the margin size of the Title
    //and hide the contact images
    document.getElementById("h1_all").style.margin = "50px auto 0 auto";
    document.getElementById("contact_ico").style.display = "none";
    document.getElementById("contact_ico").style.display = "none";
    document.getElementById("cont_git").style.display = "none";
    document.getElementById("cont_mail").style.display = "none";
    document.getElementById("cont_dis").style.display = "none";
    document.getElementById("ham").style.display = "block";
    navbar.className = "topnav";
  }
}

///////////////////////////////////////////////////////////////////////////

// Function for showing the contact images next to each other, in the navigation bar
//on phones and hide them next to the "HOME" section, as they would appear otherwise
function contact_order(screen_size_2) {
  if (screen_size_2.matches) {
    var x = document.getElementById("myTopnav");
    //If the hamburger menu is down, show the contatc images
    if (x.className === "topnav responsive") {
      document.getElementById("cont_git").style.display = "block";
      document.getElementById("cont_mail").style.display = "block";
      document.getElementById("cont_dis").style.display = "block";
    //Hide the contact images
    } else {
      document.getElementById("cont_git").style.display = "none";
      document.getElementById("cont_mail").style.display = "none";
      document.getElementById("cont_dis").style.display = "none";
      }
    }
}
//Setting up a listener to see the device's screen size
var screen_size_2 = window.matchMedia("(max-width: 600px)")
contact_order(screen_size_2)
screen_size_2.addListener(contact_order)

////////////////////////////////////////////////////////////////////////////////////////
//Detecting if there is an elemnt with the given id
var detect = document.getElementById("p_div");
    //if yes
    if(detect){
      // Making the p(aragraph) fonts appear different on phones
      function paragraph(screen_size_3) {
        if (screen_size_3.matches) {
          var pdiv = document.getElementById("p_div").id = "";
        }
      }
      var screen_size_3 = window.matchMedia("(max-width: 800px)")
      paragraph(screen_size_3)
      screen_size_3.addListener(paragraph)
    }//if no
    else{

    }
