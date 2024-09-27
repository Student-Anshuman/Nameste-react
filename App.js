import React from "react";
import ReactDOM from "react-dom/client";
/*
* Header
*  -Logo
*  -NavItems
* Body
*  -Search
*  -RestorentContainer
* Footer
*  -Copyright
*  -Links
* Body
*  -Search
*  -RestorentContainer
*  -RestorentCard
*  -Img
*  -Name of res, Star Rating, cuisine, delery tie
*/
const Header = () => {
  return (
    <div className="header">
      <div className="Logo-container">
        <img className="Logo" src="https://logodix.com/logo/303016.png" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

const styleCard = {
  backgroundColor: "#f0f1"
};
const RestorentCard = () => {
  return (
    <div className="res-card" style={styleCard}> 
      <img
        className="img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/85825a6d74b1059a63a9b688de9f67ce"
      />
      <h3 className="f-name">Ice Cream</h3>
      <h4>Delicious Ice Cream</h4>
      <h4>4.4 Rating</h4>
    </div>
  );
}
const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">
        <RestorentCard />
        <RestorentCard />
        <RestorentCard />
        <RestorentCard />
        <RestorentCard />
        <RestorentCard />
        <RestorentCard/>
      </div>
    </div>
  );
  
}
const AppLayout = () => {
  return <div className="app">
    <Header />
    <Body/>
  </div>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
            
root.render(<AppLayout/>);
