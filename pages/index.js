import Head from 'next/head'
import Header from '../component/home/Header'
import Homebanner from '../component/home/Homebanner'


export default function Home() {
  return (
    <div className="main-wrapper">
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header/>
        <div className='main-contain'>
            <Homebanner />
        </div>
    </div>
  )
}
