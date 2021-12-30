import React from 'react'
import Image from 'next/image'

import landing from '../../assets/image/case-study/landing.png'

const BusinessCollection = () => {
    return (
        <div className="common_business_collection">
            <div className="container">
                <div className="business_collection_content">
                    <p className="common_title_label wow fadeInUp" data-wow-duration="1.5">BOOK EXCHANGE WEBSITE HOMEPAGE</p>
                    <div className="business_collection_image">
                        <a href="#0">
                            <Image src={landing} alt="business-collection"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessCollection
