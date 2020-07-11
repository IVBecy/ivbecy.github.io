///// Variables needed
var all_the_cards = [];
var card_count = 0;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////// Reading from local storage and making the cards ///////////////////
$(document).ready(function (){
  // Declaring the bg color of the body element, so that the user can change it, with the help of JS
  document.body.style.backgroundColor = "DeepSkyBlue";
  //// Displaying info from the local storage into card form
  for (var i = 0; i < localStorage.length; i++) {
    // Hiding the flappy bird score so it does not get deleted 
    if (Object.keys(localStorage)[i] == "High Score"){
      continue
    }
    // Remembering the bg color of the app, on every log on (IF SET)
    else if (Object.keys(localStorage)[i] == "bg_color") {
      document.body.style.background = Object.values(localStorage)[i]
    }
    // Remembering the title of the app, on every log on  (IF SET)
    else if (Object.keys(localStorage)[i] == "title") {
      document.getElementById("title").innerHTML = ""
      document.getElementById("title").innerHTML = Object.values(localStorage)[i]
    }
    // This prevents the code, from generating a card with the name of its color  (IF SET)
    else if (Object.keys(localStorage)[i] == "card_color") {
      continue
    }
    // Show everything else in the local storage except the Flappy Bird High score and the settings (IF SET)
    else{
      var card = document.createElement("div");
      card.setAttribute("id", Object.keys(localStorage)[i]);
      card.setAttribute("class", "cards");
      document.getElementById("todo_cards").appendChild(card);
      card.textContent = Object.values(localStorage)[i];
      //// Making buttons for "Done" state, and deleting
      // Done (check)
      var check = document.createElement("i")
      check.setAttribute("class", "fa fa-check")
      check.setAttribute("id", "check")
      // Delete (x)
      var x = document.createElement("i")
      x.setAttribute("class", "fa fa-times")
      x.setAttribute("id", "x")
      // appending
      card.appendChild(check)
      card.appendChild(x)
    }
  }
  // Coloring in the cards, if the user have set their own color (IF SET)
  if (localStorage.getItem("card_color")) {
    var cards = document.getElementsByClassName("cards");
    var color = localStorage.getItem("card_color")
    for (var i = 0; i < cards.length; i++) {
      cards[i].style.backgroundColor = color;
    }
  }
});

// Assigning the card count to the number of items in the local storage !!!! IMPORTANT
card_count = localStorage.length
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////// Rendering cards //////////////
function render_cards() {
  // get input value, and increment the card count by 1
  var card_value = document.getElementById("todo_input").value;
  all_the_cards.push(card_value)
  card_count += 1;
  // log the card name and value to the local storage
  var storage_name = "card".concat(card_count)
  localStorage.setItem(storage_name, all_the_cards[all_the_cards.length - 1]);
  // making a single card, with the value of the input box
  setTimeout(getting_value, 0)
  function getting_value() {
    var container = document.createElement("div")
    container.setAttribute("id","cont")
    document.getElementById("todo_cards").appendChild(container)
    var card = document.createElement("div");
    card.setAttribute("id", "card".concat(card_count));
    card.setAttribute("class", "cards");
    container.appendChild(card)
    card.textContent = all_the_cards[all_the_cards.length - 1];
    if (localStorage.getItem("card_color")) {
      card.style.backgroundColor = localStorage.getItem("card_color");
    }
    //// Making buttons for "Done" state, and deleting
    // Done (check)
    var check = document.createElement("i")
    check.setAttribute("class", "fa fa-check")
    check.setAttribute("id", "check")
    // Delete (x)
    var x = document.createElement("i")
    x.setAttribute("class", "fa fa-times")
    x.setAttribute("id", "x")
    // appending
    card.appendChild(check)
    card.appendChild(x)
  }
  // Making the input filed disappear
  document.getElementById("input_field").style.display = "none";
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////// Operations ///////////////////////////////////////////////////////////////////

// if we click on the x on any  card, the given card will disappear
$(document).on('click', "#x", function (e) {
  $("#".concat(e.target.parentNode.id)).fadeOut(500);
  localStorage.removeItem(e.target.parentNode.id);
});

// if we click on the check on any  card, the given card loose its original opacity and will have a line through it, as it will be marked "done"
// If the page is refreshed, it will disappear, as it was no longer needed
$(document).on('click', "#check", function (e) {
  $("#".concat(e.target.parentNode.id)).css({"text-decoration" : "line-through", "opacity":0.6});
  document.getElementById(e.target.parentNode.id).value = "done"
  localStorage.removeItem(e.target.parentNode.id)
});

////////////////////////////////////////////////////////////////////////////////////

// If you click on the title, you can change its name
$("#title").click(function(){
  console.log("HELLO")
    function TitleChange() {
      return (
        <div className="container" id="input_field" style={{ "display": "block" }}>
          <input id="title_input" type="text" placeholder="Enter a new title" /><button onClick={render_title}>Save title</button>
        </div>
      )
    }
    ReactDOM.render(<TitleChange />, document.getElementById("titleChange"))
});
function render_title(){
  document.getElementById("title").innerHTML = "";
  document.getElementById("title").innerHTML = document.getElementById("title_input").value;
  localStorage.setItem("title", document.getElementById("title_input").value)
  document.getElementById("input_field").style.display = "none";
}

///////////////////////////////////////////////////////////////
//////////// Settings menu render (REACT)
$("#settings").click(
  function render_settings(){
    $("#overlay").slideToggle(500);
    document.getElementById("overlay").style.display = "block";
    function Settings(){
      return(
        <div>
          <div className="container">
            <i className="fa fa-times" id="cancel_settings" onClick={close_settings} style={{fontSize:"30px"}}></i>
            <h1 style={{marginBottom: "20px"}}>Settings</h1>
          </div>
          <div className="container">
            <h2 className="properties">Background colour:</h2>
            <select className="properties" id="bg_color">
              <option value="DeepSkyBlue" id="DeepSkyBlue">Deep Sky Blue (Default)</option>
              <option value="blue" id="blue">Blue</option>
              <option value="red" id="red">Red</option>
              <option value="orange" id="orange">Orange</option>
              <option value="yellow" id="yellow">Yellow</option>
              <option value="green" id="green">Green</option>
              <option value="purple" id="purple">Purple</option>
              <option value="pink" id="pink">Pink</option>
            </select>
            <h2 className="properties">Card colour:</h2>
            <select className="properties" id="card_color">
              <option value="whitesmoke" id="whitesmoke_c">Grey (Default)</option>
              <option value="cyan" id="cyan_c">Cyan</option>
              <option value="blue" id="blue_c">Blue</option>
              <option value="red" id="red_c">Red</option>
              <option value="orange" id="orange_c">Orange</option>
              <option value="yellow" id="yellow_c">Yellow</option>
              <option value="green" id="green_c">Green</option>
              <option value="purple" id="purple_c">Purple</option>
              <option value="pink" id="pink_c">Pink</option>
            </select>
          </div>
        </div>
      )
    }
    ReactDOM.render(<Settings />, document.getElementById("overlay"))
    //// Set the selected colours as the 1st, so it does not get reset
    if (localStorage.getItem("bg_color")) { document.getElementById(localStorage.getItem("bg_color")).selected = "true";}
    if (localStorage.getItem("card_color")) { document.getElementById(localStorage.getItem("card_color").concat("_c")).selected = "true"; }
  }
);

// Closing the settings menu, and applying settings
function close_settings(){
  /////////////////// Closing menu
  $("#overlay").slideToggle(500);
  ////////////////// Applying settings
  //// bg colour
  var value = document.getElementById("bg_color").value;
  document.body.style.backgroundColor = value;
  //  Store the bg color in local storage, so the users will not lose their settings
  localStorage.setItem("bg_color",value);
  //// card colour 
  var cards = document.getElementsByClassName("cards");
  for (var i = 0; i < cards.length; i++) {
    cards[i].style.backgroundColor = document.getElementById("card_color").value;
  }
   //  Store the card color in local storage, so the users will not lose their settings
  localStorage.setItem("card_color", document.getElementById("card_color").value);
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////// Rendering the input field, whenever the "add a card" button is clicked (REACT) ///////////
function render_input() {
  function Inputs() {
    return (
      <div className="container" id="input_field" style={{ "display": "block" }}>
        <input id="todo_input" type="text" placeholder="Enter a todo" /><button onClick={render_cards}>Save this card</button>
      </div>
    )
  }
  ReactDOM.render(<Inputs />, document.getElementById("boxes"))
};
