const form = document.querySelector('form');

//inspect
//By default bubbling
// form.addEventListener('input', (event) => {
//     console.log(event.target.value);

// })


// form.addEventListener('change', (event) => {
//     console.log(event.target.value);

// })

// form.addEventListener('focusin', (event) => {
//     console.log(event.target.value);

// })


// form.addEventListener('focusout', (event) => {
//     console.log(event.target.value);

// })


// form.addEventListener('click', (event) => {
//     //console.log(event.target.value);
//     console.log("single click");

// })


// form.addEventListener('dbclick', (event) => {
//     //console.log(event.target.value);
//     console.log("double click");

// })



// form.addEventListener('submit', (event) => {
//     //console.log(event.target.value);
//     console.log("Form Submited");
// })


// form.addEventListener('reset', (event) => {
// //     //console.log(event.target.value);
//     console.log("form Reset");
//  })





// form.addEventListener('submit',(event)=>{

//     event.preventDefault(); //it will never refersh your page

//     const firstName = document.getElementById("firstName");
//     console.log(firstName.value);

//     const lastName = document.getElementById("lastName");
//     console.log(lastName.value);

//     const age = document.getElementById("age");
//     console.log(age.value);

//     const result = document.getElementById('result');
//     result.innerText = `${firstName.value} ${lastName.value} is a Man`;

//     document.body.append(result);


// })






form.addEventListener('submit',(event)=>{

    event.preventDefault(); 


    const data = new FormData(form);

    for(let [key,value] of data.entries()){
        console.log(key,value);
    }


    // const data = new FormData(form);
    // console.log(Array.from(data.keys()));
    //  console.log(Array.from(data.values()));

})








// <!-- Event type -->
// 1: input
// 2: change
// 3: focus
// <!-- focus: Does not bubble, so it needs to be directly attached to individual input elements.
// focusin: Bubbles, so it can be attached to the form element for event delegation. -->
// 4: blur or focusout
// 5: click
// <!-- 6: dbclick  -->
// 7: submit
// 8: reset
// 9: FormData 


