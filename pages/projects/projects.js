dragElement(document.getElementById("projects"));

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

let projectsCloseButton = document.getElementById("projectsCloseButton");
projectsCloseButton.addEventListener("click", function () {
  projects.style.display = "none";
});

let projectsStartButton = document.getElementById("projectsStartButton");
projectsStartButton.addEventListener("click", function () {
  if (projects.style.display === "none" || projects.style.display === "") {
    projects.style.display = "block";
  } else {
    projects.style.display = "none";
  }
});

function closeDragElementOut(e) {
  if (e.target != elmnt || elmnt.contains(e.target)) return;
  closeDragElement();
}
