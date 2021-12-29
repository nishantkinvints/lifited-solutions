import React from 'react'
import Image from 'next/image'

import googlepartner from '../../assets/image/about/google-partner.png'
import shopifypartners from '../../assets/image/about/shopify-partners.png'
import hubspotgold from '../../assets/image/about/hubspot-gold.png'

const Partners = () => {
    return (
        <div className="partners_section">
                <div className="container">
                    <div className="partner_block">
                        <div className="partner_title">
                            <p className="text-center sub_title sub_title_blue wow fadeInUp">PARTNERSHIPS</p>
                        </div>
                        <div className="row wow fadeInUp">
                            <div className="col-lg-4 col-12 col-md-4 partner_img_col">
                                <div className="partner_image">
                                    <a href="#0">
                                        <Image src={googlepartner} alt="google-partner"/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12 col-md-4 partner_img_col">
                                <div className="partner_image partner_small_img">
                                    <a href="#0">
                                        <Image src={shopifypartners} alt="shopify-partners"/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12 col-md-4 partner_img_col">
                                <div className="partner_image">
                                    <a href="#0">
                                        <Image src={hubspotgold} alt="hubspot-gold"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Partners
