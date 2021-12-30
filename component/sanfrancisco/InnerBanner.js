import React from 'react'
import Image from 'next/image'

import bannerlogo from '../../assets/image/San-Francisco/banner-logo.png'

const InnerBanner = () => {
    return (
        <div className="common_inner_page_banner_section">
            <div className="common_inner_page_logo">
                <Image src={bannerlogo} alt="banner logo"/>
            </div>
        </div>
    )
}

export default InnerBanner
