import React from 'react'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import Liked from './pages/Liked'
import Artists from './pages/Artists'
import Discover from './pages/Discover'
import { Routes, Route } from "react-router-dom"
import BottomNav from './Components/BottomNav'
import Search from './Components/Search'
import PlayerBar from './Components/PlayerBar'
import { useState } from 'react'
import tracks from './data/track'

const App = () => {
  const [currentTrack, setCurrentTrack] = useState(tracks[0])
const [isPlaying, setIsPlaying] = useState(false)

  return (
   <div className="bg-[#0e0e0e] min-h-screen">

  <Navbar />

  <div className=' px-4 font-sans'>
    <Routes>
      <Route path="/" element={<Home    setCurrentTrack={setCurrentTrack}
  setIsPlaying={setIsPlaying}/>} />


      <Route path="/discover" element={<Discover setCurrentTrack={setCurrentTrack}
  setIsPlaying={setIsPlaying}/>} />


      <Route path="/liked" element={<Liked />} />
      <Route path="/artists" element={<Artists />} />
      <Route path="/search" element={<Search />} />
    </Routes>

<PlayerBar
  currentTrack={currentTrack}
  setCurrentTrack={setCurrentTrack}
  isPlaying={isPlaying}
  setIsPlaying={setIsPlaying}
/>

  </div>
 
  <BottomNav />

</div>
  )
}

export default App
