import React from 'react'
import Image from 'next/image'

import logo from '../../assets/image/Lifted-Solutions-Logo.svg'

const Header = () => {
    return (
        <div className="main-header">
            <div className="container">
                <div className="header-wrapper">
                    <header>
                        <div className="menu-main">
                            <a href="#">
                                <Image src={logo} className="logo_img" alt="logo"/>
                            </a>
                        </div>
                        <div className="menu">
                            <ul className="menu_inner">
                                <li className="last">
                                    <a href="about.html" className="menu_text">
                                        <span className="anim">About</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#0" className="menu_text">
                                        <span className="anim">Services</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="process.html" className="menu_text">
                                        <span className="anim">Process</span> 
                                    </a>                         
                                </li>   
                                <li>
                                    <a href="project.html" className="menu_text">
                                        <span className="anim">Projects</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#0" className="menu_text">
                                        <span className="anim">Insights</span>
                                    </a>
                                </li>
                                <li className="header_main_li">
                                    <a href="#0" className="header_btn">
                                        <span className="anim"><span className="anim">FREE </span> CONSULTATION</span>
                                    </a>
                                </li>
                                <li>
                                    <div className="switch">
                                        <input id="themeSwitch" className="switch__input themeSwitch" type="checkbox" />
                                        <label className="switch__label" forHtml="themeSwitch" >On</label>
                                        <div className="switch__marker" aria-hidden="true"></div>
                                    </div>
                                </li>

                                <li className="close_wrap">
                                    <div id="toggle" className="on toggle close_toggle">
                                        <div className="one"></div>
                                        <div className="two"></div>
                                        <div className="three"></div>
                                    </div>
                                </li>
                            </ul>

                        </div>
                        <div id="toggle" className="toggle main_toggle">
                            <div className="one"></div>
                            <div className="two"></div>
                            <div className="three"></div>
                        </div>
                    </header>
                </div>
            </div>
        </div>
    )
}

export default Header