// TODO: Add sources to the readme

const DEFAULT_MSG = {
  "bulletins" : [
    {"message": "Check the 436I Slack channel"},
    {"message": "Finish updating my resume"},
    {"message": "Watch the finale of Game of Thrones"}
  ]
}

let bulletins = JSON.parse(DEFAULT_MSG);

function initialize() {
  alert("hellooo!!!!");
}

function clearMessageBox() {
  document.getElementById("msg-box").value = "";
}

// Create a new list item when clicking on the "Add" button
function postBulletin() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("msg-box").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("bulletins").appendChild(li);
  }
  clearMessageBox();

  // var span = document.createElement("SPAN");
  // var txt = document.createTextNode("\u00D7");
  // span.className = "close";
  // span.appendChild(txt);
  // li.appendChild(span);
  //
  // for (i = 0; i < close.length; i++) {
  //   close[i].onclick = function() {
  //     var div = this.parentElement;
  //     div.style.display = "none";
    }
  }
}
