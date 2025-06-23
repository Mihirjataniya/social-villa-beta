import React from 'react'
import ServicesSection from '../components/Services'
import Home from '../components/Home'
import Introduction from '../components/Introduction'
import Comparison from '../components/Comparision'
import Testimonials from '../components/Testimonials'
import ProjectSection from '../components/Projects'
import DoubleMarquee from '../components/DoubleMarqee'
import Home2 from '../components/Home2'

const Landing = () => {
  return (
    <div>
      {/* <Home /> */}
      <Home2 />
      <DoubleMarquee />
      <Introduction />
      <ServicesSection />
      <ProjectSection />
      <Comparison />
      <Testimonials />
    </div>
  )
}

export default Landing
