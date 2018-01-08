const timeInDays = 2;
const currentTime = Date.parse(new Date());
const deadline = new Date(currentTime + timeInDays * 24 * 60 * 60 * 1000);

const getTimeRemaining = (endtime) => {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        "total": t,
        "days": days,
        "hours": hours,
        "minutes": minutes,
        "seconds": seconds
    }
}

const initializeClock = (endtime) => {
    let clockDays = document.getElementById("days");
    let clockHours = document.getElementById("hours");
    let clockMinutes = document.getElementById("minutes");
    let clockSeconds = document.getElementById("seconds");
    let timeinterval = setInterval(function () {
        let t = getTimeRemaining(endtime);
        clockDays.innerHTML = ('0' + t.days).slice(-2);
        clockHours.innerHTML = ('0' + t.hours).slice(-2);
        clockMinutes.innerHTML = ('0' + t.minutes).slice(-2);
        clockSeconds.innerHTML = ('0' + t.seconds).slice(-2);
        if (t.total <= 0) {
            clearInterval(timeinterval);
            alert("The end of the world has come upon us!");
        }
    }, 1000);
}

initializeClock(deadline);