// Variables 
var textToShow;
var state;
var msg;
var ToBeRendered = [];
var onLoadRender = [];
var list = [];
var checkList = [];
var checkListLocal = {};
var dictFromStorage = {};
var settings = {};
var card_count = Math.floor(Math.random() * 10000);

// Method for shortening messages later on
const shorten = (text, dict) => {
  dict.text = text;
  dict.short_text = text.substring(0, 26) + "...";
  if (text.length > 30) {
    textToShow = dict.short_text
    dict.short = "yes";
  }
  else {
    textToShow = dict.text;
  }
  return textToShow
}

// Getting settings and cards (ONLOAD)
$(document).ready(() => {
  if (localStorage.getItem("cards")) {
    // Render the cards
    const RENDER_ONLOAD = () => {
      var dict = JSON.parse(localStorage.getItem("cards"));
      for (var index in dict) {
        //shortening
        shorten(dict[index].text, dict[index]);
        //appending to the list
        onLoadRender.push(
          <div className="cont" key={index}>
            <div id={index} className="cards">
              <div id={`text_${dict[index].name}`}>
                {textToShow}
                <i className="fas fa-pencil-alt"></i>
              </div>
            </div>
          </div>
        )
      }
      //rendering
      return (onLoadRender)
    }
    ReactDOM.render(<RENDER_ONLOAD />, document.getElementById("todo_cards_onload"));
  }
  // If card has been marked as "Done", set it back
  var dict = JSON.parse(localStorage.getItem("cards"));
  for (var i in dict) {
    if (dict[i].done == "yes") {
      $("#".concat(i)).css({ "text-decoration": "line-through", "opacity": 0.6 });
    }
  }
  //Apply settings
  if (localStorage.getItem("settings")) {
    var set = JSON.parse(localStorage.getItem("settings"));
    for (var index in set) {
      if (index == "bg_color") {
        document.body.style.backgroundColor = set[index];
      }
      else if (index == "card_color") {
        var cards = document.getElementsByClassName("cards");
        for (var i = 0; i < cards.length; i++) {
          cards[i].style.backgroundColor = set[index];
        }
      }
      else if (index == "title") {
        document.getElementById("title").innerHTML = set[index];
        document.title = `${document.getElementById("title").innerHTML} | List`;
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
    "name": storage_name,
    "due_date": "None",
    "text": card_value,
    "short_text": card_value.substring(0, 26) + "...",
    "short": "no",
    "done": "no",
  };
  //shortening
  shorten(card_value, props);
  //update cards dictionary and  set to local storage
  if (localStorage.getItem("cards")) { }
  else { localStorage.setItem("cards", JSON.stringify(dictFromStorage)) };
  dictFromStorage = JSON.parse(localStorage.getItem("cards"));
  dictFromStorage[storage_name] = props;
  localStorage.setItem("cards", JSON.stringify(dictFromStorage));
  setTimeout(RENDER, 0);
  const RENDER = () => {
    ToBeRendered.push(
      <div className="cont" key={props.name}>
        <div id={props.name} className="cards">
          <div id={`text_${props.name}`}>
            {textToShow}
            <i className="fas fa-pencil-alt"></i>
          </div>
        </div>
      </div>
    )
    return (ToBeRendered)
  }
  ReactDOM.render(<RENDER />, document.getElementById("todo_cards_render"));
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
  }, 10)
}

// If a card is clicked, the info panel will pop up
$(document).on('click', ".cards", (e) => {
  var collect = JSON.parse(localStorage.getItem("cards"));
  var card = collect[e.target.parentNode.id];
  if (card.done == "yes") { state = "Done" }
  else { state = "In-progress" }
  document.title = `${collect[e.target.parentNode.id].text} | Info`;
  document.getElementById("pre_overlay").style.display = "block";
  document.getElementById("card_overlay").style.display = "block";
  // Method to bring up the info overlay
  const MessageChange = () => {
    return (
      <div>
        <div className="left_container">
          <div><i className="fa fa-times" id="cancel_settings" onClick={close_message}></i></div>
          <div id="message" contentEditable="true" suppressContentEditableWarning="true">{card.text}</div>
        </div>
        <br />
        <div className="left_container" style={{ "display": "block" }}>
          <h4><i className="fas fa-align-left" id="icons_overlay"></i>Description</h4>
          <textarea id="description" placeholder="Add a description..." defaultValue={card.note}></textarea>
          <br />
          <br />
          <h4><i className="far fa-calendar-alt" id="icons_overlay"></i>Due date</h4>
          <input id="date" type="date" defaultValue={card.due_date} />
          <br />
          <br />
          <h4><i className="fas fa-toolbox" id="icons_overlay"></i>States:</h4>
          <p id="state">State: {state}</p>
          <i className="fa fa-check" id="check" aria-hidden="true"></i>
          <i className="fa fa-times" id="x" aria-hidden="true"></i>
        </div>
      </div>
    )
  }
  ReactDOM.render(<MessageChange />, document.getElementById("card_overlay"));
  // Function for closing the info pop-up ++ Settings to be saved + reload
  function close_message() {
    //shortening
    document.title = `${document.getElementById("title").innerHTML} | List`;
    var message = document.getElementById("message").innerHTML;
    shorten(message, card);
    //set due date to cards
    var date = document.getElementById("date").value
    if (date == "" || date == "null" || date == "undefined") {
      //pass
    }
    else {
      card["due_date"] = date;
    }
    card["note"] = document.getElementById("description").value
    //save and reload
    localStorage.setItem("cards", JSON.stringify(collect));
    document.getElementById(`text_${card.name}`).innerHTML = textToShow
    document.getElementById("pre_overlay").style.display = "none";
    document.getElementById("card_overlay").style.display = "none";
  }
  // Delete a card, if the "X" is clicked
  $("#x").click(() => {
    delete collect[e.target.parentNode.id];
    localStorage.setItem("cards", JSON.stringify(collect));
    location.reload();
  });
  // Stage a card as "Done" if the check icon is clicked (can revert changes by clicking the button again)
  $(`#check`).click(() => {
    if (card.done == "no") {
      card.done = "yes";
      state = "Done";
      document.getElementById("state").innerHTML = `State: ${state}`;
      localStorage.setItem("cards", JSON.stringify(collect));
      $("#".concat(collect[e.target.parentNode.id].name)).css({ "text-decoration": "line-through", "opacity": 0.6 });
    }
    else {
      card.done = "no";
      state = "In-progress";
      document.getElementById("state").innerHTML = `State: ${state}`;
      localStorage.setItem("cards", JSON.stringify(collect));
      $("#".concat(collect[e.target.parentNode.id].name)).css({ "text-decoration": "none", "opacity": 1 });
    }
  });
});

// If you click on the title, you can change its name
$("#title").click(() => {
  $(document).click(() => {
    if (localStorage.getItem("settings")) {
      var dict = JSON.parse(localStorage.getItem("settings"));
      dict["title"] = document.getElementById("title").innerHTML;
    }
    else {
      localStorage.setItem("settings", JSON.stringify(settings));
      var dict = JSON.parse(localStorage.getItem("settings"));
      dict["title"] = document.getElementById("title").innerHTML;
    }
    //apply settings
    localStorage.setItem("settings", JSON.stringify(dict));
  })
});

// Settings menu 
$("#settings").click(
  function render_settings() {
    document.title = `Settings | List`;
    document.getElementById("pre_overlay").style.display = "block";
    document.getElementById("card_overlay").style.display = "block";
    const Settings = () => {
      return (
        <div className="left_container" id="settings_menu">
          <div>
            <i className="fa fa-times" id="cancel_settings" onClick={close_settings}></i>
            <h2>Settings</h2>
          </div>
          <div>
            <h3 className="properties"><i className="fas fa-fill" id="icons_overlay"/>Background colour</h3>
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
            <h3 className="properties"><i className="fas fa-list-ul" id="icons_overlay" />Card colour</h3>
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
            <br />
            <br />
            <button onClick={save_settings}>Save Settings</button>
          </div>
        </div>
      )
    }
    ReactDOM.render(<Settings />, document.getElementById("card_overlay"));
    // Set the selected colours as the 1st
    if (localStorage.getItem("settings")) {
      var dict = JSON.parse(localStorage.getItem("settings"))
      for (var i in dict) {
        if (i == "bg_color") {
          document.getElementById(dict[i]).selected = "true";
        }
        else if (i == "card_color") {
          document.getElementById(dict[i].concat("_c")).selected = "true";
        }
      }
    }
  }
);

// Closing the settings menu
const close_settings = () => {
  document.getElementById("pre_overlay").style.display = "none";
  document.getElementById("card_overlay").style.display = "none";
  document.title = `${document.getElementById("title").innerHTML} | List`;
};

// Closing the settings menu, and applying settings
const save_settings = () => {
  document.title = `${document.getElementById("title").innerHTML} | List`;
  document.getElementById("pre_overlay").style.display = "none";
  document.getElementById("card_overlay").style.display = "none";
  // bg colour
  var bg_value = document.getElementById("bg_color").value;
  document.body.style.backgroundColor = bg_value;
  // card colour 
  var cards = document.getElementsByClassName("cards");
  var card_value = document.getElementById("card_color").value;
  for (var i = 0; i < cards.length; i++) {
    cards[i].style.backgroundColor = card_value;
  }
  //Adding values to the settings dict
  if (localStorage.getItem("settings")) {
    var sett = JSON.parse(localStorage.getItem("settings"));
    sett["bg_color"] = bg_value;
    sett["card_color"] = card_value;
    localStorage.setItem("settings", JSON.stringify(sett));
  }
  else {
    settings["bg_color"] = bg_value;
    settings["card_color"] = card_value;
    localStorage.setItem("settings", JSON.stringify(settings));
  }
};

// Info menu render
$("#info").click(
  function render_info() {
    document.title = `Docs | List`;
    $("#overlay").slideToggle(500);
    document.getElementById("pre_overlay").style.display = "block";
    document.getElementById("card_overlay").style.display = "block";
    const Info = () => {
      return (
        <div>
          <div className="left_container" id="info_menu">
            <i className="fa fa-times" id="cancel_settings" onClick={close_info} style={{ fontSize: "30px" }}></i>
            <h2>Info</h2>
            <h4>Title</h4>
            <p>By clicking on the title, you can re-name it, as you wish. Click outside of the editing box to approve to the change.</p>
            <h4>Settings</h4>
            <p>By clicking the gear, on the main screen you can edit the colour of the background, and the cards.</p>
            <h4>Cards</h4>
            <p>You can click the "+" icon, at the bottom of the screen, to add new items to your list.</p>
            <h4>Card info menu</h4>
            <p>By clicking on a card, you can bring up information about the it such as: a brief description of the task,
              the due date, and operations. A card can be marked as done, by clicking the <i className="fa fa-check"></i> icon, with 
              green background colour.
              This action is reversible, simply click on the <i className="fa fa-check"></i> again, to remove the done attribute
              of the card. You can also delete a card, by clicking on the <i className="fa fa-times"></i> icon, with red background colour.
              This action is irreversible. Also within this menu, in the top left corner, you will see the name of the card. 
              You can change that anytime, by clicking on it.</p>
            <h4>Message</h4>
            <p>If the message in a card, has more than 30 characters, the app will chop the message. The whole message can be looked
                at, by clicking bringing up the info menu. (Shortened messages have an ellipses at the end)</p>
          </div>
        </div>
      )
    }
    ReactDOM.render(<Info />, document.getElementById("card_overlay"));
  });

// Closing the info panel
const close_info = () => {
  document.title = `${document.getElementById("title").innerHTML} | List`;
  document.getElementById("pre_overlay").style.display = "none";
  document.getElementById("card_overlay").style.display = "none";
}

// Render input field, for adding a new card
const render_input = () => {
  const Inputs = () => {
    return (
      <div className="container" id="input_field" style={{ "display": "block" }}>
        <input id="todo_input" type="text" placeholder="Enter something" /><br />
        <button onClick={render_cards}>Save this card</button>
      </div>
    )
  }
  ReactDOM.render(<Inputs />, document.getElementById("boxes"));
};
//END