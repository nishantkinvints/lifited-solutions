import React from 'react'
import Image from 'next/image'

import styleSvg from '../../assets/image/about/beginnigs-paper.png'

const Ourbeginnings = () => {
    return (
        <div className="our-beginnings-section common-space-y">
            <div className="container ccontainer">
                <div className="our-beginnings-inner">
                    <div className="our-beginnings-text">
                        <p className="sub_title sub_title_blue wow fadeInUp">OUR BEGINNINGS.</p>
                        <h2 className="section_title wow fadeInUp">What Got Us Started</h2>
                            <p className="sub_text wow fadeInUp">We realized that early stage entrepreneurs lacked access to higher level
                                strategy and quality digital work. The agency model is broken and often unable to assist with
                                the business strategy that precedes design and coding. (How often have you hired a development
                                firm only to realize that’s ALL that they do?!) We help launch, scale and accelerate businesses
                                of all sizes, industries, and revenue models. </p>
                    </div>
                    <div className="our-beginnings-img">
                        <Image src={styleSvg} alt="beginnigs paper"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ourbeginnings
