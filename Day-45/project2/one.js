document.addEventListener("click",(event) => {
   
    const circle = document.createElement('div');

    circle.className = 'circle';

    circle.textContent = "Hi"

    const x = event.clientX;
    const y =event.clientY;

    circle.style.left = `${x-25}px`
    circle.style.top = `${y-25}px`





    const colors = ["#ef4444","#f97316","#eab308","#22c55e","#14b8a6","#3b82f6","#6366f1","#8b5cf6","#ec4899","#f43f5e"];
    circle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]; 

    document.body.appendChild(circle);

    setTimeout(() => {
        circle.remove();
    },5000)
})