import React from 'react'
import tracks from '../data/track'
import HomeSkeleton from '../Components/skeletons/HomeSkeleton'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageWrapper from "../components/PageWrapper";
import { motion } from "framer-motion";
const Home = ({ setCurrentTrack, setIsPlaying , isPlaying , currentTrack , allTracks , setAllTracks }) => {
const [loading, setLoading] = useState(true)
const hour  =  new Date().getHours()

const greeting  = 
 hour < 12 
? "Good Morning, Guest"
: hour < 18  
? "Good Afternoon, Guest"
: hour < 22
? "Good Evening, Guest"
: "Late Night Vibes 🎧"

const toggleLike = (id) =>{
  const updatedTracks = allTracks.map((track) => {
    if(track.id === id){
      return {
        ...track,
        liked:!track.liked,
      }
    }
    return track
  })
  setAllTracks(updatedTracks)
}
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  if (loading) {
    return <HomeSkeleton />
  } return (
     <PageWrapper>
    <div className=' flex flex-col gap-6 text-white'>
      <h1 className='text-xl mt-5 sm:text-3xl md:text-4xl lg:text-4xl px-2 sm:px-6 lg:px-10 md:mt-3'>{greeting}</h1>
      
      <div className='w-full px-1 sm:px-2 lg:px-1  rounded-2xl'>

  <div className='relative group overflow-hidden 
  rounded-3xl h-55 sm:h-70 lg:h-90
  border border-white/10'>

    {/* Background Image */}
    <img
      src="/hero img.png"
      alt="featured"
      className='w-full h-full object-cover
      transition-transform duration-700
      group-hover:scale-110'
    />

    {/* Overlay */}
    <div className='absolute inset-0 bg-black/40'></div>

    {/* Content */}
    <div className='absolute inset-0 
    flex items-end justify-between
    p-4 sm:p-8 lg:p-10'>

      {/* Left Side */}
      <div className='max-w-[70%]'>

        <p className='text-pink-300 uppercase 
        tracking-[3px] text-[10px] sm:text-xs 
        font-semibold mb-2'>
          Featured Track
        </p>

        <h1 className='text-2xl sm:text-5xl lg:text-6xl 
        font-bold text-white leading-none'>
          Neon Serenity
        </h1>

        <p className='text-pink-100 mt-2 
        text-sm sm:text-lg'>
          Lumina Drift
        </p>
      </div>

      {/* Play Button */}
      <button 
      
       onClick={() => {
    const featuredTrack = tracks.find(
      (track) => track.title === "Neon Serenity"
    );

    setCurrentTrack(featuredTrack);
    setIsPlaying(true);
  }}
    className='w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20
      rounded-full bg-pink-500 hover:shadow-[0_0_20px_#e91e8c]
      flex items-center justify-center
      hover:scale-110 transition-all'>

       <i
  className={`text-2xl sm:text-3xl text-white  ${
    currentTrack?.title === "Neon Serenity" && isPlaying
      ? "ri-pause-fill"
      : "ri-play-fill"
  }`}
/>
      </button>
    </div>
  </div>
</div>

<div className=' mt-2 flex flex-row items-center justify-between'>

  <h1 className=' px-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold'> Trending Now </h1>

   <Link to="/discover" ><h2  className='text-sm sm:text-base md:text-xl lg:text-xl font-semibold text-pink-400'>
    View All
  </h2>
</Link>
</div>

<div className="  pb-30 sm:px-4 lg:px-10">
  <div 

  className="space-y-2">
    {allTracks.map((track) => (
      <motion.div key={track.id} 
          onClick={() => {
  setCurrentTrack(track)
  setIsPlaying(true)
}}
  whileHover={{
    x: 8,
    scale: 1.01,
  }}
  transition={{
    duration: 0.2,
  }}
     className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/8 hover:shadow-lg  cursor-pointer">
  {/* Track Number */}
        <span className="text-gray-400 w-3 sm:w-4 md:w-5 text-sm ">{track.id}</span>
        
        {/* Cover Image */}
       <div className="overflow-hidden rounded">
  <motion.img
    src={track.cover}
    alt={track.title}
    whileHover={{
      scale: 1.15,
    }}
    transition={{
      duration: 0.3,
    }}
    className="w-12 h-12 rounded"
  />
</div>
 {/* Track Info */}
        <div className="flex-1">
          <p className="text-white font-semibold">{track.title}</p>
          <p className="text-gray-400 text-[10px] sm:text-sm">{track.artist}</p>
        </div> 
        {/* heart icon & Duration */}
    <button
  onClick={(e) => {
    e.stopPropagation()
    toggleLike(track.id)
  }}
>
  <i
    className={
      track.liked
        ? "ri-heart-fill text-pink-500 text-lg"
        : "ri-heart-line text-gray-400 text-lg"
    }
  ></i>
</button>
        <span className="text-gray-400 text-sm sm:text-base">{track.duration}</span>
          </motion.div>
    ))}
  </div>
</div>
    </div>
    </PageWrapper>
  )
}
export default Home
