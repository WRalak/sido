import React from 'react'
import Hero from './components/Hero'
import Logo from './components/Logo'
import CaseStudies from './components/CaseStudies'
import Experiences from './components/Experiences'

const home = () => {
  return (
    <div>
      <Hero/>
      <CaseStudies/>
      <Experiences/>
      <Logo/>
      
    </div>
  )
}

export default home