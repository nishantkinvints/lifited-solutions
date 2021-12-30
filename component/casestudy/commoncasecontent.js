import React from 'react'
import Image from 'next/image'

import Rectangleleft from '../../assets/image/case-study/Rectangle-left.png'
import Rectangleright from '../../assets/image/case-study/Rectangle-right.png'

const Commoncasecontent = () => {
    return (
        <div className="common_case_content_section the_build_section">
            <div className="container">
                <div className="common_case_details">
                    <p className="common_title_label wow fadeInUp">02. THE BUILD</p>
                    <div className="common_inner_sub_title wow fadeInUp" data-wow-duration="1.5">
                        <h4 className="wow fadeInUp" data-wow-duration="1.5">Whats Under the Hood?</h4>
                    </div>
                    <div className="common_case_desc text_color_white">
                        <p>At the core of Book X-Change is the MEAN stack – a JavaScript software stack for building dynamic web sites and web
                        applications, consisting of MongoDB, Express.js, Angular, and Node.js; the MEAN stack provided a hyper-scalable,
                        efficient, and JavaScript only solution to build Book X-Change from the ground up.</p>
                        <p>With the use of a service-oriented-architecture. We were able to reduce the workload on the client side by pushing all
                        of our application logic to the Node API, not only was this time-efficient, this also allowed for seamless mobile
                        development with NativeScript, a JavaScript mobile framework that retains the speed and functionality of any native
                        application.</p>
                        <p>Book X-Change is secured with a JWT solution. JSON Web Tokens is an industry standard RFC-7519 method for representing
                        claims securely between two parties; protecting the API as well as our users.</p>
                        <p>Book X-Change lives on the cloud. We use AWS EC2 to host the API and AWS S3 for the Angular application and static files
                        such as book images, and profile pictures.</p>
                    </div>
                </div>
                <div className="row two_images">
                    <div className="col-6">
                        <div className="">
                            <a href="#0">
                                <Image src={Rectangleleft} alt="rect"/>
                            </a>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="">
                            <a href="#0">
                                <Image src={Rectangleright} alt="rext"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Commoncasecontent
