// TODO: Add sources to the readme

const DEFAULT_MSG = '{"bulletins" : [' +
    '"Check the 436I Slack channel",' +
    '"Finish updating my resume",' +
    '"Watch the finale of Game of Thrones"]}';

function clearMessageBox() {
  document.getElementById("msg-box").value = "";
}

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
  //   }
  // }
}

function clearBulletins() {
  document.getElementById("bulletins").innerHTML = "";
}

function makeList() {
  let bulletins = JSON.parse(DEFAULT_MSG);
  let arr = bulletins["bulletins"];

  for (let i = 0; i < arr.length; i++) {
    let msg = document.createElement("li");
    msg.innerHTML = arr[i];
    document.getElementById("bulletins").appendChild(msg);
  }
}

window.onload=makeList;
