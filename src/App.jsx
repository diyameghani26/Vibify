import React from 'react'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import Liked from './pages/Liked'
import Artists from './pages/Artists'
import Discover from './pages/Discover'
import { Routes, Route } from "react-router-dom"
import BottomNav from './Components/BottomNav'
import Search from './Components/Search'

const App = () => {
  return (
    <div className="bg-[#0e0e0e] min-h-screen">
    <Navbar/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/liked" element={<Liked />} />
         <Route path="/artists" element={<Artists />} />
         <Route path="/search" element={<Search />} />
      </Routes>
      <BottomNav/>
    </div>
  )
}

export default App
