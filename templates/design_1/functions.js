////////////////////////////////////////////// JS for design idea on kristofhracza.com /////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Hamburger menu
function hamburger() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Writing the login area (REACT)
function LoginArea(){
    return(
        <div id="row">
            <h4 id="log_sign" name="login" onClick={logging_in}>Login</h4><h4 id="log_sign" name="signup" onClick={signing_up}>Sign up</h4>
        </div>
    )
}

ReactDOM.render(<LoginArea />, document.getElementById("login_area"));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////  Login and signup form (REACT) /////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////// LOGIN ////////////////////////////////////
function logging_in(){
    /// Making everything in the background out of focus
    if (document.getElementsByClassName("left_container")) {
        var left_containers = document.getElementsByClassName("left_container")
        for (var i = 0; i < left_containers.length; i++) {
            left_containers[i].style.opacity = "0.2";
        }
    }
    document.getElementById("navbar").style.opacity = "0.2";
    document.getElementById("login_area").style.opacity = "0.2";
    document.getElementById("login_frame").style.display = "block";

    /// Rendering the login form (REACT)
    function Login_final(){
        return(
            <div id="contact_frame">
                <i className="fa fa-times" style={{ fontSize: 30 }} onClick={x_close}></i>
                <form action="#contact.php">
                    <br />
                    <h2>Login Form</h2>
                    <br />
                    <label htmlFor="fname">Username / E-mail</label>
                    <input type="text" id="uname" name="username" placeholder="Username / E-mail"></input>
                    <label htmlFor="lname">Password</label>
                    <input type="text" id="pass" name="password" placeholder="Password"></input>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
    ReactDOM.render(<Login_final />, document.getElementById("login_frame"));
    /// Putting the form in focus, and display it correctly
    document.getElementById("login_frame").style.opacity = "1";
    document.getElementById("contact_frame").style.display = "block";

    //// Function for, when we hit the "x" button on the form
    //// It will make the form disappear
    function x_close(){      
        document.getElementById("navbar").style.opacity = "1";
        document.getElementById("login_area").style.opacity = "1";
        document.getElementById("contact_frame").style.display = "none";
        document.getElementById("login_frame").style.display = "none";
        if (document.getElementsByClassName("left_container")) {
            var left_containers = document.getElementsByClassName("left_container")
            for (var i = 0; i < left_containers.length; i++) {
                left_containers[i].style.opacity = "1";
            }
        }
    }
}
//////////////// END of LOGIN  //////////////////////////////////////////////////////
////////////
///////////
///////////
////////////////////// SIGN UP ////////////////////////////////////

function signing_up() {
    /// Making everything in the background out of focus
    if (document.getElementsByClassName("left_container")) {
        var left_containers = document.getElementsByClassName("left_container")
        for (var i = 0; i < left_containers.length; i++) {
            left_containers[i].style.opacity = "0.2";
        }
    }
    document.getElementById("navbar").style.opacity = "0.2";
    document.getElementById("login_area").style.opacity = "0.2";
    document.getElementById("signup_frame").style.display = "block";

    /// Rendering the signup form (REACT)
    function Signup_final() {
        return (
            <div id="contact_frame">
                <i className="fa fa-times" style={{ fontSize: 30 }} onClick={x_close}></i>
                <form action="#contact.php">
                    <br />
                    <h2>Sign Up Form</h2>
                    <br />
                    <label htmlFor="fname">First name</label>
                    <input type="text" id="fname" name="firstname" placeholder="First Name"></input>
                    <label htmlFor="fname">Last name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Last Name"></input>
                    <label htmlFor="fname">Username / E-mail</label>
                    <input type="text" id="uname" name="username" placeholder="Username / E-mail"></input>
                    <label htmlFor="lname">Password</label>
                    <input type="text" id="pass" name="password" placeholder="Password"></input>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
    ReactDOM.render(<Signup_final />, document.getElementById("signup_frame"));
    /// Putting the form in focus, and display it correctly
    document.getElementById("signup_frame").style.opacity = "1";
    document.getElementById("contact_frame").style.display = "block";

    //// Function for, when we hit the "x" button on the form
    //// It will make the form disappear
    function x_close() {
        document.getElementById("navbar").style.opacity = "1";
        document.getElementById("login_area").style.opacity = "1";
        document.getElementById("contact_frame").style.display = "none";
        document.getElementById("signup_frame").style.display = "none";
        if (document.getElementsByClassName("left_container")) {
            var left_containers = document.getElementsByClassName("left_container")
            for (var i = 0; i < left_containers.length; i++) {
                left_containers[i].style.opacity = "1";
            }
        }
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////// END of  Login and signup form (REACT) //////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Media query for the number of brs
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
