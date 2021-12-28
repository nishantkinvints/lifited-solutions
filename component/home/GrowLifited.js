import React from 'react'
import Image from 'next/image'

import rocket from '../../assets/image/home/rocket.png'
import footer_circle from '../../assets/image/Prosess/footer_circle.svg'

const GrowLifited = () => {
    return (
        <div className="grow_with_section">
            <div className="container">
                <div className="grow_with_inner_section">
                    <div className="grow_with_left_info">
                        <p className="grow_sub_text wow fadeInUp">lOOKING FOR THE RIGHT CONSULTING AGENCY?</p>
                        <h2 className="grow_sub_title wow fadeInUp">Grow With Lifted.</h2>
                        <a className="grtin-btn" href="#0">
                            <span className="get-in-btn">Let’s Talk
                                <i className="fa fa-long-arrow-right"></i>
                            </span>
                        </a>
                    </div>
                    <div className="grow_img">
                        <Image src={rocket} alt="rocket"/>
                    </div>
                </div>
            </div>

            <div className="grow_circle">
                <Image src={footer_circle} alt="footer circle"/>
            </div>
        </div>
    )
}

export default GrowLifited
