import React from 'react'
import Image from 'next/image'

import denim from '../../assets/image/case-study/denim.png'

const The_brand = () => {
    return (
        <div className="common_the_brand_section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="the_challge_content">
                            <p className="common_title_label">05. THE FUTURE</p>
                            <div className="common_inner_sub_title wow fadeInUp" data-wow-duration="1.5">
                                <h4>Post Launch.</h4>
                            </div>
                            <div className="common_desc max_width_content text_color_white">
                                <p>It is a certain point that many people reach a logical conclusion that their website needs a fresh start to get off the
                                ground. In this growing age of technology looking up a company’s website has become a norm, which is way of
                                communication in making the right impression and giving visitors a reason to comeback. With SFAR it was only right that
                                we implement a refresh to the company’s site and keeping up with the change in technology</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 cm_order">
                        <div className="the_brand_image">
                            <Image src={denim} alt="the_challge"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default The_brand
