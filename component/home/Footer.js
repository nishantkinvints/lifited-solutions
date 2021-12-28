import React from 'react'

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <footer>
                <div className="top-footer">
                    <div className="container">
                        <div className="top-inner-footer">
                            <div className="footer-inner">
                                <div className="f-block office-block">
                                    <h4>Office</h4>
                                    <p>4230 Sherwoodetown Blvd,<br />Mississauga, ON L6H 6P5</p>
                                </div>
                                <div className="f-block chat-block">
                                    <h4>Let’s Chat</h4>
                                    <div className="call-mail">   
                                        <a href="tel:6473892695">647-389-2695</a><br />
                                        <a href="mailto:team@liftedsolutions.com">team@liftedsolutions.com</a>
                                    </div>  
                                </div>
                                <div className="f-block carrer-block">
                                    <h4>Career Opportunities</h4>
                                    <a href="mailto:team@liftedsolutions.com">team@liftedsolutions.com</a>
                                </div>
                            </div>
                            <div className="site-map-block">
                                <h4>Site Map</h4>
                                <ul>
                                    <li> <a href="about.html"> ABOUT </a> </li>
                                    <li> <a href=""> SERVICES </a> </li>
                                    <li> <a href="process.html"> PROCESS </a> </li>
                                    <li> <a href="project.html"> PROJECTS </a> </li>
                                    <li> <a href=""> INSIGHTS </a> </li>
                                </ul>   
                            </div>
                        </div>
                    </div>
                </div>  
                <div className="bottom-footer">
                    <div className="container">
                        <div className="bottom-footer-inner">
                            <ul>    
                                <li className="reserved-text">2020 Lifted Solutions Inc. All Rights Reserved.</li>
                                <li><a href="#1">Terms &amp; Conditions</a></li>
                                <li className="privacy-policy"><a href="#1">Privacy Policy</a></li>
                                <li><a href="#1"><span className="desktop-version">Desktop Version</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>          
            </footer>
        </div>
    )
}

export default Footer
