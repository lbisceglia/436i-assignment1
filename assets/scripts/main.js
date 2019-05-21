// TODO: Add sources to the readme

const DEFAULT_MSG = '{"bulletins" : [' +
    '"Check the 436I Slack channel",' +
    '"Finish updating my resume",' +
    '"Watch the finale of Game of Thrones"]}';

function clearMessageBox() {
  document.getElementById("msg-box").value = "";
}

// W3 Schools To Do list tutorial used to add elements
function postBulletin() {
  let message = document.getElementById("msg-box").value;
  if (message) {
    let li = document.createElement("li");
    li.innerHTML = message;
    addClearBox(li);
    document.getElementById("bulletins").appendChild(li);
  }
  clearMessageBox();
}

function clearBulletins() {
  document.getElementById("bulletins").innerHTML = "";
}

// W3 Schools To Do list tutorial used to create clear boxes
function addClearBox(li) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);

  span.onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }

  li.appendChild(span);
}

function makeList() {
  let bulletins = JSON.parse(DEFAULT_MSG);
  let arr = bulletins["bulletins"];

  for (let i = 0; i < arr.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = arr[i];
    addClearBox(li);

    document.getElementById("bulletins").appendChild(li);
  }
}

// Stack Overflow post used for submitting on Enter
function submitOnEnter(event){
    if(event.which === 13){
        event.preventDefault(); // Prevents the addition of a new line in the text field (not needed in a lot of cases)
        postBulletin();
    }
}

window.onload=makeList;
