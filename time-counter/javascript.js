const daysel= document.getElementById('days');
const hoursel= document.getElementById('hours');
const minutesel= document.getElementById('minutes');
const secondel= document.getElementById('second');

const newyear= "1 Jan 2023";
function countdown(){
    const newyeardate = new Date(newyear);
    const currentdate = new Date();
    let seconds = (newyeardate - currentdate) / 1000;
    let days = Math.floor( seconds / 3600 / 24);
    const hours = Math.floor(seconds / 3600) % 24;
    const mintues = Math.floor(seconds / 60) % 60;
    const netseconds = Math.floor( seconds % 60);
    daysel.innerHTML = days;
    hoursel.innerHTML = hours;
    minutesel.innerHTML = mintues;
    secondel.innerHTML = netseconds;
    
    

}
countdown();
setInterval(countdown, 1000);