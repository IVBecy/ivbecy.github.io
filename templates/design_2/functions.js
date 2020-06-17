////////////////////////////////////////////// JS for design idea on kristofhracza.com /////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Sliding the image in, when the window opens
$(document).ready(function () { $("#image").hide(0),$('#image').slideToggle(1500);})
$(document).ready(function () { $("#image_2").hide(0), $('#image_2').slideToggle(1500); })

/////////// Navigation bar function /////////////

function hamburger(){
    var navbar = document.getElementById("navbar")
    if (navbar.className === "navbar") {
        navbar.className += " responsive";
    }else{
        navbar.className = "navbar"
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////

///// Function for "about us" button  ////////////////////
function about_redirect(){
    var about_btn = document.getElementById("about_btn")
    if (about_btn) {
        window.location.href = "about.html";
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////  NEXT BUTTON  //////////////////////////////////////////
/*  Detecting screen-size, and render button accordingly */
function button(screen_size) {
    if (screen_size.matches) {
        /* Only render the next button, and the dots, if there is need for it, (TRUE)*/
        if (document.getElementById("next")) {
            /* Displaying the next button REACT*/
            function NextButton() {
                return (
                    <div>
                        <span className="dot" id="dot1" style={{ backgroundColor: "blue" }}></span><span id="dot2" className="dot"></span><span id="dot3" className="dot"></span><br />
                        <button type="button" id="next_button">Next</button>
                    </div>
                )
            }
            ReactDOM.render(<NextButton />, document.getElementById("next"))

            /* Switching between pictures, when the button is clicked (ONLY ON MOBILES)*/
            $(document).ready(function () {
                $("#next_button").toggle(
                    function () {
                        $(".row").children().hide(), $(".row :nth-child(2)").show(0),
                        $(".dot").css("background-color", "#93b2e0"),
                        $("#dot2").css("background-color", "blue")
                    },
                    function () {
                        $(".row").children().hide(), $(".row :nth-child(3)").show(0),
                        $(".dot").css("background-color", "#93b2e0"),
                        $("#dot3").css("background-color", "blue")
                    },
                    function () {
                        $(".row").children().hide(), $(".row :first-child").show(0),
                        $(".dot").css("background-color", "#93b2e0"),
                        $("#dot1").css("background-color", "blue")
                    }
                )
            })
        }
    }
}
var screen_size = window.matchMedia("(max-width: 600px)")
button(screen_size)
screen_size.addListener(button)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// REACT Contact button, and form  //////////////////////////////////////////////////

/////////////// Render click button on page /////////////////////////////
function Contact(){
    return(
        <div>
            <h2>Are you interested, in what we can offer?</h2><br/>
            <button onClick={overlay_on} style={{ backgroundColor:"#1D3FE5"}}>Contact us</button>
        </div>
    )
}
//// Turning on a full screen background for the contact frame
function overlay_on(){
    $("#overlay").slideToggle(500);
    document.getElementById("overlay").style.display = "block";
    document.getElementById("contact_frame").style.display = "block";
}

ReactDOM.render(<Contact/>,document.getElementById("contact"))

/////////////// Render contact form in overlay  /////////////////////////////////

/// Rendering the contact form
function Contact_form() {
    return(
        <div id="contact_frame">
            <br/>
            <i className="fa fa-times" style={{ fontSize: 30 }} onClick={close_form}></i>
            <form action="#contact.php">
                <br />
                <h2>Email us</h2>
                <br />
                <label htmlFor="fname">Name</label><br/>
                <input type="text" id="name" name="name" placeholder="Enter your name"></input><br />
                <label htmlFor="lname">E-mail</label><br />
                <input type="text" id="email" name="email" placeholder="Your e-mail"></input><br />
                <label htmlFor="lname">Message</label><br />
                <textarea type="text" id="message" name="Message" placeholder="Write something"></textarea><br />
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

ReactDOM.render(<Contact_form />, document.getElementById("overlay"))

///////// Closing the form  //////////
function close_form(){
    $("#overlay").slideToggle(500);
    document.getElementById("contact_frame").style.display = "none";
}
