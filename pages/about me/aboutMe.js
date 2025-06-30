dragElement(document.getElementById("aboutMe"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "Header")) {
    document.getElementById(elmnt.id + "Header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseout = closeDragElementOut;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    if (elmnt.offsetTop - pos2 >= 0) {
      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    } else {
      elmnt.style.top = "0px";
    }
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

let aboutMeCloseButton = document.getElementById("aboutMeCloseButton");
aboutMeCloseButton.addEventListener("click", function () {
  aboutMe.style.display = "none";
});

let aboutMeStartButton = document.getElementById("aboutMeStartButton");
aboutMeStartButton.addEventListener("click", function () {
  if (aboutMe.style.display === "none" || aboutMe.style.display === "") {
    aboutMe.style.display = "block";
  } else {
    aboutMe.style.display = "none";
  }
});

function closeDragElementOut(e) {
  if (e.target != elmnt || elmnt.contains(e.target)) return;
  closeDragElement();
}