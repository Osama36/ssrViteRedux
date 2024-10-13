import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SectorPage from './pages/SectorPage'

function App({ serverData }) {
  return (
    <Routes>
      <Route path="/" element={<Home serverData={serverData} />} />
      <Route path="/about" element={<About />} />
      <Route path="/:sector/:subSector" element={<SectorPage serverData={serverData}/>} />
      {/* <Route path='/:sector/:subSector' element={<SectorPage serverData={serverData}/>} /> */}
    </Routes>
  )
}

export default App