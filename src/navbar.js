import React from 'react'
import {FaCarAlt} from "react-icons/fa";

export default function navbar() {

    window.onscroll = function() {navFunc()};
    
    function navFunc() {
        
        let navbar = document.getElementById("navbar-wrapper")
        var sticky = navbar.offsetTop;

        if(window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }


    return (
        <div id="navbar-wrapper">
            <div id="navbar-container">
                <a id="nav-logo"><span><FaCarAlt id="logo-car" /></span>Car Servicing</a>
                <div id="nav-link-wrapper">
                    <ul id="nav-link-list">
                        <li className="nav-item"><a href="#" className="nav-link active">Home</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Services</a></li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Pages</a>
                        </li>
                        <li className="nav-item"><a href="#" className="nav-link">Blog</a></li>
                    </ul>
                    <a id="nav-contact-btn">Contact Us</a>
                </div>
            </div>
        </div>
    )
}
