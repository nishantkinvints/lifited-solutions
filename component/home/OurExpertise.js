import React from 'react'

var OurexpertiseData = [
    {   
        Ourexperticategory : 'Technology',
        id : 'OurexpertiseData1',
        expertiseList : ['System Architecture', 'Tailored Web Applications', 'Mobile App Development' ,'Custom Web Development', 'CMS Development', 'Performance Optimization'],
        services : "Technology Services" ,
    },
    {   
        Ourexperticategory : 'Creative',
        id : 'OurexpertiseData2',
        expertiseList : ['U/UX Design', 'Logo + Brand', 'Brand Strategy, Guidelines User', 'Flows + Prototypes', 'Marketing Collateral', 'Photography + Video'],
        services : "Creative Services" ,
    },
    {   
        Ourexperticategory : 'Strategys',
        id : 'OurexpertiseData3',
        expertiseList : ['Business Growth Strategy', 'Conversion Path Analysis', 'Conversion Path Analysis' ,'Conversion Optimization', 'Marketing Funnels', 'Business Roadmap'],
        services : "Strategy Services" ,
    },
    {   
        Ourexperticategory : 'eCommerce',
        id : 'OurexpertiseData4',
        expertiseList : ['Shopify Store Front', 'Custom Shopify Applications', 'Overall Product Management' ,'Conversion Optimization', 'Integrated Marketing Funnels', 'Advanced Analytics'],
        services : "eCommerce Services" ,
    },
    {   
        Ourexperticategory : 'Marketing',
        id : 'OurexpertiseData5',
        expertiseList : ['Social Media Advertising', 'Google Advertising', 'Advanced Analytics' ,'Content Publishing Packages', 'Community Management', 'Influencer Marketing'],
        services : "Marketing Services",
    }
]

const OurExpertise = () => {
    return (
        <div className="our_expe_section">
                <div className="container">
                    <div className="our_expe_inner_section">
                        <div className="text-center our_expe_wrap">
                            <p className="sub_title sub_title_blue wow fadeInUp">SERVICES</p>
                            <h2 className="section_title wow fadeInUp">Our Expertise at a Glance.</h2>
                        </div>
                        <div className="row">
                            {
                                OurexpertiseData.map((val) => {
                                    return(
                                        <div className="col-lg-4 col-md-6 wpb_wrapper" key={val.id}>
                                            <div className="strategy-sec wow zoomIn">
                                                <h3>{val.Ourexperticategory}</h3>
                                                    <ul>
                                                        {
                                                            val.expertiseList.map((innerval, index) => {
                                                                return(
                                                                        <li key={'list' + index}>{innerval}</li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                <p>
                                                    <a className="text-btn" href="#0">{val.services} <i className="fa fa-long-arrow-right"></i></a>
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className="col-lg-4 col-md-6 wpb_wrapper">
                                <div className="strategy-sec inner-strategy-sec wow zoomIn">
                                    <h3>Dont’ See<br />
                                    What You’re<br />
                                    Looking For?</h3>
                                    <p>
                                        <a className="grtin-btn inner-strategy-sec-btn" href="#0" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <span className="get-in-btn">Get in Touch
                                                <i className="fa fa-long-arrow-right"></i>
                                            </span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default OurExpertise
