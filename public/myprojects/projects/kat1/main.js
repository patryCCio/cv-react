const hourTip = document.querySelector('.hourTip');
const minuteTip = document.querySelector('.minuteTip');
const secondTip = document.querySelector('.secondTip');


setInterval(function() {
    const time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();

    if(hour>12){
        hour = hour - 12;
    }

    let secondPosition = 360/60*second;
    let minutePosition = 360/60*minute;
    let hourPosition = 360/12*hour;

    if(minute >= 30){
        hourPosition = (360/12*hour) + 15;
    }
    
    secondTip.style.transform = `rotate(${secondPosition}deg)`;
    minuteTip.style.transform = `rotate(${minutePosition}deg)`;
    hourTip.style.transform = `rotate(${hourPosition}deg)`;

}, 1000);