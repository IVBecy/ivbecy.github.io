////////////////////////////////////////////// JS for design idea on kristofhracza.com /////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////// Navigation bar function /////////////

function hamburger(){
    var navbar = document.getElementById("navbar")
    if (navbar.className === "navbar") {
        navbar.className += " responsive";
    }else{
        navbar.className = "navbar"
    }
}

////////////////////////////////////////  NEXT BUTTON  //////////////////////////////////////////
/*  Detecting screen-size, and render button accordingly */
function button(screen_size) {
    if (screen_size.matches) {
        /* Displaying the next button REACT*/
        function NextButton() {
            return (
                <div>
                <span className="dot" id="dot1" style={{backgroundColor:"blue"}}></span><span id="dot2" className="dot"></span><span id="dot3" className="dot"></span><br/>
                <button type="button" id="next_button">Next</button>
                </div>
            )
        }
        ReactDOM.render(<NextButton />, document.getElementById("next"))

        /* Switching between pictures, when the button is clicked (ONLY ON MOBILES)*/
        $(document).ready(function () {
            $("#next_button").toggle(
                function () { $(".row").children().hide(), $(".row :nth-child(2)").show(0),
                    $(".dot").css("background-color", "#bbb"), $(".row :nth-child(2)").animate({right:"250px"})
                    $("#dot2").css("background-color", "blue") },
                function () { $(".row").children().hide(), $(".row :nth-child(3)").show(0),
                    $(".dot").css("background-color", "#bbb"),
                    $("#dot3").css("background-color", "blue") },
                function () { $(".row").children().hide(), $(".row :first-child").show(0), 
                    $(".dot").css("background-color", "#bbb"),
                    $("#dot1").css("background-color","blue") }
            )
        })
    } else {}
}
var screen_size = window.matchMedia("(max-width: 600px)")
button(screen_size)
screen_size.addListener(button)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////