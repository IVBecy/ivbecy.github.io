// Setting colors to the buttons
$(document).ready(function () {
  var bts = document.getElementsByClassName("buttons");
  for (var i = 0; i < bts.length; i++) {
    var colors = ["#0DFFF0", "#0DFF2D", "#0D3DFF", "#FF0D76", "#FFC70D"]
    for (var i = 0; i < colors.length; i++) {
      bts[i].style.backgroundColor = colors[i];
    }
  }
})

// Variables
const sounds = document.querySelectorAll(".sound")
const buttons = document.querySelectorAll(".buttons")
// Making the sounds
buttons.forEach((button,i) => {
  button.addEventListener("click", function(){
    sounds[i].currentTime = 0;
    sounds[i].play();
    document.getElementsByTagName("hr")[0].style.border = "30px solid ".concat(document.getElementById(button.id).style.backgroundColor);
  })
});

// When hovering over a button
$(".buttons").hover(function(e){
  document.getElementById(e.target.id).style.transition = "all 0.5s";
  document.getElementById(e.target.id).style.height = "30%";
  document.getElementById(e.target.id).style.opacity = "0.5"
},function(e){
    document.getElementById(e.target.id).style.height = "20%";
    document.getElementById(e.target.id).style.opacity = "1"
})





