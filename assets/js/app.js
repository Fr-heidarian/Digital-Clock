// CLOCK
const clock = document.getElementById("clock");
const addZero = (x) => (x < 10 ? "0" + x : x);

function showTime() {
  const date = new Date();
  const hour = addZero(date.getHours());
  const minute = addZero(date.getMinutes());
  const second = addZero(date.getSeconds());
  const ampm = hour >= 12 ? "PM" : "AM";
  clock.innerText = `${hour}:${minute}:${second}  ${ampm}`;
}


setInterval(showTime, 1000);
