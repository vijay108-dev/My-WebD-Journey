//<li>Git</li>

//create an element
// function attach(content){
// const element = document.createElement('li');
// element.innerHTML=content;

// const element2 = document.createElement('li');
// element2.innerHTML = content+"V2.0"

// const parent = document.getElementById("root");

// //parent.appendChild(element); 

// //parent.append(element,element2); //multiple things you will include

// };
// attach("Git");
// attach("react");
// attach("DSA");

//Create a Text Node
// const element = document.createTextNode("Hello guys");

// const parent = document.getElementById("root");
// parent.append(element);



//create an Attribute Node

// const element = document.createAttribute("id");
// element.value="first";

// // const curr_list = document.querySelector('li');
// // curr_list.setAttributeNode(element); //inspect


// //acess to second list
// const parent = document.getElementById("root");
// parent.children[1].setAttributeNode(element);



//accessing attribute of an element
//const element = document.getElementById("root");
//console.log(element.getAttribute("class")); //sohan
// element.setAttribute("mohan","20");
// element.removeAttribute("mohan");



//Add Nodes to the DOM
// const parent = document.getElementById("root");
// //array

// const element = document.createElement('li');
// element.innerHTML = "GitHub";
// //data
// // parent.prepend(element);



// // const child2 = parent.children[1];
// // parent.insertBefore(element,child2);

// //parent.replaceChild(element,child2);



// const parent = document.getElementById("root");
// parent.innerHTML += "<li>TS</li>";



// const element = document.createElement("div");
// element.innerHTML="Java";

// //parent.insertAdjacentElement("beforebegin", element); //java will attach on web page
// parent.insertAdjacentElement("afterend", element); 





//Delete node or element
const element = document.querySelector('li');
element.remove();