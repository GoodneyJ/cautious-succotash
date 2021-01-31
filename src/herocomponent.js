import React from 'react'

export default function herocomponent() {
    return (
        <div id="hero-wrapper" className="hero-image">
            <div id="hero-content">
                <div id="hero-info">
                    <h1 id="hero-info-header">Professional Car Repair and Maintenance</h1>
                    <p id="hero-info-text">
                    Lorem ipsum dolor sit amet coonsectetur adipisicing elit. Provident, excepturi. Distinctio accusantium fugit odit? Fugit ipsam. Sed ac fringilla ex. Nam mauris velit, ac cursus quis, non leo.
                    </p>

                    <a id="hero-info-btn">Read More</a>
                </div>

                <div id="hero-callback">
                    <h4 id="callback-header">Request a call back</h4>
                    <input className="input-item" type="text" name="Name" placeholder="Your Name"/>
                    <input className="input-item" type="text" name="Email" placeholder="Your Email" />
                    <input className="input-item" type="text" name="Contact" placeholder="Contact Number" />
                    <button id="callback-btn">Send Request</button>
                </div>
            </div>
        </div>
    )
}
