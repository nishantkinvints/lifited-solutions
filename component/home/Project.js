import React from 'react'
import Image from 'next/image'

import nproject_anner_1 from '../../assets/image/home/nproject-anner-1.png'
import nproject_anner_2 from '../../assets/image/home/nproject-anner-2.png'
import nproject_anner_3 from '../../assets/image/home/nproject-anner-3.png'
import nproject_anner_4 from '../../assets/image/home/nproject-anner-4.png'

import project_ogo_1 from '../../assets/image/home/project_ogo_1.png'
import project_ogo_2 from '../../assets/image/home/project_ogo_2.png'
import project_ogo_3 from '../../assets/image/home/project_ogo_3.png'
import project_ogo_4 from '../../assets/image/home/project_ogo_4.png'


const Project = () => {
    return (
        <div className="projects_section cm_section_pad">
            <div className="container">
                <div className="projects_inner_section">
                    <div className="text-center our_expe_wrap">
                        <p className="sub_title sub_title_pink wow fadeInUp">PROJECTS</p>
                        <h2 className="section_title wow fadeInUp">A Collection <br /> of our Latest Projects.</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6 project_pad">
                            <div className="cm_project_box_1">
                                <div className="cm_project_box">
                                    <div className="cm_hide_contain">
                                        <p>Digitally Upgrading <br />
                                            A Community of <br />
                                            4000+ Users</p>
                                    </div>
                                    <div className="projects_img">
                                        <Image src={nproject_anner_1} alt="banner"/>
                                    </div>
                                    <div className="project_info">
                                        <div className="project_logo_img">
                                            <Image src={project_ogo_1} alt="project img"/>
                                        </div>
                                        <ul className="pj_link_list pj_link_list_1">
                                            <li>
                                                <a href="#0">WEB DESIGN</a>
                                            </li>
                                            <li>
                                                <a href="#0">CMS</a>
                                            </li>
                                            <li>
                                                <a href="#0">UI/UX</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 project_pad">
                            <div className="cm_project_box_2">
                                <div className="cm_project_box">
                                    <div className="cm_hide_contain">
                                        <p>Building the <br />
                                            Future of Retail</p>
                                    </div>
                                    <div className="project_info">
                                        <div className="project_logo_img">
                                            <Image src={project_ogo_2} alt="project img"/>
                                        </div>
                                        <ul className="pj_link_list pj_link_list_2 pj_link_list_end">
                                            <li>
                                                <a href="#0">APPLICATION</a>
                                            </li>
                                            <li>
                                                <a href="#0">BRANDING</a>
                                            </li>
                                            <li>
                                                <a href="#0">ECOMMERCE</a>
                                            </li>
                                            <li>
                                                <a href="#0">UI/UX</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="projects_img">
                                        <Image src={nproject_anner_2} alt="banner"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 project_pad">
                            <div className="cm_project_box_3">
                                <div className="cm_project_box">
                                    <div className="cm_hide_contain">
                                        <p>Simplifying the <br />
                                            Student Life.</p>
                                    </div>
                                    <div className="project_info">
                                        <div className="project_logo_img">
                                            <Image src={nproject_anner_3} alt="banner"/>
                                        </div>
                                        <ul className="pj_link_list pj_link_list_3">
                                            <li>
                                                <a href="#0">APPLICATION</a>
                                            </li>
                                            <li>
                                                <a href="#0">BRANDING</a>
                                            </li>
                                            <li>
                                                <a href="#0">UI/UX</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="projects_img">
                                        <Image src={project_ogo_3} alt="project img"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 project_pad">
                            <div className="cm_project_box_4">
                                <div className="cm_project_box">
                                    <div className="cm_hide_contain">
                                        <p>The World’s <br />
                                            Strongest <br />
                                            Sheer Knit</p>
                                    </div>
                                    <div className="projects_img">
                                        <Image src={nproject_anner_4} alt="banner"/>
                                    </div>
                                    <div className="project_info">
                                        <div className="project_logo_img">
                                            <Image src={project_ogo_4} alt="project img"/>
                                        </div>
                                        <ul className="pj_link_list pj_link_list_4 pj_link_list_start">
                                            <li>
                                                <a href="#0">APPLICATION</a>
                                            </li>
                                            <li>
                                                <a href="#0">BRANDING</a>
                                            </li>
                                            <li>
                                                <a href="#0">ECOMMERCE</a>
                                            </li>
                                            <li>
                                                <a href="#0">UI/UX</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="see_more">
                        <a href="#0" className="text_color_white">
                            See more of our work
                            <i className="fa fa-long-arrow-right anim"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
