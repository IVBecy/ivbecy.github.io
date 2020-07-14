///// Variables needed
var all_the_cards = [];
var card_count = Math.floor(Math.random() * 10000);
var done_cards = [];
var key;

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
      document.getElementById("title").innerHTML = Object.values(localStorage)[i]
    }
    // Passing if there are any "Done" cards
    else if (Object.keys(localStorage)[i] == "Done") {
      continue
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
      var message = Object.values(localStorage)[i];
      // Getting string length (ONLY display 30 chars, 37 + ellipses)
      if (message.length > 30) {
        card.textContent = message.substring(0, 27) + "...";
        card.value = "short";
      }
      else { card.textContent = message; }

      //// Making buttons for "Done" state, and deleting
      // Done (check)
      var check = document.createElement("i");
      check.setAttribute("class", "fa fa-check");
      check.setAttribute("id", "check");
      // Delete (x)
      var x = document.createElement("i");
      x.setAttribute("class", "fa fa-times");
      x.setAttribute("id", "x");
      // appending
      card.appendChild(check);
      card.appendChild(x);
    }
  }
  // Coloring in the cards, if the user have set their own color (IF SET)
  if (localStorage.getItem("card_color")) {
    var cards = document.getElementsByClassName("cards");
    var color = localStorage.getItem("card_color");
    for (var i = 0; i < cards.length; i++) {
      cards[i].style.backgroundColor = color;
    }
  }
  // Set cards as "Done", if they were set before, and delete them from local storage if they are deleted
  if (localStorage.getItem("Done")) {
    done_cards.push(localStorage.getItem("Done").split(","));
    var individual_cards = String(done_cards).split(",");
    done_cards = []
    for (var i = 0; i < individual_cards.length; i++) {
      if (document.getElementById(individual_cards[i])) {
        $("#".concat(individual_cards[i])).css({ "text-decoration": "line-through", "opacity": 0.6 });
        done_cards.push(individual_cards[i])
        localStorage.setItem("Done", done_cards)
     }
    }
  } 
});

// Assigning the card count to a random number, so it never gets overwritten   !!!! IMPORTANT
card_count = Math.floor(Math.random() * 10000);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////// Rendering cards //////////////
function render_cards() {
  // get input value, randomize card count once again
  var card_value = document.getElementById("todo_input").value;
  all_the_cards.push(card_value);
  card_count = Math.floor(Math.random() * 10000);
  if (localStorage.getItem("card".concat(card_count))) {
    card_count = Math.floor(Math.random() * 10000);
  }
  // log the card name and value to the local storage
  var storage_name = "card".concat(card_count);
  localStorage.setItem(storage_name, all_the_cards[all_the_cards.length - 1]);
  // making a single card, with the value of the input box
  setTimeout(getting_value, 0);
  function getting_value() {
    var container = document.createElement("div");
    container.setAttribute("id","cont");
    document.getElementById("todo_cards").appendChild(container);
    var card = document.createElement("div");
    card.setAttribute("id", "card".concat(card_count));
    card.setAttribute("class", "cards");
    container.appendChild(card);
    var message = all_the_cards[all_the_cards.length - 1];
    // Getting string length (ONLY display 30 chars, 37 + ellipses)
    if (message.length > 30) {
      card.textContent = message.substring(0,27) + "...";
      card.value = "short";
    }
    else { card.textContent = message;}
    if (localStorage.getItem("card_color")) {
      card.style.backgroundColor = localStorage.getItem("card_color");
    }
    //// Making buttons for "Done" state, and deleting
    // Done (check)
    var check = document.createElement("i");
    check.setAttribute("class", "fa fa-check");
    check.setAttribute("id", "check");
    // Delete (x)
    var x = document.createElement("i");
    x.setAttribute("class", "fa fa-times");
    x.setAttribute("id", "x");
    // appending
    card.appendChild(check);
    card.appendChild(x);
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
  key = "deleted"
});

// if we click on the check on any  card, the given card loose its original opacity and will have a line through it, as it will be marked "done"
// The cards will, still be displayed on the screen, until the user does not delete it.
$(document).on('click', "#check", function (e) {
  $("#".concat(e.target.parentNode.id)).css({"text-decoration" : "line-through", "opacity":0.6});
  document.getElementById(e.target.parentNode.id).value = "done";
  done_cards.push(e.target.parentNode.id);
  localStorage.setItem("Done", done_cards)
  return(key = "done")
});

//////////////////////////////////////////////////////////////////////////////////////////////
// if we a click on a shortened card, all the message will get displayed
$(document).on('click', ".cards", function (e) {
  // If the cards are shortened
  if (e.target.value == "short") {
    key = "short"
    // If we click the "check" or the "x", the user will not be able to edit text only if the key differs
    if (key == "done") { }
    else if (key == "deleted") { }
    else{
      $("#card_overlay").slideToggle(500);
      document.getElementById("pre_overlay").style.display = "block";
      document.getElementById("card_overlay").style.display = "block";
      // If a user clicks on a non short card, they can edit the content of the card
      function MessageChange() {
        return (
          <div>
            <div className="container">
              <div><i className="fa fa-times" id="cancel_settings" style={{ fontSize: "30px" }} onClick={close_message}></i></div>
              <h3 style={{ textDecoration: "underline" }}>Your message:</h3>
              <div id="message">{localStorage.getItem(e.target.id)}</div>
            </div>
            <br/>
            <hr/>
            <div className="container" id="input_field" style={{ "display": "block" }}>
              <h3 style={{textDecoration:"underline"}}>Edit the content of your message</h3>
              <input id="message_input" type="text" /><button onClick={save_message}>Save message</button>
            </div>
          </div>
        )
      };
      ReactDOM.render(<MessageChange />, document.getElementById("card_overlay"))
      // Set innerhtml (value), so user can edit more freely
      document.getElementById("message_input").value = localStorage.getItem(e.target.id);
      function save_message() {
        // If the new message is less than 30 chars. then remove the short value || if not keep it short
        var message = document.getElementById("message_input").value
        if (message.length > 30) {
          document.getElementById(e.target.id).innerHTML = message.substring(0, 27) + "...";
          document.getElementById(e.target.id).value = "short";
        }
        else {
          document.getElementById(e.target.id).innerHTML = message;
          document.getElementById(e.target.id).value = "";
        }
        var card = document.getElementById(e.target.id);
        //// Making buttons for "Done" state, and deleting
        // Done (check)
        var check = document.createElement("i");
        check.setAttribute("class", "fa fa-check");
        check.setAttribute("id", "check");
        // Delete (x)
        var x = document.createElement("i");
        x.setAttribute("class", "fa fa-times");
        x.setAttribute("id", "x");
        // appending
        card.appendChild(check);
        card.appendChild(x);
        localStorage.setItem(e.target.id, document.getElementById("message_input").value)
        // Closing
        $("#card_overlay").slideToggle(500);
        document.getElementById("pre_overlay").style.display = "none";
      }
    }
  }
  // If the cards are not shortened
  else{
    // If we click the "check" or the "x", the user will not be able to edit text only if the key differs
    if (key == "done"){}
    else if (key == "deleted") {}
    else{
      $("#card_overlay").slideToggle(500);
      document.getElementById("pre_overlay").style.display = "block";
      document.getElementById("card_overlay").style.display = "block";
      // If a user clicks on a non short card, they can edit the content of the card
      function MessageChange() {
        return (
          <div className="container" id="input_field" style={{ "display": "block" }}>
            <div><i className="fa fa-times" id="cancel_settings" style={{ fontSize: "30px" }} onClick={save_message}></i></div>
            <h3 style={{ textDecoration: "underline" }}>Edit the content of your message</h3>
            <input id="message_input" type="text" /><button onClick={save_message}>Save message</button>
          </div>
        )
      };
      ReactDOM.render(<MessageChange />, document.getElementById("card_overlay"))
      // Set innerhtml (value), so user can edit more freely
      document.getElementById("message_input").value = localStorage.getItem(e.target.id);
      function save_message() {
        // If the new message is less than 30 chars. then remove the short value || if not keep it short
        var message = document.getElementById("message_input").value
        if (message.length > 30) {
          document.getElementById(e.target.id).innerHTML = message.substring(0, 27) + "...";
          document.getElementById(e.target.id).value = "short";
        }
        else {
          document.getElementById(e.target.id).innerHTML = message;
          document.getElementById(e.target.id).value = "";
        }
        var card = document.getElementById(e.target.id);
        //// Making buttons for "Done" state, and deleting
        // Done (check)
        var check = document.createElement("i");
        check.setAttribute("class", "fa fa-check");
        check.setAttribute("id", "check");
        // Delete (x)
        var x = document.createElement("i");
        x.setAttribute("class", "fa fa-times");
        x.setAttribute("id", "x");
        // appending
        card.appendChild(check);
        card.appendChild(x);
        localStorage.setItem(e.target.id, document.getElementById("message_input").value)
        // Closing
        $("#card_overlay").slideToggle(500);
        document.getElementById("pre_overlay").style.display = "none";
      }
    }
  }
});

// Function for closing the message pop-up
function close_message(){
  $("#card_overlay").slideToggle(500);
  document.getElementById("pre_overlay").style.display = "none";
}

////////////////////////////////////////////////////////////////////////////////////
// If you click on the title, you can change its name
$("#title").click(function(){
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
  document.getElementById("title").innerHTML = document.getElementById("title_input").value;
  localStorage.setItem("title", document.getElementById("title_input").value);
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

///////////////////////////////////////////////////////////////
//////////// Info menu render (REACT)
$("#info").click(
  function render_info(){
    $("#overlay").slideToggle(500);
    document.getElementById("overlay").style.display = "block";
    function Info(){
      return(
        <div>
          <div className="container">
            <i className="fa fa-times" id="cancel_settings" onClick={close_info} style={{ fontSize: "30px" }}></i>
            <h1>Info</h1>
            <hr/>
            <h2 id="secondary_title">Title</h2>
            <p>By clicking on the title, you can re-name it, as you wish.</p>
            <hr/>
            <h2 id="secondary_title">Settings</h2>
            <p>By clicking the gear, on the main screen, you can edit the colour of the background, and the cards.</p>
            <hr/>
            <h2 id="secondary_title">Cards</h2>
            <ul>
              <h3>Adding</h3>
              <li><p>You can click the "Add a card" button, to add new items to your list.</p></li>
              <br />
              <h3>Done state and Deleting</h3>
              <li><p>You can mark a card as "Done" by clicking the <i className="fa fa-check"></i> icon. By that the
              card will become darker, and wil have a line through it, but it does not get deleted, until you wish to
              do it so.</p></li>
              <li><p>You can delete any card by clicking the <i className="fa fa-times"></i> icon. Note that this change is irreversible.</p></li>
              <br />
              <h3>Message</h3>
              <li><p>If the message in a card, has more than 30 characters, the app will chop the message. The whole message can be looked
                at, by clicking on the given card. (Shortened messages have an ellipses at the end)</p></li>
              <li><p>You can edit a message, by clicking on the given card. Then edit the message then, click "Save message", and 
                you are done.</p></li>
            </ul>
          </div>
        </div>
      )
    }
    ReactDOM.render(<Info/>, document.getElementById("overlay"))
});

// Closing the info panel
function close_info(){
  $("#overlay").slideToggle(500);
}

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
