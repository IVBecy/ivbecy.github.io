///// Variables needed
var all_the_cards = [];
var card_count = 0;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////// Reading from local storage and making the cards ///////////////////
$(document).ready(function (){
  //// Displaying info from the local storage into card form
  for (var i = 0; i < localStorage.length; i++) {
    var card = document.createElement("div");
    card.setAttribute("id", Object.keys(localStorage)[i]);
    card.setAttribute("class", "cards");
    document.getElementById("todo_cards").appendChild(card);
    card.textContent = Object.values(localStorage)[i];
  }
  /// Hiding score from Flappy Bird, so that it does not get deleted
  setTimeout(Flappy, 0)
  function Flappy(){
    document.getElementById("High Score").style.display = "none";
  }
});
// Assigning the card count to the number of items in the local storage
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
    var card = document.createElement("div");
    card.setAttribute("id", "card".concat(card_count));
    card.setAttribute("class", "cards");
    document.getElementById("todo_cards").appendChild(card)
    card.textContent = all_the_cards[all_the_cards.length - 1];
  }
  // Making the input filed disappear
  document.getElementById("input_field").style.display = "none";
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// if we click on any card, it will disappear and remove its name and value from the local storage
$(document).on('click', ".cards", function (e) {
  $("#".concat(e.target.id)).fadeOut(500);
  localStorage.removeItem(e.target.id);
});

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
}
