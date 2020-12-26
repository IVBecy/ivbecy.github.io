// ONLOAD animation
$("body").hide().fadeIn(900);
$("#text_over_image").hide().delay(1000).fadeIn(1000);

//Navbar function
var count = 1;
const hamburger = () => {
  // Making both of the animations work
  const toggling = () =>{
    count++;
    // opening navbar
    if (count % 2 == 0 ) {
      document.getElementById("navbar_icon").className = "fas fa-times";
      document.getElementById("navbar").style.display = "block";
      document.getElementById("navbar_icon").style.backgroundColor = "transparent";
      document.getElementById("navbar_icon").style.color = "white";
      document.getElementById("navbar_icon").style.boxShadow = "none";
    }
     // closing navbar
    else{
      document.getElementById("navbar_icon").className = "fas fa-bars";
      document.getElementById("navbar").style.display = "none";
      document.getElementById("navbar_icon").style.backgroundColor = "black";
      document.getElementById("navbar_icon").style.color = "#077BFF";
    }
  }
  toggling() 
}

// Rendering navigation bar
function Navbar(){
  return(
    <div>
      <div>
        <i id="navbar_icon"  onClick={hamburger} className="fa fa-bars"></i>
      </div>
      <div className="navbar" id="navbar" style={{display:"none"}}>
        <a href="index.html" id="/index.html"><h2>Home</h2></a>
        <a href="projects.html" id="/projects.html"><h2>Projects</h2></a>
        <a href="experience.html" id="/experience.html"><h2>Experiences</h2></a>
        <footer>
          <div id="contacts">
            <a href="mailto:kristofhracza@gmail.com"><i className="fa fa-envelope" style={{ fontSize: "25px" }}></i></a>
            <a href="https://github.com/IVBecy"><i className="fa fa-github" style={{ fontSize: "25px" }} ></i></a>
            <a href="https://www.youtube.com/channel/UCPdJpsymfMobXq6oncfvicA?view_as=subscriber"><i className="fa fa-youtube" style={{ fontSize: "25px" }}></i></a>
          </div>
        </footer>
      </div>
    </div>
  )
}
ReactDOM.render(<Navbar />, document.getElementById("navigation_bar"))
// Giving an active class to the current page
var path = window.location.pathname;
if (path === "/") {
  // On starting page
  document.getElementById("/index.html").className = "active"
}
// Any page
else { document.getElementById(path).className = "active"}
// Making the projects card
if (path == "/projects.html"){
  const languages = {
    py: { name: "Python", colour: "#306998"},
    html: { name: "HTML", colour: "#E44D26"},
    js: { name: "Javascript", colour: "#F0DB4F" },
    php: { name: "PHP", colour: "#787CB5" },
    css: { name: "CSS", colour: "#3C99DC" },
  }
  const projects = {
    reaper: {
      title: "Reaper",
      date: "19 December 2020",
      lang: languages["py"]["name"],
      colour: languages["py"]["colour"],
      image: "images/reaper.png",
    },
    project_anon: {
      title: "Project anon",
      date: "10 December 2020",
      lang: languages["php"]["name"],
      colour: languages["php"]["colour"],
      image: "images/project_anon.png",
    },
    networkScan:{
      title:"Scanner",
      date:"16 September 2020",
      lang: languages["py"]["name"],
      colour: languages["py"]["colour"],
      image:"images/scanner.png",
    },
    reverseShell:{
      title:"Reverse Shell",
      date:"12 September",
      lang: languages["py"]["name"],
      colour: languages["py"]["colour"],
      image:"images/shell.png",
    },
    notepad:{
      title:"Notepad",
      date:"6 September 2020",
      lang: languages["py"]["name"],
      colour: languages["py"]["colour"],
      image:"images/notepad.png",
    },
    cardDesign:{
      title:"Card Designs",
      date:"24 August 2020",
      lang: languages["css"]["name"],
      colour: languages["css"]["colour"],
      image:"images/css_cards.png",
    },
    passManager:{
      title:"Password manager",
      date:"20 August 2020",
      lang: languages["php"]["name"],
      colour: languages["php"]["colour"],
      image:"images/php_pass.png",
    },
    speech:{
      title:"Speech recognition",
      date:"12 August 2020",
      lang: languages["js"]["name"],
      colour: languages["js"]["colour"],
      image:"images/speech.png",
    },
    usernameLookup:{
      title:"Spy.py",
      date:"10 August 2020",
      lang: languages["py"]["name"],
      colour: languages["py"]["colour"],
      image:"images/uname.png",
    },
    template3:{
      title:"Template (3)",
      date:"24 July 2020",
      lang: languages["php"]["name"],
      colour: languages["php"]["colour"],
      image:"images/design_3.png",
    },
    beatMaker:{
      title:"Beat Maker",
      date:"19 July 2020",
      lang: languages["html"]["name"],
      colour: languages["html"]["colour"],
      image:"images/beat.png",
    },
    phpForms:{
      title:"Forms",
      date:"18 July 2020",
      lang: languages["php"]["name"],
      colour: languages["php"]["colour"],
      image:"images/php_form.png",
    },
    todo:{
      title:"To-Do List",
      date:"21 June 2020",
      lang: languages["js"]["name"],
      colour: languages["js"]["colour"],
      image:"images/todo.png",
    },
    template2:{
      title:"Template (2)",
      date:"19 June 2020",
      lang: languages["html"]["name"],
      colour: languages["html"]["colour"],
      image:"images/design_2.png",
    },
    hashCracker:{
      title:"Hash Cracker",
      date:"12 June 2020",
      lang: languages["py"]["name"],
      colour: languages["py"]["colour"],
      image:"images/crack.png",
    },
    template1:{
      title:"Template (1)",
      date:"8 June 2020",
      lang: languages["html"]["name"],
      colour: languages["html"]["colour"],
      image:"images/design_1.png",
    },
    oldWebsite:{
      title:"Old Website",
      date:"2 June 2020",
      lang: languages["html"]["name"],
      colour: languages["html"]["colour"],
      image:"images/old_website.png",
    },
    spaceInvaders:{
      title:"Space Invaders",
      date:"24 May 2020",
      lang: languages["py"]["name"],
      colour: languages["py"]["colour"],
      image:"images/space_invaders.png",
    },
    flappyBird:{
      title:"Flappy Bird",
      date:"4 April 2020",
      lang: languages["js"]["name"],
      colour: languages["js"]["colour"],
      image:"images/flappy_prev.png",
    },
    website:{
      title:"Website",
      date:"2 February 2020",
      lang: languages["html"]["name"],
      colour: languages["html"]["colour"],
      image:"images/prev.png",
    },
    snake:{
      title:"Snake",
      date:"16 September 2019",
      lang: languages["py"]["name"],
      colour: languages["py"]["colour"],
      image:"images/snake.png",
    }
  }
  var list = []
  const renderProjectCards = () =>{
    for (var i  in projects){
      const RenderingProcess = () => {
        list.push(
          <div className="card" key={i}>
            <img id={i} src={projects[i].image}/>
            <div><h6 style={{ backgroundColor: projects[i].colour}}>{projects[i].lang}</h6><h5>{projects[i].date}</h5></div>
            <div style={{ clear: "both"}}></div>
            <h2>{projects[i].title}</h2>
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
    var imageSource = document.getElementById(list[index].key).src
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