// Alert for php
$(document).ready(function(){
  alert("PHP not included, go and see it on Github.")
})
// Getting the header to straighten on scroll
window.onscroll = function () { scrolling()}
const scrolling = () => {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("wavy").style.animation = "lined 1s ease";
    document.getElementById("wavy").style.borderBottomLeftRadius = "0%"; 
    document.getElementById("wavy").style.borderBottomRightRadius = "0%"; 
  } else {
    document.getElementById("wavy").style.animation = "curved 1s ease";
    document.getElementById("wavy").style.borderBottomLeftRadius = "50%";
    document.getElementById("wavy").style.borderBottomRightRadius = "50%"; 
  }
}
////////////////////////////////////////////////////////////////////////////
//Login
$("#login").click(function (){
  $("#overlay").slideToggle(500);
  document.getElementById("overlay").style.display = "block";
  document.body.style.overflow = "hidden";
  function LoginRender() {
    return (
      <div className="cont">
        <div id="wavy2"> 
        <i onClick={ClosingFORM} className="fa fa-times" style={{ fontSize: "30px", color:"black" }} />
        <h1 id="form_title">Login</h1>
          <form action="#login.php" method="POST">
            <input type="text" name="uname" placeholder="Username" required/><br />
            <input type="password" name="password" placeholder="Password" required/><br />
            <input type="submit" value="Login" />
          </form>
        </div> 
      </div>
    )
  }
  ReactDOM.render(<LoginRender />, document.getElementById("overlay"))
})
//Signup
$("#signup").click(function () {
  $("#overlay").slideToggle(500);
  document.getElementById("overlay").style.display = "block";
  document.body.style.overflow = "hidden";
  function SignupRender() {
    return (
      <div className="cont">
        <div id="wavy2">
          <i onClick={ClosingFORM} className="fa fa-times" style={{ fontSize: "30px", color: "black" }} />
          <h1 id="form_title">Sign Up</h1>
          <form action="#signup.php" method="POST">
            <input type="text" name="uname" placeholder="Username" required/><br />
            <input type="email" name="email" placeholder="Email" required/><br />
            <input type="password" name="password" minLength="8" placeholder="Password" required /><p>(8 characters minimum)</p><br />
            <input type="submit" value="Sign Up" />
          </form>
        </div>
      </div>
    )
  }
  ReactDOM.render(<SignupRender />, document.getElementById("overlay"))
})
//Closing forms
function ClosingFORM() {
  $("#overlay").slideToggle(500);
  document.body.style.overflow = "scroll";
};
///////////////////////////////////////////////////////////////
//Render Footer
function Footer(){
  return(
    <footer>
      <i className="fa fa-linkedin" style={{"fontSize":"30px"}}></i>
      <i className="fa fa-instagram" style={{ "fontSize": "30px" }}></i>
      <i className="fa fa-facebook" style={{ "fontSize": "30px" }}></i>
      <p>© 2020 Kristof Hracza</p>
    </footer>
  )
}
ReactDOM.render(<Footer />, document.getElementById("footer"))
///////////////////////////////////////////////////////////////////
// Log out function
const LogOut = () =>{
  window.location.href = "index.html"
}
/////////////////////////////////////////////////////////////////
//Switching between reviews
var count = 1;
$("#arrow").click(function () {toggle()});
const toggle = () => {
  // Reset the counter, once i reaches the end number
  if(count == 3){
    count = 0;
  }
  count ++;
  if (count == 1) {
    var slides = document.getElementsByClassName("rating")
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      document.getElementById("1").style.animation = "op 3s ease";
      document.getElementById("1").style.display = "block";
    }
  }
  if (count == 2) {
    var slides = document.getElementsByClassName("rating")
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      document.getElementById("2").style.animation = "op 3s ease";
      document.getElementById("2").style.display = "block";
    }
  }
    if (count == 3) {
      var slides = document.getElementsByClassName("rating")
      for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        document.getElementById("3").style.animation = "op 3s ease";
        document.getElementById("3").style.display = "block";
      }
  }
}
//////////////////////////////////////////////////////////////////////
$("#settings").click(function(){Settings()})
// Render Setting
const Settings = () => {
  $("#overlay").slideToggle()
  $("#overlay").css({"display":"block", "backgroundColor":"white"});
  const Render = () =>{
    return(
      <div className="cont">
        <i onClick={ClosingFORM} className="fa fa-times" style={{ fontSize: "30px", color: "black" }} /><br/>
        <button onClick={LogOut}>Log out</button>
      </div>
    )
  }
  ReactDOM.render(<Render/>, document.getElementById("overlay"))
}
