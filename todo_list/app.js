// Variables 
var key = "None";
var textToShow;
var ToBeRendered = [];
var onLoadRender = [];
var list = [];
var dictFromStorage = {};
var settings = {};
var card_count = Math.floor(Math.random() * 10000);

// Method for shortening messages later on
const shorten = (text,dict) => {
  dict.text = text;
  dict.short_text = text.substring(0,26) + "...";
  if (text.length > 30) {
    textToShow = dict.short_text
    dict.short = "yes";
  }
  else{
    textToShow = dict.text;
  }
  return textToShow
}

// Getting settings and cards (ONLOAD)
$(document).ready(() =>  {
  if (localStorage.getItem("cards")){
    // Render the cards
    const RENDER_ONLOAD = () =>{
      var dict = JSON.parse(localStorage.getItem("cards"));
      for (var index in dict){
        //shortening
        shorten(dict[index].text, dict[index])
        //appending to the list
        onLoadRender.push(
          <div className="cont" key={index}>
            <div id={index} className="cards">
              {textToShow}
              <i className="fa fa-check" id="check" aria-hidden="true"></i>
              <i className="fa fa-times" id="x" aria-hidden="true"></i>
            </div>
          </div>
        ) 
      }
      //rendering
      return(onLoadRender)
    }
    ReactDOM.render(<RENDER_ONLOAD/>, document.getElementById("todo_cards_onload"));
  }
  // If card has been marked as "Done", set it back
  var dict = JSON.parse(localStorage.getItem("cards"));
  for (var i in dict){
    if (dict[i].done == "yes"){
      $("#".concat(i)).css({"text-decoration" : "line-through", "opacity":0.6});
    }
  }
  //Apply settings
  if (localStorage.getItem("settings")) {
    var set = JSON.parse(localStorage.getItem("settings"))
    for (var index in set){
      if (index == "bg_color"){
        document.body.style.backgroundColor = set[index]
      }
      else if (index == "card_color"){
        var cards = document.getElementsByClassName("cards")
        for (var i = 0; i < cards.length; i++){
          cards[i].style.backgroundColor = set[index]
        }
      }
      else if (index == "title"){
        document.getElementById("title").innerHTML = set[index]
      }
    }
  }
});

// Render cards, when clicking on "Add a card" button
const render_cards = () => {
  // get input value, randomize card count, and assign to local storage
  var card_value = document.getElementById("todo_input").value;
  var storage_name = "card".concat(card_count);
  card_count = Math.floor(Math.random() * 10000);
  var props = {
    "name":storage_name,
    "text":card_value,
    "short_text":card_value.substring(0,26) + "...",
    "short":"no",
    "done":"no",
  };
  //shortening
  shorten(card_value, props)
  //update cards dictionary and  set to local storage
  if (localStorage.getItem("cards")) {}
  else{localStorage.setItem("cards", JSON.stringify(dictFromStorage))}
  dictFromStorage = JSON.parse(localStorage.getItem("cards"));
  dictFromStorage[storage_name] = props;
  localStorage.setItem("cards",JSON.stringify(dictFromStorage));
  setTimeout(RENDER, 0);
  const RENDER = () => {
    ToBeRendered.push(
      <div className="cont" key={props.name}>
        <div id={props.name} className="cards">
          {textToShow}
          <i className="fa fa-check" id="check" aria-hidden="true"></i>
          <i className="fa fa-times" id="x" aria-hidden="true"></i>
        </div>
      </div>
    )
    return(ToBeRendered)
  }
  ReactDOM.render(<RENDER/>, document.getElementById("todo_cards_render"));
  // Making the input field disappear
  document.getElementById("input_field").style.display = "none";
  setTimeout(() => { 
    var set = JSON.parse(localStorage.getItem("settings"))
    if (set["card_color"]) {
      var cards = document.getElementsByClassName("cards")
      for (var index = 0; index < cards.length; index++) {
        cards[index].style.backgroundColor = set["card_color"];
      }
    }
  },10)
}

// Delete a card, if the "X" is clicked
$(document).on('click', "#x", (e) => {
  var dict = JSON.parse(localStorage.getItem("cards"))
  $("#".concat(e.target.parentNode.id)).fadeOut(500);
  delete dict[e.target.parentNode.id];
  localStorage.setItem("cards", JSON.stringify(dict));
  key = "deleted";
  setTimeout(() => {key = "None"},500);
});

// Stage a card as "Done" if the check icon is clicked
$(document).on('click', "#check", (e) => {
  var dict = JSON.parse(localStorage.getItem("cards"));
  $("#".concat(e.target.parentNode.id)).css({"text-decoration" : "line-through", "opacity":0.6});
  dict[e.target.parentNode.id].done = "yes";
  localStorage.setItem("cards", JSON.stringify(dict));
  key = "done";
  setTimeout(() => {key = "None"},500);
});

// If a card is clicked, the user can edit its content, and see the full message
$(document).on('click', ".cards", (e) => {;
  var collect = JSON.parse(localStorage.getItem("cards"));
  var card = collect[e.target.id];
  // pass if the check, or the x is clicked only proceed if the card itself has been clicked
  if (key == "done") {}
  else if (key == "deleted") {}
  else{
    key = "None";
    $("#card_overlay").slideToggle(500);
    document.getElementById("pre_overlay").style.display = "block";
    document.getElementById("card_overlay").style.display = "block";
    // Method to bring up the info overlay
    const  MessageChange = () => {
      return (
        <div>
            <div className="container">
              <div><i className="fa fa-times" id="cancel_settings" style={{ fontSize: "30px" }} onClick={close_message}></i></div>
              <h3 style={{ textDecoration: "underline" }}>Your message:</h3>
              <div id="message">{card.text}</div>
            </div>
            <br/>
            <hr/>
            <div className="container" style={{ "display": "block" }}>
              <h3 style={{textDecoration:"underline"}}>Edit your message:</h3>
              <input id="message_input" type="text" ></input><button onClick={save_message}>Save message</button>
            </div>
          </div>
      )
    };
    ReactDOM.render(<MessageChange />, document.getElementById("card_overlay"));
    // Set value  for the input field
    document.getElementById("message_input").value = card.text;
    // Settings to be saved + reload
    // arrow function does not work for some reason
    function save_message() {
      //shortening
      var message = document.getElementById("message_input").value;
      shorten(message, card)
      //save and reload
      localStorage.setItem("cards", JSON.stringify(collect));
      location.reload();
    }
  }
});

// Function for closing the info pop-up
const close_message = () => {
  $("#card_overlay").slideToggle(500);
  document.getElementById("pre_overlay").style.display = "none";
}

// If you click on the title, you can change its name
$("#title").click(() =>{
  $(document).click(() => {
    if (localStorage.getItem("settings")) {
      var dict = JSON.parse(localStorage.getItem("settings"))
      dict["title"] = document.getElementById("title").innerHTML;
    }
    else {
      localStorage.setItem("settings", JSON.stringify(settings))
      var dict = JSON.parse(localStorage.getItem("settings"))
      dict["title"] = document.getElementById("title").innerHTML;
    }
    //apply settings
    localStorage.setItem("settings", JSON.stringify(dict))
  })
});

// Settings menu 
$("#settings").click(
  function render_settings(){
    $("#overlay").slideToggle(500);
    document.getElementById("overlay").style.display = "block";
    const Settings = () =>{
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
              <option value="teal" id="teal">Teal</option>
              <option value="blue" id="blue">Blue</option>
              <option value="red" id="red">Red</option>
              <option value="orange" id="orange">Orange</option>
              <option value="yellow" id="yellow">Yellow</option>
              <option value="lime" id="lime">Lime</option>
              <option value="green" id="green">Green</option>
              <option value="purple" id="purple">Purple</option>
              <option value="pink" id="pink">Pink</option>
              <option value="magenta" id="magenta">Magenta</option>
            </select>
            <h2 className="properties">Card colour:</h2>
            <select className="properties" id="card_color">
              <option value="whitesmoke" id="whitesmoke_c">Grey (Default)</option>
              <option value="cyan" id="cyan_c">Cyan</option>
              <option value="teal" id="teal_c">Teal</option>
              <option value="blue" id="blue_c">Blue</option>
              <option value="red" id="red_c">Red</option>
              <option value="orange" id="orange_c">Orange</option>
              <option value="yellow" id="yellow_c">Yellow</option>
              <option value="lime" id="lime_c">Lime</option>
              <option value="green" id="green_c">Green</option>
              <option value="purple" id="purple_c">Purple</option>
              <option value="pink" id="pink_c">Pink</option>
              <option value="magenta" id="magenta_c">Magenta</option>
            </select>
            <br/>
            <br/>
            <button onClick={save_settings}>Save Settings</button>  
          </div>
        </div>
      )
    }
    ReactDOM.render(<Settings />, document.getElementById("overlay"));
    // Set the selected colours as the 1st
    if (localStorage.getItem("settings")) {
      var dict = JSON.parse(localStorage.getItem("settings"))
      for (var i in dict){
        if (i == "bg_color"){
          document.getElementById(dict[i]).selected = "true";
        }
        else if (i == "card_color"){
          document.getElementById(dict[i].concat("_c")).selected = "true";
        }
      }
    }
  }
);

// Closing the settings menu
const close_settings = () =>{
  $("#overlay").slideToggle(500);
};

// Closing the settings menu, and applying settings
const save_settings = () =>{
  $("#overlay").slideToggle(500);
  // bg colour
  var bg_value = document.getElementById("bg_color").value;
  document.body.style.backgroundColor = bg_value;
  // card colour 
  var cards = document.getElementsByClassName("cards");
  var card_value = document.getElementById("card_color").value 
  for (var i = 0; i < cards.length; i++) {
    cards[i].style.backgroundColor = card_value;
  }
  //Adding values to the settings dict
  if (localStorage.getItem("settings")) {
    var sett = JSON.parse(localStorage.getItem("settings"))
    sett["bg_color"] = bg_value 
    sett["card_color"] = card_value 
    localStorage.setItem("settings", JSON.stringify(sett))
  }
  else{
    settings["bg_color"] = bg_value 
    settings["card_color"] = card_value 
    localStorage.setItem("settings", JSON.stringify(settings))
  }
};

// Info menu render
$("#info").click(
  function render_info(){
    $("#overlay").slideToggle(500);
    document.getElementById("overlay").style.display = "block";
    const Info = () =>{
      return(
        <div>
          <div className="container" id="info_menu">
            <i className="fa fa-times" id="cancel_settings" onClick={close_info} style={{ fontSize: "30px" }}></i>
            <h1>Info</h1>
            <hr/>
            <h2 id="secondary_title">Title</h2>
            <p id="info_brief">By clicking on the title, you can re-name it, as you wish. Click outside of the editing box to make a change.</p>
            <hr/>
            <h2 id="secondary_title">Settings</h2>
            <p id="info_brief">By clicking the gear, on the main screen, you can edit the colour of the background, and the cards.</p>
            <hr/>
            <h2 id="secondary_title">Cards</h2>
            <h3>Adding</h3>
            <p id="info_brief">You can click the "Add a card" button, to add new items to your list.</p>
            <br />
            <h3>Done state and Deleting</h3>
            <p id="info_brief">You can mark a card as "Done" by clicking the <i className="fa fa-check"></i> icon. By that the
              card will become darker, and wil have a line through it, but it does not get deleted, until you wish to
              do it so.</p>
            <p id="info_brief">You can delete any card by clicking the <i className="fa fa-times"></i> icon. Note that this change is irreversible.</p>
            <br />
            <h3>Message</h3>
            <p id="info_brief">If the message in a card, has more than 30 characters, the app will chop the message. The whole message can be looked
                at, by clicking on the given card. (Shortened messages have an ellipses at the end)</p>
            <p id="info_brief">You can edit a message, by clicking on the given card. Then edit the message then, click "Save message", and
                you are done.</p>
          </div>
        </div>
      )
    }
    ReactDOM.render(<Info/>, document.getElementById("overlay"));
});

// Closing the info panel
const close_info = () =>{
  $("#overlay").slideToggle(500);
}

// Render input field, for adding a new card
const render_input = () => {
  const Inputs = () => {
    return (
      <div className="container" id="input_field" style={{ "display": "block" }}>
        <input id="todo_input" type="text" placeholder="Enter something" /><br/><button onClick={render_cards}>Save this card</button>
      </div>
    )
  }
  ReactDOM.render(<Inputs />, document.getElementById("boxes"));
};
//END