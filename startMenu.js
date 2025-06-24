let startMenu = document.querySelector('.startMenu');
let startButton = document.querySelector('.start');

startButton.addEventListener("click", function(){
if (startMenu.style.display === "none"){
    startMenu.style.display = "block"
}else{
    startMenu.style.display = "none"
}
});