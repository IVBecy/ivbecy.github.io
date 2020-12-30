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
        <a href="services.html" id="/services.html"><h2>Services</h2></a>
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
  var list = []
  const renderProjectCards = () =>{
    for (var i  in projects){
      const RenderingProcess = () => {
        list.push(
          <div className="card" key={i}>
            <img id={i} src={projects[i].image}/>
            <div><h6 style={{ backgroundColor: projects[i].colour}}>{projects[i].lang}</h6><h5>{projects[i].date}</h5></div>
            <div style={{ clear: "both"}}></div>
            <h2><a href={projects[i].url}>{projects[i].title}</a></h2>
            <h5 id="project-desc">{projects[i].desc}</h5>
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
    ReactDOM.render(<Renderimage />, document.getElementsByClassName("modal")[0])
  })
  const CloseModal = () => {
    document.getElementsByClassName("modal")[0].style.display = "none";
  }
}
// More info for services
if (path == "/services.html"){
  $(document).ready(() => {
    document.getElementById("webdev_service_btn").onclick = () => {
    var modal = document.getElementsByClassName("modal")[0];
      // Webdev
      const WebDevInfo = () => {
        modal.style.display = "block";
        return(
          <div className="overlay_container">
            <i className="fas fa-times" id="close-service-deets"></i>
            <h2>Web Development</h2>
            <h4>Base prize: £110</h4>
            <hr/>
            <h3>Includes:</h3>
            <ul>
              <li>Design customization</li>
              <li>User friendly and attractive layout</li>
              <li>Responsive design</li>
              <li>2 Free revisions</li>
            </ul>
            <h3>Extras:</h3>
            <ul>
              <li>Revision (after the first two) - £10</li>
              <li>Each page - £10</li>
            </ul>
            <hr />
            <p>Completion time: 1-2 weeks.</p>
          </div>
        )
      }
      setTimeout(() => { ReactDOM.render(<WebDevInfo />, modal); document.getElementById("close-service-deets").onclick = () => { modal.style.display = "none" }},1)
    }
    // Video edit
    document.getElementById("video_service_btn").onclick = () => {
      var modal = document.getElementsByClassName("modal")[0];
      const VideoEditInfo = () => {
        modal.style.display = "block";
        return (
          <div className="overlay_container">
            <i className="fas fa-times" id="close-service-deets"></i>
            <h2>Video editing</h2>
            <h4>Base prize: £25</h4>
            <hr />
            <h3>Includes:</h3>
            <ul>
              <li>Video up to 3 minutes maximum</li>
              <li>Transitions</li>
              <li>Cinematic look</li>
              <li>Full HD quality</li>
              <li>Royalty-free background music</li>
            </ul>
            <h3>Extras:</h3>
            <ul>
              <li>Revision (after the first two) - £10</li>
            </ul>
            <hr />
            <p>Completion time: 5 days</p>
          </div>
        )
      }
      setTimeout(() => { ReactDOM.render(<VideoEditInfo />, modal); document.getElementById("close-service-deets").onclick = () => { modal.style.display = "none" } }, 1)
    }
  })
}
