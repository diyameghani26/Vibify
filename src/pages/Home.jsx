import React from 'react'
import tracks from '../data/track'
import { Link } from 'react-router-dom'

const Home = () => {

const hour  =  new Date().getHours()

const greeting  = 
 hour < 12 
? "Good Morning, Guest"
: hour < 18  
? "Good Afternoon, Guest"
: hour < 22
? "Good Evening, Guest"
: "Late Night Vibes 🎧"

  return (
    <div className='bg-black flex flex-col gap-6 text-white'>
      <h1 className='text-xl sm:text-3xl md:text-4xl lg:text-4xl px-2 sm:px-6 lg:px-10 md:mt-3'>{greeting}</h1>
      
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
      <button className='w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20
      rounded-full bg-pink-500 hover:shadow-[0_0_20px_#e91e8c]
      flex items-center justify-center
      hover:scale-110 transition-all'>

        <i className="ri-play-fill 
        text-2xl sm:text-3xl text-white ml-1"></i>

      </button>

    </div>

  </div>

</div>

<div className=' mt-2 flex flex-row items-center justify-between'>

  <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold'> Trending Now </h1>

   <Link to="/discover" ><h2  className='text-sm sm:text-base md:text-xl lg:text-xl font-semibold text-pink-400'>
    View All
  </h2>
</Link>
</div>

<div className=" px-4 sm:px-6 lg:px-10">
 
  
  <div className="space-y-2">
    {tracks.map((track) => (
      <div key={track.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5">
        
        {/* Track Number */}
        <span className="text-gray-400 w-3 sm:w-4 md:w-5 text-sm ">{track.id}</span>
        
        {/* Cover Image */}
        <img src={track.cover} alt={track.title} className="w-12 h-12 rounded" />
        
        {/* Track Info */}
        <div className="flex-1">
          <p className="text-white font-semibold">{track.title}</p>
          <p className="text-gray-400 text-[10px] sm:text-sm">{track.artist}</p>
        </div>
        
        {/* Duration */}
        <span className="text-gray-400 text-sm sm:text-base">{track.duration}</span>
        
      </div>
    ))}
  </div>
</div>
       

    </div>

    
  )
}

export default Home
