// const red = document.getElementById('red');
// const blue = document.getElementById('blue');
// const orange = document.getElementById('orange');
// const green = document.getElementById('green');
// const purple = document.getElementById('purple');

// const body = document.body;

// red.addEventListener('click',()=>{

//     body.style.backgroundColor = 'red';

// })
// blue.addEventListener('click',()=>{

//     body.style.backgroundColor = 'blue';

// })
// orange.addEventListener('click',()=>{

//     body.style.backgroundColor = 'orange';

// })
// green.addEventListener('click',()=>{

//     body.style.backgroundColor = 'green';

// })
// purple.addEventListener('click',()=>{

//     body.style.backgroundColor = 'purple';

// })


//2nd Way
// const button = document.querySelectorAll('button');

// const body = document.body;
// console.log(button); //here you will get the nodelist on inpect window

// button.forEach((button)=>{
//     //console.log(button);

//     button.addEventListener('click', () =>{

//         //console.log(button.id);
//         body.style.backgroundColor = button.id;

//     })

// })

//not optimise code bcz it takes space when we call again and again and our task will be slow, loops





//3rd way
//event deligate
const root = document.getElementById('root');
// document.body.style.backgroundColor;
root.addEventListener('click',(event)=>{

    if(event.target.tagName == 'BUTTON')
    document.body.style.backgroundColor = event.target.id;

})

