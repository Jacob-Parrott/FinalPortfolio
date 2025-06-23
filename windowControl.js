let debugWindow = document.querySelector(".debugWindow");

debugWindow.addEventListener("click", function(pos) {
    console.log("x: " + pos.screenX);
    console.log("y: " + pos.screenY);
});