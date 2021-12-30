import React from 'react'
import Image from 'next/image'

import photo1 from '../../assets/image/case-study/photo-1.png'

const Thesolution = () => {
    return (
        <div className="common_the_solution_section">
            <div className="the_solution_image">
                <a href="#0">
                    <Image src={photo1} alt="approach-img"/>
                </a>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7"></div>
                    <div className="col-lg-5">
                        <div className="the_challge_content the_solution_content">
                            <div className="common_inner_sub_title wow fadeInUp" data-wow-duration="1.5">
                                <h2>Driving Design to Delivery.</h2>
                            </div>
                            <div className="common_desc text_color_white">
                                <p>The initial thought process going into this project was to figure out a way to keep their infrastructure intact while
                                revamping the key components of the site, such as a homepage that details other aspects of the site, an updated calendar
                                module for upcoming events, staff and associated partners information and better realized news and media page.</p>
                            </div>
                            <div className=""></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Thesolution
