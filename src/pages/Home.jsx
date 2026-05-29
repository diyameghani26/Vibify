import React from 'react'

const Home = () => {

const hour  =  new Date().getHours()

const greeting  = 
 hour < 12 
? "Good Morning, Diya"
: hour < 18  
? "Good Afternoon, Diya"
: hour < 22
? "Good Evening, Diya"
: "Late Night Vibes 🎧"

  return (
    <div className='bg-black flex flex-col gap-6 text-white'>
      <h1 className='text-xl sm:text-3xl md:text-4xl lg:text-4xl px-2 sm:px-6 lg:px-10 md:mt-3'>{greeting}</h1>
      
      <div className='w-full px-1 sm:px-2 lg:px-1  rounded-2xl'>

  <div className='relative group overflow-hidden 
  rounded-3xl h-[220px] sm:h-[280px] lg:h-[360px]
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
      <button className='w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20
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

  <h2  className='text-sm sm:text-base md:text-xl lg:text-xl font-semibold text-pink-400'>
    View All
  </h2>

</div>
       

    </div>

    
  )
}

export default Home
