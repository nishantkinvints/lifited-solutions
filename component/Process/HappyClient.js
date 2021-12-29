import React, { Component } from 'react'
import Image from 'next/image'
import Slider from "react-slick";

import laptop from '../../assets/image/Prosess/laptop.png'
import slider1 from '../../assets/image/Prosess/slider1.png'



export default class HappyClient extends Component {
    constructor(props) {
      super(props);
      this.state = {
        nav1: null,
        nav2: null
      };
    }
  
    componentDidMount() {
      this.setState({
        nav1: this.slider1,
        nav2: this.slider2
      });
    }

    render() {
        const settings1 = {
            dots: true,
            swipe: true,
            slidesToShow: 1,
            infinite: true,
            arrows: false,
            margin:30,
            vertical: false,
            slidesToScroll: 1,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        dots: true,
                        slidesToScroll: 1,
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        dots: true,
                        slidesToScroll: 1,
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 451,
                    settings: {
                        dots: true,
                        slidesToScroll: 1,
                        slidesToShow: 1,
                    }
                }
            ]
            }
        
        const settings2 = {
            slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                swipe: true,
                infinite: true,
                fade : true,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            vertical: false,
                        }
                    },
                ]
        }
    return (
        <div className="happy_client_section">
            <div className="container">
                <div className="happy_header">
                    <p className="sub_title sub_title_blue wow fadeInUp">PROJECTS</p>
                    <h3 className="section_title wow fadeInUp text_color_white">Happy Clients.</h3>
                </div>

                <div className="happy_slider_block">
                    <div className="slider-gallery">
                        <div className="slider-wrapper two_slides">
                            <div className="gradient_img_block">
                                <Slider className="slider-preview"
                                    asNavFor={this.state.nav2}
                                    ref={slider => (this.slider1 = slider)}
                                    slidesToShow={1}
                                    {...settings2}
                                    >
                                    <div className="type-image">
                                        <Image src={laptop} alt="sliderImage"/>
                                    </div>
                                    <div className="type-image">
                                        <Image src={laptop} alt="sliderImage"/>
                                    </div>
                                    <div className="type-image">
                                        <Image src={laptop} alt="sliderImage"/>
                                    </div>
                                    <div className="type-image">
                                        <Image src={laptop} alt="sliderImage"/>
                                    </div>
                                </Slider>
                            </div>
                            <div className="slide_content_block">
                                <Slider className="slider-thumb" 
                                asNavFor={this.state.nav1}
                                ref={slider => (this.slider2 = slider)}
                                slidesToShow={1}
                                swipeToSlide={true}
                                focusOnSelect={true}
                                {...settings1}>
                                    <div className="type-image">
                                        <div className="slide_content">
                                            <Image src={slider1} className="slider_image" alt="slider1"/>
                                            <h3>Refining the identity of the Realtor Association.</h3>
                                            <a href="#0">
                                                Check it out.
                                                <span>
                                                    <i className="fa fa-long-arrow-right"></i>
                                                </span>
                                            </a>
                                            <div className="slider_subjects">
                                                <p> APPLICATION | UI/UX </p>
                                                <p> WEB DESIGN | BRANDING | STRATEGY </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="type-image">
                                        <div className="slide_content">
                                            <Image src={slider1} className="slider_image" alt="slider1"/>
                                            <h3>Refining the identity of the Realtor Association.</h3>
                                            <a href="#0">
                                                Check it out.
                                                <span>
                                                    <i className="fa fa-long-arrow-right"></i>
                                                </span>
                                            </a>
                                            <div className="slider_subjects">
                                                <p> APPLICATION | UI/UX </p>
                                                <p> WEB DESIGN | BRANDING | STRATEGY </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="type-image">
                                        <div className="slide_content">
                                            <Image src={slider1} className="slider_image" alt="slider1"/>
                                            <h3>Refining the identity of the Realtor Association.</h3>
                                            <a href="#0">
                                                Check it out.
                                                <span>
                                                    <i className="fa fa-long-arrow-right"></i>
                                                </span>
                                            </a>
                                            <div className="slider_subjects">
                                                <p> APPLICATION | UI/UX </p>
                                                <p> WEB DESIGN | BRANDING | STRATEGY </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="type-image">
                                        <div className="slide_content">
                                            <Image src={slider1} className="slider_image" alt="slider1"/>
                                            <h3>Refining the identity of the Realtor Association.</h3>
                                            <a href="#0">
                                                Check it out.
                                                <span>
                                                    <i className="fa fa-long-arrow-right"></i>
                                                </span>
                                            </a>
                                            <div className="slider_subjects">
                                                <p> APPLICATION | UI/UX </p>
                                                <p> WEB DESIGN | BRANDING | STRATEGY </p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="happy_slide_btn blue_btn">
                    <a href="#0" className="wow fadeInUp" >
                        View All Of Our Projects
                    </a>
                </div>

            </div>
        </div>
    )
    }
}

