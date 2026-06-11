import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import Liked from './pages/Liked'
import Artists from './pages/Artists'
import Discover from './pages/Discover'
import { Routes, Route } from "react-router-dom"
import BottomNav from './Components/BottomNav'
import Search from './Components/Search'
import PlayerBar from './Components/PlayerBar'
import { useState} from 'react'
import tracks from './data/track'
import ArtistsDetail from './pages/ArtistsDetail'
import SplashScreen from './Components/SplashScreen'
import Profile from './pages/profile'
import ProfileDetail from "./pages/ProfileDetail"

const App = () => {

   const [searchQuery, setSearchQuery] = useState('')
  const [showSplash, setShowSplash] = useState( true);
const [showBeats] = useState(true);

const [allTracks, setAllTracks] = useState(() => {
  try {
    const savedTracks = localStorage.getItem("likedTracks")
    
    return savedTracks ? JSON.parse(savedTracks) : tracks
  } catch {
    return tracks
  }
})
  
  const [currentTrack, setCurrentTrack] = useState(tracks[0])
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(()=>{
localStorage.setItem("likedTracks",
  JSON.stringify(allTracks)
)
  },[allTracks])

 useEffect(() => {

  if (window.innerWidth >= 768) {
    setShowSplash(false)
    return
  }

  const splashTimer = setTimeout(() => {
    setShowSplash(false)
  }, 3000)

  return () => clearTimeout(splashTimer)

}, [])

if(showSplash){
  return <SplashScreen showBeats={showBeats} />
}
  return (
   <div className="bg-[#0e0e0e] min-h-screen">

  <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

  <div className=' px-4 font-sans'>
    <Routes>
      <Route path="/" element={<Home
       allTracks={allTracks}
  setAllTracks={setAllTracks}
  currentTrack={currentTrack}
  setCurrentTrack={setCurrentTrack}
  isPlaying={isPlaying}
  setIsPlaying={setIsPlaying}
  searchQuery={searchQuery}
/>} />


      <Route path="/discover" element={<Discover setCurrentTrack={setCurrentTrack}
  setIsPlaying={setIsPlaying}
  searchQuery={searchQuery}
   setSearchQuery={setSearchQuery}
  />} />

      <Route path="/liked" element={<Liked 
      allTracks={allTracks} 
      setIsPlaying={setIsPlaying}
      setAllTracks={setIsPlaying}
      setCurrentTrack={setCurrentTrack}
       searchQuery={searchQuery}
      />} />
      <Route path="/artists" element={<Artists />} />

      <Route path="/artist/:id" element={<ArtistsDetail/>}/>
      
     <Route path="/search" element={<Search setCurrentTrack={setCurrentTrack} setIsPlaying={setIsPlaying} />} />

      <Route path="/profile" element={<Profile/>}/>
        <Route path="/profile-detail" element={<ProfileDetail   allTracks={allTracks}  />} />
    </Routes>
   

<PlayerBar

  currentTrack={currentTrack}
  setCurrentTrack={setCurrentTrack}
  isPlaying={isPlaying}
  setIsPlaying={setIsPlaying}
  allTracks={allTracks}
  setAllTracks={setAllTracks}
/>

  </div>
 
  <BottomNav />

</div>
  )
}

export default App
