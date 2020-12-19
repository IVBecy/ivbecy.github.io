// ONLOAD animation
$("body").hide().fadeIn(900);
$("#text_over_image").hide().delay(1000).fadeIn(1000);

//Navbar function
var count = 0;
const hamburger = () => {
  // Making both of the animations work
  const toggling = () =>{
    count++;
    // Closing navbar
    if (count % 2 == 0 ) {
      document.getElementById("navbar").style.animation = "toggleout 0.5s ease";
      $("#navbar").toggle(500);
    }
     // opening navbar
    else{
      $("#navbar").toggle();
      document.getElementById("navbar").style.animation = "toggle 0.5s ease";
    }
  }
  toggling() 
}
// Rendering footer
function Footer(){
  return(
    <footer>
      <a href="mailto:kristofhracza@gmail.com"><i className="fa fa-envelope" style={{fontSize:30}}></i></a>
      <a href="https://github.com/IVBecy"><i className="fa fa-github" style={{ fontSize: 30 }} ></i></a>
      <a href="https://www.reddit.com/user/IVBecy"><i className="fab fa-reddit" style={{ fontSize: 30 }}></i></a>
      <a href="https://www.youtube.com/channel/UCPdJpsymfMobXq6oncfvicA?view_as=subscriber"><i className="fa fa-youtube" style={{ fontSize: 30 }}></i></a>
      <p>© Kristof Hracza 2020 | All rights reserved</p>
    </footer>
  )
}
ReactDOM.render(<Footer />, document.getElementById('footer'));

// Rendering navigation bar
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
        <a href="experience.html" id="experience.html"><h2>Experiences</h2></a>
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

// Making the projects card
if (page == "projects.html"){
  const languages = {
    py:"fab fa-python",
    html:"fab fa-html5",
    js:"fab fa-js-square",
    php:"fab fa-php",
    css:"fab fa-css3",
  }
  const projects = {
    reaper: {
      title: "Reaper",
      date: "19 December 2020",
      lang: languages["py"],
      image: "images/reaper.png",
    },
    project_anon: {
      title: "Project anon",
      date: "10 December 2020",
      lang: languages["php"],
      image: "images/project_anon.png",
    },
    networkScan:{
      title:"Scanner",
      date:"16 September 2020",
      lang:languages["py"],
      image:"images/scanner.png",
    },
    reverseShell:{
      title:"Reverse Shell",
      date:"12 September",
      lang:languages["py"],
      image:"images/shell.png",
    },
    notepad:{
      title:"Notepad",
      date:"6 September 2020",
      lang:languages["py"],
      image:"images/notepad.png",
    },
    cardDesign:{
      title:"Card Designs",
      date:"24 August 2020",
      lang:languages["css"],
      image:"images/css_cards.png",
    },
    passManager:{
      title:"Password manager",
      date:"20 August 2020",
      lang:languages["php"],
      image:"images/php_pass.png",
    },
    speech:{
      title:"Speech recognition",
      date:"12 August 2020",
      lang:languages["js"],
      image:"images/speech.png",
    },
    usernameLookup:{
      title:"Spy.py",
      date:"10 August 2020",
      lang:languages["py"],
      image:"images/uname.png",
    },
    template3:{
      title:"Template (3)",
      date:"24 July 2020",
      lang:languages["php"],
      image:"images/design_3.png",
    },
    beatMaker:{
      title:"Beat Maker",
      date:"19 July 2020",
      lang:languages["html"],
      image:"images/beat.png",
    },
    phpForms:{
      title:"Forms",
      date:"18 July 2020",
      lang:languages["js"],
      image:"images/php_form.png",
    },
    todo:{
      title:"To-Do List",
      date:"21 June 2020",
      lang:languages["js"],
      image:"images/todo.png",
    },
    template2:{
      title:"Template (2)",
      date:"19 June 2020",
      lang:languages["html"],
      image:"images/design_2.png",
    },
    hashCracker:{
      title:"Hash Cracker",
      date:"12 June 2020",
      lang:languages["py"],
      image:"images/crack.png",
    },
    template1:{
      title:"Template (1)",
      date:"8 June 2020",
      lang:languages["html"],
      image:"images/design_1.png",
    },
    oldWebsite:{
      title:"Old Website",
      date:"2 June 2020 (Retirement)",
      lang:languages["html"],
      image:"images/old_website.png",
    },
    spaceInvaders:{
      title:"Space Invaders",
      date:"24 May 2020",
      lang:languages["py"],
      image:"images/space_invaders.png",
    },
    flappyBird:{
      title:"Flappy Bird",
      date:"4 April 2020",
      lang:languages["js"],
      image:"images/flappy_prev.png",
    },
    website:{
      title:"Website",
      date:"2 February 2020 (Creation)",
      lang:languages["html"],
      image:"images/prev.png",
    },
    snake:{
      title:"Snake",
      date:"16 September 2019",
      lang:languages["py"],
      image:"images/snake.png",
    }
  }
  var list = []
  const renderProjectCards = () =>{
    for (var i  in projects){
      const RenderingProcess = () => {
        list.push(
        <div className="card" key={i} id={i}>
          <h2>{projects[i].title}</h2>
          <img id={"img".concat(i)} src={projects[i].image} style={{width:"70%"}} />
          <h3>Date:</h3>
          <p>{projects[i].date}</p>
          <h3>Main language:</h3>
          <i className={projects[i].lang} style={{fontSize:"35px"}}></i>
        </div>
        )
        return(list)
      }
      ReactDOM.render(<RenderingProcess />,document.getElementById("projects"))
    }
  }
  renderProjectCards()

  // Image pop-up (modal)
  var imageDict = {}
  for(var index in list){
    var imageSource  = document.getElementById("img".concat(list[index].key)).src
    imageDict["img".concat(list[index].key)] = imageSource
  }
  $("img").click((e) => {
    document.getElementsByClassName("modal")[0].style.display = "block";
    const Renderimage = () =>{
      return(
        <div className="container">
          <i className="fas fa-times-circle" style={{fontSize:"35px"}} onClick={CloseModal}></i>
          <img src={e.target.src}></img>
        </div>
      )
    }
    ReactDOM.render(<Renderimage/>, document.getElementsByClassName("modal")[0])
  })
  const CloseModal = () => {
    document.getElementsByClassName("modal")[0].style.display = "none";
  }
}