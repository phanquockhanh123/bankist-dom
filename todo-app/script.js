// create close button in each element todo
var myNodeList = document.getElementsByTagName("LI");

for (var i = 0; i < myNodeList.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// enter value
var val = document.getElementById("todo");

val.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("myBtn").click();
    }
})

function newTodo() {
    // get value from input text
    var val = document.getElementById("todo").value;

    // create new li
    var li = document.createElement("li");
    var t = document.createTextNode(val);
    li.appendChild(t);

    if (val === '') {
        alert("You must write something")
    } else {
        document.getElementById("showContent").appendChild(li);
    }

    // set value input empty
    document.getElementById("todo").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");

    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (var i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);


