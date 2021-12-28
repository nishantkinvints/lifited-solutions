import React, { useEffect } from 'react'
import Slider from "react-slick";
import Image from 'next/image'
import $ from "jquery";

import Profile_1 from '../../assets/image/home/Profile-1.png'
import Profile_2 from '../../assets/image/home/Profile-2.png'
import Profile_3 from '../../assets/image/home/Profile-3.png'
import Profile_4 from '../../assets/image/home/Profile-4.png'
import clutch from '../../assets/image/home/clutch.png'


const Clients_slider = () => {
    useEffect(() => {
        $(window).on('load resize', function() {
            Left_Pad();
        });
    
        function Left_Pad(){
            var left_pad = $('.our_clients_say_section .container').offset().left;
            var checkWidth = $(window).width();
            
            if( ((checkWidth <= 1215) && (checkWidth >= 1200)) || ((checkWidth >= 0) && (checkWidth <= 575)) ) {
                $('.our_clients_say_section .cm_pad').css({"padding-left" : "12px"})
            }
            else{
                $('.our_clients_say_section .cm_pad').css({"padding-left" : left_pad})
            }
        }
    }, [])

    var settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '100px',
        arrows:false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '10px',
                    dots:true
                }
            }
        ]
    };


    return (
        <div className="our_clients_say_section cm_section_pad">
            <div className="container"></div>
            <div className="cm_pad">
                <div className="our_clients_inner_say_section">
                    <div className="our_expe_wrap">
                        <p className="sub_title sub_title_blue wow fadeInUp">TESTIMONIALS</p>
                        <h2 className="section_title wow fadeInUp">What Our Clients Say.</h2>
                    </div>

                    <div className="our_clients_slider">
                        <Slider {...settings}>
                            <div className="clients_say_wrap">
                                <div className="clients_say_wrap_in">
                                    <div className="profile_dec ">
                                        <h3 className="text_color_white">Rejuvenated Our Identity.</h3>
                                        <p className="text_color_white">“We’ve worked with other agencies before, but when it came to relaunching our website and executing new marketing opportunities, Lifted was the perfect partner.”</p>
                                    </div>
                                    <div className="profile_info">
                                        <div className="profile_img">
                                            <Image src={Profile_1} alt="Profile"/>
                                        </div>
                                        <div className="profile_details">
                                            <h5>Walt B.</h5>
                                            <p>PRESIDENT, SFAR</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="clients_say_wrap">
                                <div className="clients_say_wrap_in">
                                    <div className="profile_dec">
                                        <h3 className="text_color_white">Culturally Relevant.</h3>
                                        <p className="text_color_white">“Anshul and Jash are extensions of our team and we’re happy to be working with them. Not only are they enterprising in nature, but their culturally relevant insights are exactly what my brand stands for”</p>
                                    </div>
                                    <div className="profile_info">
                                        <div className="profile_img">
                                        <Image src={Profile_2} alt="Profile"/>
                                        </div>
                                        <div className="profile_details">
                                            <h5>Walt B.</h5>
                                            <p>PRESIDENT, SFAR</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="clients_say_wrap">
                                <div className="clients_say_wrap_in">
                                    <div className="profile_dec">
                                        <h3 className="text_color_white">Exceptional Work.</h3>
                                        <p className="text_color_white">“We ran over $1M in transactions last month on our Shopify store. Thanks to the exceptional web design work done by the Lifted development team”</p>
                                    </div>
                                    <div className="profile_info">
                                        <div className="profile_img">
                                            <Image src={Profile_3} alt="Profile"/>
                                        </div>
                                        <div className="profile_details">
                                            <h5>Walt B.</h5>
                                            <p>PRESIDENT, SFAR</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="clients_say_wrap">
                                <div className="clients_say_wrap_in">
                                    <div className="profile_dec">
                                        <h3 className="text_color_white">Simply, Amazing.</h3>
                                        <p className="text_color_white">“We’ve worked with other agencies before, but when it came to relaunching our website and executing new marketing opportunities, Lifted was the perfect partner and truly lived up to their “Ascend” slogan. Jash and Sam are extensions of our team, and we’re so happy to be working with them.”</p>
                                    </div>
                                    <div className="profile_info">
                                        <div className="profile_img">
                                            <Image src={Profile_4} alt="Profile"/>
                                        </div>
                                        <div className="profile_details">
                                            <h5>Walt B.</h5>
                                            <p>PRESIDENT, SFAR</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="clients_say_wrap">
                                <div className="clients_say_wrap_in">
                                    <div className="profile_dec ">
                                        <h3 className="text_color_white">Rejuvenated Our Identity.</h3>
                                        <p className="text_color_white">“We’ve worked with other agencies before, but when it came to relaunching our website and executing new marketing opportunities, Lifted was the perfect partner.”</p>
                                    </div>
                                    <div className="profile_info">
                                        <div className="profile_img">
                                            <Image src={Profile_1} alt="Profile"/>
                                        </div>
                                        <div className="profile_details">
                                            <h5>Walt B.</h5>
                                            <p>PRESIDENT, SFAR</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="clients_say_wrap">
                                <div className="clients_say_wrap_in">
                                    <div className="profile_dec">
                                        <h3 className="text_color_white">Culturally Relevant.</h3>
                                        <p className="text_color_white">“Anshul and Jash are extensions of our team and we’re happy to be working with them. Not only are they enterprising in nature, but their culturally relevant insights are exactly what my brand stands for”</p>
                                    </div>
                                    <div className="profile_info">
                                        <div className="profile_img">
                                        <Image src={Profile_2} alt="Profile"/>
                                        </div>
                                        <div className="profile_details">
                                            <h5>Walt B.</h5>
                                            <p>PRESIDENT, SFAR</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="clients_say_wrap">
                                <div className="clients_say_wrap_in">
                                    <div className="profile_dec">
                                        <h3 className="text_color_white">Exceptional Work.</h3>
                                        <p className="text_color_white">“We ran over $1M in transactions last month on our Shopify store. Thanks to the exceptional web design work done by the Lifted development team”</p>
                                    </div>
                                    <div className="profile_info">
                                        <div className="profile_img">
                                            <Image src={Profile_3} alt="Profile"/>
                                        </div>
                                        <div className="profile_details">
                                            <h5>Walt B.</h5>
                                            <p>PRESIDENT, SFAR</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="clients_say_wrap">
                                <div className="clients_say_wrap_in">
                                    <div className="profile_dec">
                                        <h3 className="text_color_white">Simply, Amazing.</h3>
                                        <p className="text_color_white">“We’ve worked with other agencies before, but when it came to relaunching our website and executing new marketing opportunities, Lifted was the perfect partner and truly lived up to their “Ascend” slogan. Jash and Sam are extensions of our team, and we’re so happy to be working with them.”</p>
                                    </div>
                                    <div className="profile_info">
                                        <div className="profile_img">
                                            <Image src={Profile_4} alt="Profile"/>
                                        </div>
                                        <div className="profile_details">
                                            <h5>Walt B.</h5>
                                            <p>PRESIDENT, SFAR</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>

                    <div className="blue_btn text-center btn_desktop clutch_img">
                        <a href="#0">
                            <Image src={clutch} alt="Profile"/>
                            5.0 Clutch Rating
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clients_slider
