import React, { useEffect } from 'react'
import Head from 'next/head'
import Header from '../component/home/Header'
import Footer from '../component/home/Footer'
import Loader from '../component/home/Loader'

import Innerbanner from '../component/casestudy/Innerbanner'
import CaseContain from '../component/casestudy/CaseContain'
import Platformsection from '../component/casestudy/Platformsection'
import Thechallege from '../component/casestudy/Thechallege'
import Thesolution from '../component/casestudy/Thesolution'
import Commoncasecontent from '../component/casestudy/Commoncasecontent'
import Experience from '../component/casestudy/Experience'
import BusinessCollection from '../component/casestudy/BusinessCollection'
import The_solution from '../component/casestudy/The_solution'
import The_brand from '../component/casestudy/The_brand'
import Ctaouter from '../component/casestudy/Ctaouter'

export default function Home() {
    useEffect(() => {
        
    }, [])
  return (
    <div className="main-wrapper common_inner_page case_study_page">
        <Head>
            <title>Case study</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.png" />
        </Head>

        <Loader/>
        <Header/>
        <div className='main-contain'>
            <Innerbanner />
            <CaseContain />
            <Platformsection />
            <Thechallege />
            <Thesolution />
            <Commoncasecontent />
            <Experience />
            <BusinessCollection />
            <The_solution />
            <The_brand />
            <Ctaouter />
        </div>
        <Footer />
    </div>
  )
}
