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

// DATE FORM-1
// function showDate() {
//   const date = new Date();
//   const options = {
//     weekday: "long",
//     month: "long",
//     day: "numeric",
//     year: "numeric",
//   };
//   const formattedDate = date.toLocaleDateString("en-US", options);

//   const dateElement = document.getElementById("date");
//   dateElement.innerText = formattedDate;
// }

// DATE FORM-2
function showDate() {
  const date = new Date();
  const year = addZero(date.getFullYear());
  const month = addZero(date.getMonth() + 1);
  const day = addZero(date.getDate());
  const formattedDate = `${month}:${day}:${year}`;

  const dateElement = document.getElementById("date");
  dateElement.innerText = formattedDate;
}

setInterval(showDate, 1000);
setInterval(showTime, 1000);
