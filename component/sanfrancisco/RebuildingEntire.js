import React from 'react'
import Image from 'next/image'

import bulidimg from '../../assets/image/San-Francisco/bulid-img.png'

const RebuildingEntire = () => {
    return (
        <div className="common_rebuilding_entire_section">
            <div className="rebuilding_iamge">
                <Image src={bulidimg} alt="Bulid"/>
            </div>
            <div className="rebuilding_content">
                <div className="container">
                    <div className="rebuilding_details_block">
                        <p className="common_title_label">02. THE SOLUTION</p>
                        <div className="common_inner_sub_title wow fadeInUp" data-wow-duration="1.5">
                            <h4>Rebuilding an Entire Infrastructure.</h4>
                        </div>
                        <div className="common_desc text_color_white">
                            <p>The initial thought process going into this project was to figure out a way to keep their infrastructure intact while revamping the key components of the site, such as a homepage that details other aspects of the site, an updated calendar module for upcoming events, staff and associated partners information and better realized news and media page.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RebuildingEntire
