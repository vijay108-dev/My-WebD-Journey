const grandParent = document.getElementById('grandParent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

//event bubbling and event capturing

//By default our bubbling will work by default false

child.addEventListener('click',(event)=>{
    //console.log("child clicked");
    console.log(event.target);
    console.log(event.currentTarget);
    event.stopPropagation();
},false)

//addEventListener(first_event, callback, capture);

parent.addEventListener('click',()=>{
    console.log("parent clicked");
},true)

grandParent.addEventListener('click',()=>{
    console.log("grandparent clicked");
},false)