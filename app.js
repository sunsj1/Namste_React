import React from "react";
import ReactDOM from "react-dom";
/*
  Header
    -logo
    -Nav Items
  Body
    - Search
    - RestaurantContainer
      -RestaurantCard
          -img
          -name of res,star rating,cuisine,delevery time
*/
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg" alt="Logo" />
      </div>
      <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>          

          </ul>
      </div>
    </div>
  );
};

const Body=()=>{
  return (
     <div className="body">
      <div className="search">Search</div>
      <div className="res-conttainer">
          <ResCard></ResCard>
      </div>
     </div>
  )
}
const ResCard=()=>{
  return (
    <div className="res-card">
      <h3>Meghna Foods</h3>
    </div>
  )
}
const AppLayout=()=>{
  return (
    <div className="app">
      <Header></Header>
      <Body></Body>
    </div>
  )
}

ReactDOM.render(<AppLayout />, document.getElementById("root"));
