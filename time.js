let time = document.querySelector('p.time');
// Sets the current hour + minute to the time variable every 1/100th of a second(lol)
setInterval(function() {
    let clocktime = new Date();
    time.innerHTML = `${(clocktime.getHours() < 10 ? '0' : '') + clocktime.getHours()}:${(clocktime.getMinutes() < 10 ? '0' : '') + clocktime.getMinutes()}`;
}, 1);