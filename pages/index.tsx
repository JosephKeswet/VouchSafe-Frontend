import type { NextPage } from 'next'
import { useState } from 'react'
import Footer from '../components/Footer'
import Hero from '../components/landingpage/Hero'
import Middle from '../components/landingpage/Middle'
import Overview from '../components/landingpage/Overview'
import Pricing from '../components/landingpage/Pricing'
import Questions from '../components/landingpage/Questions'
import Navbar from '../components/Navbar'


const Home: NextPage = () => {

  
  return (
    <div className='h-screen snap-y snap-mandatory'>

        <Navbar />
          
       <div id='hero' className='pt-[100px]' > 
          <Hero/>
        </div>
        
        <div id='works'/> 
          <Middle/>

        <div id='use'/>
          <Overview/>
          
        <div id='pricing'/>
          <Pricing/>

          <Questions/>
          <Footer/>
    </div>
  )
}

export default Home
