import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SiteNavbar from './components/SiteNavbar'
import Home from './components/Home'


//space stuff
import BodiesIndex from './components/info/AllBodies/BodiesIndex'
import PlanetsIndex from './components/info/AllPlanets/PlanetsIndex'
import PlanetSingle from './components/info/AllPlanets/planetSingle'


const App = () => {
  return (
    <BrowserRouter>
      <SiteNavbar />
      <div className="site-wrapper">
        <Routes>
          <Route path='planets/:planetId' element={<PlanetSingle />} />
          <Route path="planets" element={<PlanetsIndex />} />
          <Route path="bodiesindex" element={<BodiesIndex />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
