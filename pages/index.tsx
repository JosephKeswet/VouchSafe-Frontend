import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Hero from '../components/landingpage/Hero'
import Middle from '../components/landingpage/Middle'
import Overview from '../components/landingpage/Overview'
import Pricing from '../components/landingpage/Pricing'
import Questions from '../components/landingpage/Questions'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  

  return (
    <div className='h-screen snap-y snap-mandatory overflow-scroll'>
       <div className='mb-[155px]'>
          <Navbar/>
       </div>
       <div id='hero'>
          <Hero/>
        </div>
        <div id='works'>
          <Middle/>
        </div>
          <Overview/>
          <Pricing/>
          <Questions/>
          <Footer/>
    </div>
  )
}

export default Home
