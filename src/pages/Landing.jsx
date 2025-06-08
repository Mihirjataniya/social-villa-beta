import React from 'react'
import ServicesSection from '../components/Services'
import Home from '../components/Home'
import Introduction from '../components/Introduction'
import Comparison from '../components/Comparision'
import Testimonials from '../components/Testimonials'
import ProjectSection from '../components/Projects'
import DoubleMarquee from '../components/DoubleMarqee'

const Landing = () => {
  return (
    <div>
      <Home />
      <DoubleMarquee />
      <Introduction />
      <ServicesSection />
      <Comparison />
      <Testimonials />
      <ProjectSection />
    </div>
  )
}

export default Landing
