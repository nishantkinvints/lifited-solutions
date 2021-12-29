import React from 'react'
import Image from 'next/image'

import buld from '../../assets/image/Prosess/buld.png'
import designicon from '../../assets/image/Prosess/design_icon.png'
import developicon from '../../assets/image/Prosess/develop_icon.png'
import deployicon from '../../assets/image/Prosess/deploy_icon.png'
import postlaunchicon from '../../assets/image/Prosess/post_launch_icon.png'

const FourFoldApproachData = [
    {
        id: 'approach1',
        approachImg: buld,
        approachTitle: '1. Discover',
        approachDec: 'We meet with your business, clients, future clients to understand goals and requirements. We want to understand what you want to accomplish and why.',
    },
    {
        id: 'approach2',
        approachImg: designicon,
        approachTitle: '2. Design',
        approachDec: 'We design user journeys, tech frameworks, marketing roadmaps, growth strategies, and kick-a$$ creative that ultimately drive results. We re building a data-driven plan and get your feedback on the visual design of it.',
    },
    {
        id: 'approach3',
        approachImg: developicon,
        approachTitle: '3. Develop',
        approachDec: 'We code flawlessly, segment audiences, configure tools and set up accounts for deployment. We re executing on the strategy and design agreed upon.',
    },
    {
        id: 'approach4',
        approachImg: deployicon,
        approachTitle: '4. Deploy',
        approachDec: 'We launch your technology, creative, strategy, marketing, ecommerce ensuring all bugs are accounted for. We give what was promised and ensure our clients our happy.',
    },
    {
        id: 'approach5',
        approachImg: postlaunchicon,
        approachTitle: 'Post-Launch',
        approachDec: 'We code flawlessly, segment audiences, configure tools and set up accounts for deployment. We re executing on the strategy and design agreed upon.',
    },
]

const FourFoldApproach = () => {
    return (
        <div className="four_fold_section">
                <div className="four_fold_header">
                    <div className="container">
                        <div className="four_top">
                            <h3 className="section_title wow fadeInUp">The Four Fold Approach</h3>
                            <p className="wow fadeInUp text_color_white">Get Sh$% Done. That’s part of our mantra. It simply means, do it well and do it fast.
                                All projects go through a 4 step process and here’s what you can expect from us:</p>
                        </div>
                    </div>
                    <div className="four_bottom_block">
                        {
                            FourFoldApproachData.map((val, index) => {
                                return(
                                    <div className= {index % 2 === 0 ? 'four_inner_main image_space' : 'four_inner_main four_bg'} key={val.id}>
                                        <div className="four_block">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-3 col-12 four_columns">
                                                        <div className="discover_image wow fadeInLeft">
                                                            <Image src={val.approachImg} alt="dsad" />
                                                        </div>
                                                    </div>
                                                    <div className={index === 2 ? `col-md-9 col-12 four_columns discover_info_outer flex_order` : `col-md-9 col-12 four_columns discover_info_outer`}>
                                                        <div className="discover_info">
                                                            <h4 className="wow fadeInUp">{val.approachTitle}</h4>
                                                            <div className="base_line">
                                                                <hr />
                                                            </div>
                                                            <p className="wow fadeInUp">{val.approachDec}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                )
                            })
                        }
                    </div>
                </div>  
            </div>
    )
}

export default FourFoldApproach
