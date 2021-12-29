import Head from 'next/head'
import Header from '../component/home/Header'
import Homebanner from '../component/home/Homebanner'
import Whatwestrive from '../component/home/Whatwestrive'
import OurExpertise from '../component/home/OurExpertise'
import Project from '../component/home/Project'
import GrowLifited from '../component/home/GrowLifited'
import Clients_slider from '../component/home/Clients_slider'
import Checkoutblog from '../component/home/Checkoutblog'
import Footer from '../component/home/Footer'
import Loader from '../component/home/Loader'

export default function Home() {
  return (
    <div className="main-wrapper">
        <Head>
            <title>index</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.png" />
        </Head>

        <Loader/>
        <Header/>
        <div className='main-contain'>

            <Homebanner />
            <Whatwestrive />
            <OurExpertise />
            <Project />
            <GrowLifited />
            <Clients_slider />
            <Checkoutblog />
        </div>
        <Footer />
    </div>
  )
}
