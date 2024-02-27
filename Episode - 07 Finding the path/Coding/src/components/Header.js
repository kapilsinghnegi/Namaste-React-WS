import logo from "../utils/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={ logo } />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>Cart</li>
                    <button 
                     className="login" 
                     onClick={() => {
                        btnName==="Logout" 
                         ? setBtnName("Login")
                         : setBtnName("Logout");
                     }}
                    >
                     {btnName}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;