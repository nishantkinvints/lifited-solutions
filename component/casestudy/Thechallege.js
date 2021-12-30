import React from 'react'
import Image from 'next/image'

import devices from '../../assets/image/case-study/devices.png'

const Thechallege = () => {
    return (
        <div className="common_the_challege_section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-12 col-lg-6 col-xl-5">
                        <div className="the_challge_content ">
                            <p className="common_title_label">01. DISCOVERY</p>
                            <div className="common_inner_sub_title wow fadeInUp" data-wow-duration="1.5">
                                <h4>The Task at Hand.</h4>
                            </div>
                            <div className="common_desc text_color_white">
                                <p>The process to be able to resell your used textbooks and the act of purchasing used textbooks is broken. It is quite
                                hard for students to maneuver and a simpler way should exist. Many students rely on classNameified sites like kijiji and
                                craigslist and have to meet off campus, with strangers and go out of their way to conduct at often times; a difficult
                                transaction.</p>
                                <p>We have built a university specific web and mobile application that allows students to easily register (restricted to
                                university users), and engage in a secure marketplace with everything you need to buy or sell.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6 col-xl-7 cm_order">
                        <div className="the_challge_image">
                            <Image src={devices} alt="the_challge"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Thechallege

