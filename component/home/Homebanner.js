import React from 'react'

import styleSvg from '../../assets/image/home/Style.svg'
import sliderImg1 from '../../assets/image/home/slider-img-1.svg'
import sliderImg2 from '../../assets/image/home/slider-img-2.svg'
import mountain from '../../assets/image/home/mountain.svg'

const Homebanner = () => {
    return (
        <div className="home_banner_section_pad">
            <div className="home_banner_section">
                <div className="container">
                    <div className="home_banner_inner_section">
                        <span className="wow fadeInUp" data-wow-delay="2.4s">TIME TO SCALE</span>
                        <h1 className="wow fadeInUp" data-wow-delay="2.4s">Elevate Your Business <br />
                            To The Next Level.</h1>
                        <p className="wow fadeInUp" data-wow-delay="2.4s">Mobile Apps, Website Design, Shopify Stores, Digital Marketing, Growth Strategy. Accelerate your business growth with our proven, results focused approach.</p>
                        <a className="grtin-btn" href="#0" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <span className="get-in-btn">Let’s Grow
                                <i className="fa fa-long-arrow-right"></i>
                            </span>
                        </a>
                    </div>
                </div>

                <div className="background_circle animation">
                    <img src={styleSvg} alt="mountain" />
                </div>
                <div className="background_circle_2 animation">
                    <img src={sliderImg1} alt="mountain" />
                </div>
                <div className="background_circle_3 animation">
                    <img src={sliderImg2} alt="mountain" />
                </div>
                <div className="background-image">
                    <img src={mountain} alt="mountain" />
                </div>
            </div>
        </div>
    )
}

export default Homebanner
