import React from 'react'
import Image from 'next/image'

import photo2 from '../../assets/image/case-study/photo-2.png'

const The_solution = () => {
    return (
        <div className="common_the_solution_section">
            <div className="the_solution_image">
                <Image src={photo2} alt="approach-img"/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7"></div>
                    <div className="col-lg-5">
                        <div className="the_challge_content the_solution_content">
                            <p className="common_title_label">04. THE OUTCOME</p>
                            <div className="common_inner_sub_title wow fadeInUp" data-wow-duration="1.5">
                                <h4>Deployment</h4>
                            </div>
                            <div className="common_desc text_color_white">
                                <p>A solution so simple and beautiful to use that students were raving about how simple it was to now buy or sell their
                                book. We are still working on what else users would like, but our beta test was quite successful.</p>
                                <p>We are looking to launch our first solid iteration on February 2020 and then draft for other schools starting in Q2.</p>
                            </div>
                            <div className=""></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default The_solution
