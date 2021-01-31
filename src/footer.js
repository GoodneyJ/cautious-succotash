import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaGooglePlusG, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelopeOpen } from "react-icons/fa";



export default function footer() {
    return (
        <div id="footer-container">
            <div id="footer-content">
                <h2 id="footer-header">Contact Us</h2>
                <p><FaMapMarkerAlt id="map-marker"/>Car Servicing, 208 Trainer Avenue Street, Corner Market, UK - 62617</p>
                <p><FaPhoneAlt id="phone-icon"/>+1(12) 366 411 4999</p>
                <p id="footer-email"><FaRegEnvelopeOpen id="envelope"/>example@mail.com</p>
                <div id="socials">
                    <a className="social-item"><FaFacebookF/></a>
                    <a className="social-item"><FaTwitter /></a>
                    <a className="social-item"><FaInstagram /></a>
                    <a className="social-item"><FaGooglePlusG /></a>
                    <a className="social-item"><FaLinkedinIn /></a>
                </div>
                <div>
                   <p id="legal-stuff">&#169; All Rights Reserved by <a id="layout-link">W3Layouts.</a> Theme by <a id="rover-link">RoverThemes</a></p>
                </div>
            </div>
        </div>
    )
}
