import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrimaryLayout from './layouts/Primarylayout'
import Landing from './pages/Landing'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PrimaryLayout />}>
          <Route path={'/'} element={<Landing />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
