import React from 'react'
import Hero from './components/Hero'
import Logo from './components/Logo'
import CaseStudies from './components/CaseStudies'
import Experiences from './components/Experiences'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const home = () => {
  return (
    <div>
       <Navbar />
      <Hero/>
      <CaseStudies/>
      <Experiences/>
      <Logo/>
      <Footer/>
      
      
    </div>
  )
}

export default home