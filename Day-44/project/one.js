const quotes = [
  "Honesty is the best policy.",
  "Practice makes a man perfect.",
  "Time and tide wait for no one.",
  "Actions speak louder than words.",
  "Where there is a will, there is a way.",
  "Success is not final, failure is not fatal.",
  "Dream big and dare to fail.",
  "Hard work beats talent when talent doesn’t work hard.",
  "Believe in yourself and all that you are.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Small steps every day lead to big results.",
  "Your attitude determines your direction.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Consistency is the key to success.",
  "Learn from yesterday, live for today, hope for tomorrow.",
  "Success doesn’t come to you, you go to it.",
  "Make today so awesome that yesterday gets jealous.",
  "Failure is the stepping stone to success.",
  "Stay positive, work hard, make it happen."
];

function generatequote(){
const text = document.getElementById("quote");

const index = Math.floor(Math.random()*quotes.length);
text.textContent = quotes[index];
}

setInterval(generatequote,5000);


const colors = [
  "#ff9a9e",
  "#fad0c4",
  "#fbc2eb",
  "#a1c4fd",
  "#c2e9fb",
  "#d4fc79",
  "#96e6a1",
  "#84fab0",
  "#8fd3f4",
  "#fccb90"
];

function changeBackgroundColor() {
  const index = Math.floor(Math.random() * colors.length);
  document.body.style.background = colors[index];
}

setInterval(changeBackgroundColor, 3000);

//when you get the object then you will change everything whatever you want to change
