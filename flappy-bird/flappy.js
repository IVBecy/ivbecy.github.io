// Assigning variables for objects
var player;
var pipes = [];
var bg;
var bg2;
var score;
var s = 0;
var start;
var highscore = Number()



// Start menu, only executes once, at the beginning
function one(){
  function stop(){
    myGameArea.stop();
    myGameArea.clear();
    pipes = []
  }
  setTimeout(stop, 1)
  document.getElementById("canvas4").style.visibility = "visible";
  document.getElementById("canvas5").style.visibility = "visible";
  var canvas5 = document.getElementById("canvas5");
  var ctx = canvas5.getContext("2d");
  ctx.font = "bold 50px Arial";
  ctx.fillStyle = "#25EE40";
  canvas4.addEventListener("click", function(){
    myGameArea.start();
    document.getElementById("canvas4").style.visibility = "hidden";
    document.getElementById("canvas5").style.visibility = "hidden";
  });
  one = function(){}; // Clears the function, so it will be executed no more
}

// Game Start Function, this happends at the beginning of every game
function startGame() {
  player = new component(30, 30, "flappy-bird/flappy0.gif", 10, 100, "image");
  bg = new component(600, 500, "flappy-bird/bg.jpg", 0, 0, "image");
  bg2 = new component(600, 500, "flappy-bird/phone_bg.png", 0, 0, "image");
  score = new component("40px", "Arial", "white", 270, 50, "text");
  start = new component (30,30, "flappy-bird/start.png", 10, 100, "image")
  pipes = [];
  s = 0;
  highscore = Number();
  pipe = new component(20, 200, "lime", 300, 120);
  var canvas2 = document.getElementById("canvas2");
  var ctx = canvas2.getContext("2d");
  ctx.clearRect(20, 20, 100, 50);
  ctx.font = "25px Impact";
  ctx.fillText("High Score", 14,80);
  ctx.font = "25px Arial";
  ctx.fillText(localStorage.getItem("High Score"), 70,105);
  document.getElementById("canvas2").style.visibility = "hidden";
  var canvas3 = document.getElementById("canvas3");
  var ctx = canvas3.getContext("2d");
  ctx.clearRect(20, 20, 100, 50);
  document.getElementById("canvas3").style.visibility = "hidden";
  var canvas4 = document.getElementById("canvas4");
  var ctx = canvas4.getContext("2d");
  ctx.clearRect(20, 20, 100, 50);
  document.getElementById("canvas4").style.visibility = "hidden";
  var canvas5 = document.getElementById("canvas5");
  var ctx = canvas5.getContext("2d");
  document.getElementById("canvas5").style.visibility = "hidden";
  var canvas_go = document.getElementById("canvas_go");
  var ctx = canvas_go.getContext("2d");
  document.getElementById("canvas_go").style.visibility = "hidden";
  myGameArea.start();
  one();
}


// The Game itself (canvas)
var  myGameArea = {
  canvas : document.createElement("canvas"),
  start : function(){
    this.canvas.id = "canvas1";
    this.canvas.width = 600;
    this.canvas.height = 400;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.frameNo = 0;
    this.interval = setInterval(updateGameArea, 20)
  },
  clear : function(){
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  stop : function() {
    clearInterval(this.interval);
  }
}

// If we touch the mobile screen, the player flies
document.addEventListener("touchend", endTouch);
function endTouch(ev) {
  player.gravity = 0.2
  player.image.src = "flappy-bird/f_down.gif";
}

// If we let go of the screen the player will fall as gravity acts upon it
document.addEventListener("touchstart", startTouch);
function startTouch(ev) {
  player.gravity = -0.2
  player.image.src = "flappy-bird/f_tilt.gif";
}

//  Functions to keep the objects working
function component(width, height, color, x, y, type){
  this.type = type;
  if (type == "image") {
    this.image = new Image();
    this.image.src = color;
  }
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.gravity = 0.1;
  this.gravitySpeed = 0;
  this.x = x;
  this.y = y;
  this.update = function(){
    ctx = myGameArea.context;
      //Seting up text to be displayed on the canvases
    if (this.type == "text") {
      ctx.font = this.width + " " + this.height;
      ctx.fillStyle = color;
      ctx.fillText(this.text, this.x, this.y);
    }
    //Seting up images to be displayed on the canvases
    if (type == "image") {
      ctx.drawImage(this.image,
        this.x,
        this.y,
        this.width, this.height);
    }else {
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }
  // Movement theory for the player + function calls for hittin the top / bottom
  this.newPos = function(){
    player.gravitySpeed += player.gravity;
    player.x += player.speedX;
    player.y += player.speedY + player.gravitySpeed;
    player.hitBottom();
    player.hitUp();
  }
  // If we hit the bottom
  this.hitBottom = function(){
    var bottom = myGameArea.canvas.height - this.height;
    if (player.y > bottom){
      player.y = bottom;
      myGameArea.stop();
      score.update();
      pipes = [];
      this.y = -1000
      document.getElementById("canvas_go").style.visibility = "visible";
      var canvas2 = document.getElementById("canvas2");
      var ctx = canvas2.getContext("2d");
      ctx.clearRect(0, 0, canvas2.width, canvas2.height);
      ctx.font = "bold 25px Arial";
      ctx.fillText(s, 227,90);
      ctx.font = "bold 25px Arial";
      ctx.fillText(localStorage.getItem("High Score"), 42,90);
      var canvas3 = document.getElementById("canvas3");
      var ctx = canvas3.getContext("2d");
      ctx.clearRect(0, 0, canvas2.width, canvas2.height);
      document.getElementById("canvas3").style.visibility = "visible";
      document.getElementById("canvas2").style.visibility = "visible";
      canvas3.addEventListener("click", function(){
        myGameArea.stop();
        myGameArea.clear();
        startGame();
      });
      return;
    }
  }
  // If we hit the top of the screen GAME OVER
  this.hitUp = function() {
    var up = myGameArea.canvas.height - this.height;
    if (player.y < 0){
      player.y == up;
      myGameArea.stop()
      score.update();
      myGameArea.clear();
      pipes = [];
      this.y = -1000
      document.getElementById("canvas_go").style.visibility = "visible";
      var canvas2 = document.getElementById("canvas2");
      var ctx = canvas2.getContext("2d");
      ctx.clearRect(0, 0, canvas2.width, canvas2.height);
      ctx.font = "bold 25px Arial";
      ctx.fillText(s, 227,90);
      ctx.font = "bold 25px Arial";
      ctx.fillText(localStorage.getItem("High Score"), 42,90);
      var canvas3 = document.getElementById("canvas3");
      var ctx = canvas3.getContext("2d");
      ctx.clearRect(0, 0, canvas2.width, canvas2.height);
      document.getElementById("canvas3").style.visibility = "visible";
      document.getElementById("canvas2").style.visibility = "visible";
      canvas3.addEventListener("click", function(){
        myGameArea.stop();
        myGameArea.clear();
        startGame();
      });
      return;
    }
  }

  //Collision detection
  this.crashWith = function(otherobj) {
    var left = this.x;
    var right = this.x + (this.width);
    var top = this.y;
    var bottom = this.y + (this.height);
    var otherleft = otherobj.x;
    var otherright = otherobj.x + (otherobj.width);
    var othertop = otherobj.y;
    var otherbottom = otherobj.y + (otherobj.height);
    var crash = true;
    if ((bottom < othertop) ||
    (top > otherbottom) ||
    (right < otherleft) ||
    (left > otherright)) {
        crash = false;
      }
      return crash;
    }
}
// Listeners for key presses
window.addEventListener("keydown", keydown, false);
window.addEventListener("keyup", keyup, false);

// If we press "space" we go up
function keydown(e){
  if (e.keyCode == 32){
    player.gravity = -0.17
    player.image.src = "flappy-bird/f_tilt.gif";
  }
}

//If we release "space" gravity acts on the player
function keyup(e){
  if (e.keyCode == 32){
    player.gravity = 0.25
    player.image.src = "flappy-bird/f_down.gif";
  }
}

// Updating the game (frame-to-frame process)
function updateGameArea() {
    var x, y;
    //localStorage.clear();
    var highscore = Number();
    // If we collide with one of the pipes, GAME OVER
    for (i = 0; i < pipes.length; i += 1) {
        if (player.crashWith(pipes[i])) {
          myGameArea.stop()
          score.update();
          myGameArea.clear();
          pipes = [];
          this.y = -1000
          document.getElementById("canvas_go").style.visibility = "visible";
          var canvas2 = document.getElementById("canvas2");
          var ctx = canvas2.getContext("2d");
          ctx.clearRect(0, 0, canvas2.width, canvas2.height);
          ctx.font = "bold 25px Arial";
          ctx.fillText(s, 227,90);
          ctx.font = "bold 25px Arial";
          ctx.fillText(localStorage.getItem("High Score"), 42,90);
          var canvas3 = document.getElementById("canvas3");
          var ctx = canvas3.getContext("2d");
          ctx.clearRect(0, 0, canvas2.width, canvas2.height);
          document.getElementById("canvas3").style.visibility = "visible";
          document.getElementById("canvas2").style.visibility = "visible";
          canvas3.addEventListener("click", function(){
            myGameArea.stop();
            myGameArea.clear();
            startGame();
          });
          return;
        }
    }
    myGameArea.clear();
    // Media query for background change
    function myFunction(x) {
      if (x.matches) {
        bg2.newPos();
        bg2.update();
      } else {
        bg.newPos();
        bg.update();
      }
    }
    var x = window.matchMedia("(max-width: 600px)")
    myFunction(x)
    x.addListener(myFunction)

    // Media query for the pipes
    function myFunction(z) {
      if (z.matches) {
        h = 70
        e = 80
        t = 5
        player.width = 55
      } else {
       h = 45
       e = 80
       t = 2

      }
    }
    var z = window.matchMedia("(max-width: 600px)")
    myFunction(z)
    z.addListener(myFunction)
    player.speedX = 0;
    player.speedY = 0;
    player.newPos();
    player.update();
    myGameArea.frameNo += 1;
    if (myGameArea.frameNo == 1 || everyinterval(e)) {
      x = myGameArea.canvas.width;
      // Making new pipes
      minHeight = 70;
      maxHeight = 210;
      height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
      minGap = 82;
      maxGap = 100;
      //Gap between pipes
      gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
      // New pipes generated
      pipes.push(new component(h, height, "flappy-bird/p.png", x, 0,"image"));  // up
      pipes.push(new component(h, x - height - gap, "flappy-bird/p.png", x, height + gap, "image")); //down
  }
    // Pipes are moving
    for (i = 0; i < pipes.length; i += 1) {
        pipes[i].x += -t;
        pipes[i].update();
        if (pipes[i].x == player.x){
          s += 0.5;

          // If the highscore is less than the score highscore will equal the score
          if (Number(localStorage.getItem("High Score")) < s){
            var highscore = Number(localStorage.getItem("High Score"));
            highscore = s;
          }
          // If the highscore is more than the score highscore will equal the data from the local storage
          if (Number(localStorage.getItem("High Score")) > s){
            var highscore = Number(localStorage.getItem("High Score"));
          }
          //Setting up HighScore and send it to the client's machine for later
          if (typeof(Storage) !== "undefined") {
            localStorage.setItem("High Score", highscore);
          }
        }
    }
    // Updating the sccore counter on the screen
    score.font = "bold Arial"
    score.text =  s;
    score.update();
}

//Framing / Updating the game
function everyinterval(n){
  if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
  return false;
}
