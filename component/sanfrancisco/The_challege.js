import React from 'react'
import Image from 'next/image'

import challenge from '../../assets/image/San-Francisco/challenge-img-2.png'

const The_challege = () => {
    return (
        <div className="common_the_challege_section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 ">
                        <div className="the_challge_image redefining_iamge">
                            <Image src={challenge} alt="the_challge"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="the_challge_content redefining_ml">
                            <p className="common_title_label">01. THE CHALLENGE</p>
                            <div className="common_inner_sub_title wow fadeInUp" data-wow-duration="1.5">
                                <h4>Redefining A 4000 Member Community</h4>
                            </div>
                            <div className="common_desc text_color_white">
                                <p>The San Francisco Association of Realtors® (SFAR) approached Lifted Solutions to re-design and code their outdated, cluttered web presence. In addition to providing a clean, streamlined, and easy-to-use experience, Lifted Solutions consolidated decades of information to make them more easily accessible for members.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default The_challege
