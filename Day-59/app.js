
const element = React.createElement("h1",{},"Hello"); //tag attribute or content

// ReactDOM.render(element,document.getElementById('root')); //not supported
// element : 50 card already Netflix

const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
// React root container: is
Reactroot.render(element);