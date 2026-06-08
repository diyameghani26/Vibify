import React from 'react'
import { NavLink } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import { APP_NAME, LOGO_PATH } from '../constants/config'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
  return (

<>
{/* desktop nav */}
 <div className='hidden md:flex bg-black text-white w-full h-20  items-center justify-between px-6 border-b border-white/10 backdrop-blur-xl'>

  {/* Logo */}
  <div className='flex items-center gap-3'>

  <div className='w-12 h-12'>
    <img
      src={LOGO_PATH}
      alt={APP_NAME}
      className='w-full h-full object-cover'
    />
  </div>

  <h1 className='text-2xl font-semibold tracking-wide  hover:text-pink-400 transition-all"'>
  {APP_NAME}
  </h1>

</div>
 

  <div className='flex-row flex gap-10 text-xl'>
  
  <NavLink
  to="/"
  className={({ isActive }) =>
    `transition-all hover:text-pink-400 ${
      isActive ? " text-pink-400 border-b-2 border-pink-400": ""
    }`
  }
>
  Home
</NavLink>

<NavLink
  to="/discover"
  className={({ isActive }) =>
    `transition-all hover:text-pink-400 ${
      isActive ? " text-pink-400 border-b-2 border-pink-400" : ""
    }`
  }
>
  Discover
</NavLink>

<NavLink
  to="/liked"
  className={({ isActive }) =>
    `transition-all hover:text-pink-400 ${
      isActive ? "text-pink-400 border-b-2 border-pink-400" : ""
    }`
  }
>
  Liked
</NavLink>

<NavLink
  to="/artists"
  className={({ isActive }) =>
    `transition-all hover:text-pink-400  ${
      isActive ? " text-pink-400 border-b-2 border-pink-400" : ""
    }`
  }
>
  Artists
</NavLink>
   
   
  </div>

  {/* Icons */}
  <div className='flex items-center gap-10'>
   
      <i className="ri-search-line text-2xl hover:text-pink-400 transition-all"
       onClick={() => navigate('/search')}
      ></i>

   

    <div className='w-11 h-11 rounded-full bg-pink-400/20 
    flex items-center justify-center border border-pink-300/20'>
      <i 
       onClick={() => navigate('/profile')}
      className="ri-user-3-line text-2xl text-pink-300"></i>
    </div>
  </div>

</div>

{/* Mobile Nav */}
<div className=' md:hidden flex items-center justify-between 
bg-black text-white px-2 py-3'>

  <div className='flex items-center gap-2'>
    <div className='w-10 h-10'>
      <img src="/vibify.png" alt="logo" className='w-full h-full object-cover' />
    </div>
    <h1 className='text-lg font-semibold tracking-wide'>Vibify</h1>
  </div>

  {/* Icons */}
<div className='flex items-center '>

  {/* Search */}
  <div className='w-10 h-10 rounded-full 
  bg-pink-400/10 border border-pink-400/10
  flex items-center justify-center'>
    <i className={`ri-search-line text-2xl transition-all ${
      location.pathname === "/search"
        ? "text-pink-400"
        : "text-white hover:text-pink-400"
    }`}
       onClick={() => navigate('/search')}
      ></i>
  </div>

  {/* User */}
  <div className='w-10 h-10 rounded-full 
  bg-pink-400/10 border border-pink-400/10
  flex items-center justify-center'>

    <i className={`ri-user-3-line text-xl 
    hover:text-pink-400 transition-all ${
      location.pathname === "/profle"
        ? "text-pink-400"
        : "text-white hover:text-pink-400"
    }`}
    onClick={() => navigate('/profile')}
    ></i>
  </div>

</div>

   

  </div>


</>
  )
}

export default Navbar
