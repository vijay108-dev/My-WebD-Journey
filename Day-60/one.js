// const element = React.createElement("h1",{id:"first", className:"Vijay", style:{backgroundColor:"violet", fontSize:"30px"}},"Hello"); //tag attribute/properties or content

// const element2 = React.createElement("h1",{id:"second", className:"Vijay", style:{backgroundColor:"blue", fontSize:"30px"}},"Hello guys");
// //className we use bcz the class one is reserved
// //readbility very bad 

// // ReactDOM.render(element,document.getElementById('root')); //not supported
// // element : 50 card already Netflix

// const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
// // React root container: is
// Reactroot.render(element);
// Reactroot.render(element2);

//whenever i render any element whose previous children is clear and latest element come into it.




const element = React.createElement("h1",{id:"first", className:"Vijay", style:{backgroundColor:"violet", fontSize:"30px"}},"Hello");

const element2 = React.createElement("h1",{id:"second", className:"Vijay", style:{backgroundColor:"blue", fontSize:"30px"}},"Hello guys");

const div1 = React.createElement('div',{},[element,element2]);

const Reactroot = ReactDOM.createRoot(document.getElementById('root'));

Reactroot.render(div1);


