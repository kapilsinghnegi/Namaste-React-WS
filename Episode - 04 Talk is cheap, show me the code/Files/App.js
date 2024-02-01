import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.png";

/* 
Header
    -Logo
    -Nav items
Body
    -Search
    -Restaurant Container
        -Restaurant Card
            -image
            -name
            -star
            -cuisine
            -price 
Footer
    -Copyright
    -Links
    -Address
    -Contact
*/

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={ logo } />
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

const RestaurantCard = () => {
    return (
        <div className="restaurant-card" style={{ backgroundColor:"#f0f0f0" }}>
            <img alt="Restaurant Image" className="restaurant-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f60a0596a76581b140ea724a02b7805b" />
            <h3>Meghna Foods</h3>
            <h4>Biryani, North Indian, Asian</h4>
            <h4>4.3 <span className="star">⭐</span> 1,000+ ratings</h4>
            <h4>₹350 for one</h4>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="restaurant-container">
                <RestaurantCard />
            </div>
        </div>
    );
};

const App = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);