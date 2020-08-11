const clockC = document.querySelector(".js-clock");
const clock = clockC.querySelector("h2");
// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;

const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function setMonth(left){
  const today = new Date();
  return left > 0 ? left : month[today.getMonth()] - left;
}
function setTime(left){
  
  const time = left > 0 ? left : 60 + left;
  if(time < 10){
    return '0'+time;
  }else{
    return time;
  }
}
function setHour(left){
  
  const time = left > 0 ? left : 24 + left;
  if(time < 10){
    return '0'+time;
  }else{
    return time;
  }
}
function monthsToDate(){
  const today = new Date();
  var date = 0;
  for(var i = 11; i >= today.getMonth(); i--){
    date += month[i];
  }
  return date;
}

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const today = new Date();

  const LeftMonth = xmasDay.getMonth() - today.getMonth();
  const LeftDay = xmasDay.getDate() - today.getDate();
  const LeftHours = xmasDay.getHours() - today.getHours();
  const LeftMinutes = xmasDay.getMinutes() - today.getMinutes();
  const LeftSeconds = xmasDay.getSeconds() - today.getSeconds();

  clock.innerText = `${monthsToDate() + setMonth(LeftDay)}d ${setHour(LeftHours)}h ${setTime(LeftMinutes)}m ${setTime(LeftSeconds)}s`;
}

function init() {
  setInterval(getTime, 1000);
}
init();
