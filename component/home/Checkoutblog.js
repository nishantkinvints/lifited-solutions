import React from 'react'
import Image from 'next/image'

import checkout_1 from '../../assets/image/home/checkout_1.png'
import checkout_2 from '../../assets/image/home/checkout_2.png'
import checkout_3 from '../../assets/image/home/checkout_3.png'

let CheckoutblogData = [
    {
        id: "checkoutdata1",
        title: "How To Find The Right Growth Partners.",
        image: checkout_1,
        decription: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore."
    },
    {
        id: "checkoutdata2",
        title: "How To Find The Right Growth Partners.",
        image: checkout_2,
        decription: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore."
    },
    {
        id: "checkoutdata3",
        title: "How To Find The Right Growth Partners.",
        image: checkout_3,
        decription: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore."
    },
]

const Checkoutblog = () => {
    return (
        <div className="check_out_section cm_section_pad">
            <div className="container">
                <div className="check_out_inner">
                    <div className="text-center our_expe_wrap">
                        <p className="sub_title sub_title_pink wow fadeInUp">INSIGHTS</p>
                        <h2 className="section_title wow fadeInUp">Check Out Some of Our Latest Blog Entries.</h2>
                    </div>
                    <div className="row">
                        {
                            CheckoutblogData.map((val) => {
                                return(
                                    <div className="col-lg-4 col-md-6 wpb_wrapper" key={val.id}>
                                        <div className="check_out_single">
                                            <a href="#0" className="check_out_image">
                                                <Image src={val.image} alt="checkout"/>
                                            </a>
                                            <div className="check_out_desc">
                                                <h3>{val.title}</h3>
                                                <p className="lorem_text">{val.decription}</p>
                                                <p>
                                                    <a className="text-btn" href="#0">Read More <i className="fa fa-long-arrow-right anim"></i></a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="more_links">
                        <a href="#0">
                            Check out some more readings
                            <i className="fa fa-long-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkoutblog
