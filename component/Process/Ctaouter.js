import React from 'react'
import Image from 'next/image'

import piggi from '../../assets/image/Prosess/piggi.png'

const Ctaouter = () => {
    return (
        <div className="cta_outer">
            <div className="cta_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="piggi_image wow fadeInUp">
                                <Image src={piggi} alt="piggi"/>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="cta_info">
                                <p className="wow fadeInUp">LOW-RISK &amp; HIGH PAYOUTS</p>
                                <h3 className="wow fadeInUp">A Great Investment
                                Opportunity Awaits You.</h3>
                                <div className="cta_btn ctn_desktop_btn">
                                    <a className="grtin-btn" href="#0" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        <span className="get-in-btn">Lets Talk
                                            <i className="fa fa-long-arrow-right"></i>
                                        </span>
                                    </a>
                                </div>
                                <div className="cta_btn mobile_btn">
                                    <a className="grtin-btn" href="#0" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        <span className="get-in-btn">Get in Touch
                                            <i className="fa fa-long-arrow-right"></i>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ctaouter
