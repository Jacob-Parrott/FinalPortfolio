let time = document.querySelector('p.time');
setInterval(function() {
    let clocktime = new Date();
    time.innerHTML = `${clocktime.getHours()}:${clocktime.getMinutes()}`;
}, 1);