import React from 'react'
import {FaQuoteLeft, FaPhoneAlt, FaCarAlt, FaPlug, FaWrench, FaLongArrowAltRight, FaCogs, FaUsers, FaCar} from "react-icons/fa";
import Mechanic from './IMAGES/mechanic.jpg'
import Lady from './IMAGES/confusedlady.jpg'
import JohnWilson from './IMAGES/JohnWilson.jpg'
import CustomerSupport from './IMAGES/customersupport.png'
import OwlCarousel from 'react-owl-carousel';
import Footer from './footer.js';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export default function homepagecontent() {
    return (
        <div id="home-content-wrapper">


            {/* -- FIRST SECTION -- */}
            <div id="first-section">
                <img id="first-section-img" src={Mechanic}></img>
                <div id="first-section-content">
                    <h1 id="first-section-header">We value our clients and offer a personal, professional service.</h1>
                    <p id="first-section-text">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet elit. Non quae, fugiat nihil ad. Lorem ipsum dolor sit amet. Lorem ipsum init dolor sit, amet elit. Dolor ipsum non velit, culpa!</p>
                    <a id="first-section-btn">Read our story</a>
                </div>
            </div>

            {/* -- SECOND SECTION -- */}
            <div id="second-section">
                <p className="uppercase">our services</p>
                <h2 id="second-section-header">Great Car Service</h2>
                <div id="card-container">
                    <div id="card-1" className="card">
                        <FaCarAlt id="second-section-car-icon"/>
                        <h2>Tire and wheel</h2>
                        <p class="card-text">Vivamus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis sed et dolor amet.</p>
                        <a className="read-more-btn">Read More <span className="right-arrow" ><FaLongArrowAltRight /></span></a>
                    </div>

                    <div id="card-2" className="card">
                        <FaPlug id="second-section-plug-icon"/>
                        <h2>Electrical system</h2>
                        <p class="card-text">Vivamus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis sed et dolor amet.</p>
                        <a className="read-more-btn">Read More <FaLongArrowAltRight className="right-arrow"  /></a>
                    </div>

                    <div id="card-3" className="card">
                        <FaWrench id="second-section-wrench-icon" />
                        <h2>System service</h2>
                        <p class="card-text">Vivamus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis sed et dolor amet.</p>
                        <a className="read-more-btn">Read More <FaLongArrowAltRight className="right-arrow" /></a>
                    </div>
                </div>
            </div>

            {/* -- THIRD SECTION -- */}
            <div id="third-section">
                <p className="uppercase">our statistics</p>
                <h2 id="third-section-header">Learn about Our Success</h2>
                <div id="info-items-container">
                    <div id="info-item">
                        <FaCarAlt id="third-section-car-icon" />
                        <h2 className="info-header">890+</h2>
                        <p className="info-text">Cars Serviced</p>
                    </div>

                    <div id="info-item">
                        <FaCogs id="third-section-cogs-icon" />
                        <h2 className="info-header">15+</h2>
                        <p className="info-text">Service Stations</p>
                    </div>

                    <div id="info-item">
                        <FaUsers id="third-section-users-icon" />
                        <h2 className="info-header">1200</h2>
                        <p className="info-text">Clients Served</p>
                    </div>

                    <div id="info-item">
                        <FaWrench id="third-section-wrench-icon" />
                        <h2 className="info-header">20+</h2>
                        <p className="info-text">Daily Services</p>
                    </div>
                </div>
            </div>


            {/* -- FOURTH SECTION -- */}
            <div id="fourth-section">
                <p id="fourth-section-subheader" className="uppercase">explore features</p>
                <h2 id="fourth-section-header">Quality and Performance</h2>
                <div id="service-options-container">

                    
                    <div className="service-option-item">
                        <FaCarAlt className="service-icon"/>
                        <div>
                        <h3 className="service-option-header">Brake fluid exchange</h3>
                        <p className="service-option-text">Vivamus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis sed et dolor amet. Non quae, fugiat ad dolor.</p>
                        </div>
                    </div>

                    
                    <div className="service-option-item">
                        <FaPlug className="service-icon"/>
                        <div>
                        <h3 className="service-option-header">Wheel Alignment</h3>
                        <p className="service-option-text">Vivamus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis sed et dolor amet. Non quae, fugiat ad dolor.</p>
                        </div>
                    </div>

                    
                    <div className="service-option-item">
                        <FaWrench className="service-icon"/>
                        <div>
                        <h3 className="service-option-header">Maintenance Packages</h3>
                        <p className="service-option-text">Vivamus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis sed et dolor amet. Non quae, fugiat ad dolor.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* -- FIFTH SECTION -- */}
            <div id="fifth-section">
                <div id="fifth-section-img-container">
                    <img id="first-section-img" src={Lady}></img>
                </div>

                <div id="fifth-section-text-container">
                    <p id="fifth-section-subheader" className="uppercase">why choose us</p>
                    <h1 id="fifth-section-header" >We are Qualified and Professional</h1>
                    <p id="fifth-section-text">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quae, fugiat ad.</p>
                    <ul id="fifth-section-list">
                        <li className="list-item"><span className="bullet">○</span>We are endorsed by the local trading standards office</li>
                        <li className="list-item"><span className="bullet">○</span>All our work has a minimum 12-month guarantee all services </li>
                        <li className="list-item"><span className="bullet">○</span>We are endorsed by the local trading standards office </li>
                    </ul>
                </div>
            </div>


            {/* -- SIXTH SECTION -- */}
            <div id="sixth-section">

                <div id="sixth-section-heading-container">
                    <p id="sixth-section-subheader" className="uppercase">client testimonials</p>
                    <h2 id="sixth-section-header">What our customers are saying</h2>

                </div>

                <div id="sixth-section-content-container">
                <div id="carousel-container">
                    <OwlCarousel className='owl-theme col-lg-8 mb-md-3 mb-sm-5 mb-4' items="2">
                            <div class='item'>
                                <div>
                                    <FaQuoteLeft className="quote-icon" />
                                    <p className="profile-text">Lorem ipsum dolor sit amet int consectetur adipisicing elit. Velita beatae laudantium voluptate rem ullam dolore nisi voluptatibus est quasi, doloribus tempora.</p>
                                </div>
                                <div className="profile-container">
                                    <img className="profile-pic" src={JohnWilson} />
                                    <div className="profile-info">
                                        <h4 className="profile-name">John Wilson</h4>
                                        <h5 className='profile-job'>Web Developer</h5>
                                    </div>
                                </div>
                            </div>
                            <div class='item'>
                                <div>
                                    <FaQuoteLeft className="quote-icon" />
                                    <p className="profile-text">Lorem ipsum dolor sit amet int consectetur adipisicing elit. Velita beatae laudantium voluptate rem ullam dolore nisi voluptatibus est quasi, doloribus tempora.</p>
                                </div>
                                <div className="profile-container">
                                    <img className="profile-pic" src={JohnWilson} />
                                    <div className="profile-info">
                                        <h4 className="profile-name">John Wilson</h4>
                                        <h5 className='profile-job'>Web Developer</h5>
                                    </div>
                                </div>
                            </div>
                            <div class='item'>
                                <div>
                                    <FaQuoteLeft className="quote-icon" />
                                    <p className="profile-text">Lorem ipsum dolor sit amet int consectetur adipisicing elit. Velita beatae laudantium voluptate rem ullam dolore nisi voluptatibus est quasi, doloribus tempora.</p>
                                </div>
                                <div className="profile-container">
                                    <img className="profile-pic" src={JohnWilson} />
                                    <div className="profile-info">
                                        <h4 className="profile-name">John Wilson</h4>
                                        <h5 className='profile-job'>Web Developer</h5>
                                    </div>
                                </div>
                            </div>
                            <div class='item'>
                                <div>
                                    <FaQuoteLeft className="quote-icon"/>
                                    <p className="profile-text">Lorem ipsum dolor sit amet int consectetur adipisicing elit. Velita beatae laudantium voluptate rem ullam dolore nisi voluptatibus est quasi, doloribus tempora.</p>
                                </div>
                                <div className="profile-container">
                                    <img className="profile-pic" src={JohnWilson} />
                                    <div className="profile-info">
                                        <h4 className="profile-name">John Wilson</h4>
                                        <h4 className='profile-job'>Web Developer</h4>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>

            {/* SEVENTH SECTION */}
            <div id="seventh-section-container">
                <p id="seventh-section-subheader" className="uppercase">great car service</p>
                <h2 id="seventh-section-header">Premium car service matched with great workmanship. Best services you can count on </h2>
                <div id="seventh-section-buttons-container">
                    <a id="seventh-get-started">Get Started</a>
                    <a id="seventh-contact-us">Contact Us</a>
                </div>
            </div>

            {/* EIGHTH SECTION */}
            <div id="eighth-section-container">
                <div id="eighth-section-content">
                    <h2 id="eighth-section-header">Book a trusted mechanic</h2>
                    <p id="eighth-section-subheader">Call Us Now</p>
                    <h1 id="phone-number"><FaPhoneAlt id="eighth-section-phone-icon" />+1(12) 366 411 4999</h1>
                    <p id="eighth-section-text">Nam arcu mauris, tincidunt sed convallis non, egestas ut lacus. Cras sapien urna, varius malesuada ut varius consequat, hendrerit nisl. Aliquam, odio none.</p>
                    <div id="eight-section-buttons-container">
                        <a id="eighth-get-started">Get Started</a>
                        <a id="eighth-contact-us">Contact Us</a>
                    </div>
                </div>
                <img id="customer-support" src={CustomerSupport} />
            </div>

            {/* NINTH SECTION */}
            <div id="ninth-section-container">
                <div id="ninth-section-content">
                    <div id="ninth-section-headers">
                        <h2 id="ninth-section-header">Subscribe for Special Offers</h2>
                        <p id="ninth-section-subheader">Get Weekly Newsletters</p>
                    </div>
                    <div id="ninth-section-inputs">
                        <input id="text-input" type="text" placeholder="Enter your email" />
                        <button id="btn" >Subscribe</button>
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}
