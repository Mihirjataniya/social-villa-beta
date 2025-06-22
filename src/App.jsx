import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrimaryLayout from './layouts/Primarylayout'
import Landing from './pages/Landing'
import PortfolioPage from './pages/Portfolio'
import AboutPage from './pages/Aboutus'
import ContactPage from './pages/ContactUs'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PrimaryLayout />}>
          <Route path={'/'} element={<Landing />} />
          <Route path={'/portfolio'} element={<PortfolioPage />} />
          <Route path={'/about-us'} element={<AboutPage />} />
          <Route path={'/contact-us'} element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
