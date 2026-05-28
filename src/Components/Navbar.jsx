import React from 'react'
import { NavLink } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'

const Navbar = () => {
  return (


<>
{/* desktop nav */}
 <div className='hidden md:flex bg-black text-white w-full h-20  items-center justify-between px-6 border-b border-white/10 backdrop-blur-xl'>

  {/* Logo */}
  <div className='flex items-center gap-3'>

  <div className='w-12 h-12'>
    <img
      src="/vibify.png"
      alt="logo"
      className='w-full h-full object-cover'
    />
  </div>

  <h1 className='text-2xl font-semibold tracking-wide  hover:text-pink-400 transition-all"'>
    Vibify
  </h1>

</div>
 

  <div className='flex-row flex gap-10 text-xl'>
   <NavLink to="/home" className="hover:text-pink-400 transition-all"> Home </NavLink> 
   <NavLink to="/discover"   className="hover:text-pink-400 transition-all"> Discover</NavLink>
   <NavLink to="/liked"   className="hover:text-pink-400 transition-all"> Liked</NavLink>
   <NavLink to="/artists"   className="hover:text-pink-400 transition-all">Artists</NavLink>
   
   
  </div>

  {/* Icons */}
  <div className='flex items-center gap-10'>
    <i className="ri-notification-4-line text-2xl hover:text-pink-400 transition-all"></i>

    <i className="ri-settings-4-line text-2xl hover:text-pink-400 transition-all"></i>

    <div className='w-11 h-11 rounded-full bg-pink-400/20 
    flex items-center justify-center border border-pink-300/20'>
      <i className="ri-user-3-line text-2xl text-pink-300"></i>
    </div>
  </div>

</div>

{/* Mobile Nav */}
<div className=' md:hidden flex items-center justify-between 
bg-black text-white px-2 py-3'>

  {/* Search Bar */}
  <div className='w-72 h-12 
  border border-white/10 bg-white/10
  rounded-2xl backdrop-blur-xl
  flex items-center px-4 gap-3'>

    <i className="ri-search-line text-xl text-pink-400"></i>

    <input
      type="text"
      placeholder='Search songs, artists...'
      className='bg-transparent w-full outline-none 
      text-white placeholder:text-zinc-500 text-sm'
    />
  </div>

  {/* Icons */}
<div className='flex items-center '>

  {/* Settings */}
  <div className='w-10 h-10 rounded-full 
  bg-pink-400/10 border border-pink-400/10
  flex items-center justify-center'>

    <i className="ri-settings-4-line text-xl 
    hover:text-pink-400 transition-all"></i>
  </div>

  {/* User */}
  <div className='w-10 h-10 rounded-full 
  bg-pink-400/10 border border-pink-400/10
  flex items-center justify-center'>

    <i className="ri-user-3-line text-xl 
    hover:text-pink-400 transition-all"></i>
  </div>

</div>

   

  </div>


</>
  )
}

export default Navbar
