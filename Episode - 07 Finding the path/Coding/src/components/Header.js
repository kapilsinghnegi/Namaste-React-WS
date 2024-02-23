import logo from "../utils/logo.png";
import { useState } from "react";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");

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