import React from 'react'
import Image from 'next/image'

import person1 from '../../assets/image/about/person-1.png'
import person2 from '../../assets/image/about/person-2.png'
import person3 from '../../assets/image/about/person-3.png'
import person4 from '../../assets/image/about/person-4.png'
import person5 from '../../assets/image/about/person-5.png'
import person6 from '../../assets/image/about/person-6.png'
import person7 from '../../assets/image/about/person-7.png'
import person9 from '../../assets/image/about/person-9.png'

import person1hover from '../../assets/image/about/candy.png'

const meetOurteamdata = [
    {
        id: 'teamperson1',
        personposition: 'FOUNDER',
        personname: 'Anshul Sharma',
        persondec: 'The Ressilient Genius.',
        persondarkImg: person1,
        personImg: person1,
    },
    {
        id: 'teamperson2',
        personposition: 'CREATIVE DIRECTOR',
        personname: 'Jash Mudhar',
        persondec: 'The Lucky Desperado.',
        persondarkImg: person2,
        personImg: person2,
    },
    {
        id: 'teamperson3',
        personposition: 'HEAD OF GROWTH',
        personname: 'Samantha Huen',
        persondec: 'The Smilin’ Wanderer.',
        persondarkImg: person3,
        personImg: person3,
    },
    {
        id: 'teamperson4',
        personposition: 'LEAD DEVELOPER',
        personname: 'Ahmed Mujtaba',
        persondec: 'The Wizard.',
        persondarkImg: person4,
        personImg: person4,
    },
    {
        id: 'teamperson5',
        personposition: 'DESIGNER',
        personname: 'Candy Choi',
        persondec: 'The Profound Master.',
        persondarkImg: person5,
        personImg: person1hover,
    },
    {
        id: 'teamperson6',
        personposition: 'BACK-END DEVELOPER',
        personname: 'Brendan Wu',
        persondec: 'The Quiet Commander.',
        persondarkImg: person6,
        personImg: person6,
    },
    {
        id: 'teamperson7',
        personposition: 'BACK-END DEVELOPER',
        personname: 'Ghaith Haddad',
        persondec: 'The Ruff Contender.',
        persondarkImg: person7,
        personImg: person7,
    },
    {
        id: 'teamperson8',
        personposition: 'DEVELOPER',
        personname: 'Steven Kampen',
        persondec: 'The Master Overlord.',
        persondarkImg: person7,
        personImg: person7,
    },
    {
        id: 'teamperson9',
        personposition: 'SALES',
        personname: 'Asad Ali',
        persondec: 'The Visual Swami.',
        persondarkImg: person9,
        personImg: person9,
    }
]

const MeetOuteam = () => {
    return (
        <div className="team-members-section common-space-y">
            <div className="container ccontainer">
                <div className="team-members-heading-title ">
                    <p className="sub_title wow fadeInUp">GREAT RESULTS REQUIRE GREAT PEOPLE.</p>
                    <h3 className="section_title wow fadeInUp">Meet Our Team</h3>
                </div>
                <div className="team-members">
                    {
                        meetOurteamdata.map((val, index) => {
                            return(
                                <div className="team-member" key={val.id}>
                                    <div className="team-member_img">
                                        <a href="#0">
                                            <Image src={val.persondarkImg} alt="person"/>
                                            <div  className="hover_img">
                                                <Image src={val.personImg} alt="person"/>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="team-member-detail">
                                        <div className="team-member_designation">
                                            <p className="">{val.personposition}</p>
                                        </div>
                                        <div className="team-member_name ">
                                            <a href="#0" className="text_color_white">{val.personname}</a>
                                        </div>
                                        <div className="team-member_description">
                                            <p className="">{val.persondec}</p>
                                        </div>
                                        <div className="team-member_connect">
                                            <p className="lets-connect-text">{`let's Connect`}</p>
                                            <ul>
                                                <li><a href="#0" className="text_color_white">Fb.</a></li>
                                                <li><a href="#0" className="text_color_white">In.</a></li>
                                                <li><a href="#0" className="text_color_white">Tw.</a></li>
                                                <li><a href="#0" className="text_color_white">Be.</a></li>
                                            </ul>
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

export default MeetOuteam
