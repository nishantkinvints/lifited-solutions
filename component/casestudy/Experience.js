import React from 'react'
import Image from 'next/image'

import book from '../../assets/image/case-study/book.png'

const Experience = () => {
    return (
        <div className="common_the_challege_section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="the_challge_content">
                            <p className="common_title_label">03. THE VISUALS</p>
                            <div className="common_inner_sub_title wow fadeInUp max_width" data-wow-duration="1.5">
                                <h4>User Experience &amp; Interface Design</h4>
                            </div>
                            <div className="common_desc max_w text_color_white">
                                <p>Since the application is in partnership with York University we decided to implement the colors that represent the
                                school, and utilizing secondary palettes of dark greys to a bright white. We wanted to make the visual interface
                                appealing and easy to use, that way students can easily access the books that they require.</p>
                                <p>Screen mockups were initially built and put through a wireframe system rounding up to 50+ screens thus allowing a
                                complete and thorough user experience.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 cm_order order_pos">
                        <div className="the_challge_image image_wi">
                            <a href="#0">
                                <Image src={book} alt="the_challge"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
