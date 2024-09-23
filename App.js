import React from "react";
import ReactDOM from "react-dom/client";
//JSX (transpiled before it reaches the js) - PARCEL -Bable
//JSX => Babel transpiled it to React.createElement- JS Object => HTMLElement(render)
//const heading = (<h1 id="heading" className="head">This is nameste react</h1>)
//REACT COMPONENT => Class Based Component , Functional Based Component
//functioal based component
const title = () => (
  < h1 className="head" tabIndex="5" >
    Greate nameste react</h1 >
  
);

const HeadingComponent = () => (
  <div id="container">
    {title()}
    <title />
    <title></title>
    <h1>This is React functional component</h1>

    
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
            
root.render(<HeadingComponent/>);
