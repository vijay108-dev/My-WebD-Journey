function timing(){

const timer = document.getElementById('root');
const now = new Date();
const IndianTime = now.toLocaleTimeString();
timer.innerHTML = IndianTime;
}

// while(true) //program will crash again and again implement
//     {  
// timing();
// }

setInterval(timing,1000); //it will take callback function


const timer = document.getElementById('root');

timer.style.fontSize = "200px";
timer.style.display = "flex";
timer.style.alignItems = "center";
timer.style.justifyContent = "center";
timer.style.backgroundColor = "aqua";
timer.style.height="100vh";