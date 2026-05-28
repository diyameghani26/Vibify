import React from 'react'
import { NavLink } from 'react-router-dom'

const BottomNav = () => {
  return (
<div className="cursor-pointer fixed bottom-0 left-1/2 -translate-x-1/2 
w-full h-20  
bg-black  
text-white flex items-center justify-around 
md:hidden z-50">

  {/* Home */}
  <NavLink
    to="/"
    className={({ isActive }) =>
      `flex flex-col items-center justify-center 
       transition-all ${
        isActive
          ? "text-pink-400"
          : "text-white"
      }`
    }
  >
    <i className="ri-home-4-fill text-2xl"></i>
    <span className="text-[13px]">Home</span>
  </NavLink>

  {/* Search */}
  <NavLink
    to="/discover"
    className={({ isActive }) =>
      `flex flex-col items-center justify-center 
       transition-all ${
        isActive
          ? "text-pink-400"
          : "text-white"
      }`
    }
  >
    <i className="ri-compass-discover-fill text-2xl"></i>
    <span className="text-[13px]">Discover</span>
  </NavLink>

  {/* Artists */}
  <NavLink
    to="/artists"
    className={({ isActive }) =>
      `flex flex-col items-center justify-center 
       transition-all ${
        isActive
          ? "text-pink-400"
          : "text-white"
      }`
    }
  >
    <i className="ri-mic-fill text-2xl"></i>
    <span className="text-[13px]">Artists</span>
  </NavLink>

  {/* Liked */}
  <NavLink
    to="/liked"
    className={({ isActive }) =>
      `flex flex-col items-center justify-center 
       transition-all ${
        isActive
          ? "text-pink-400"
          : "text-white"
      }`
    }
  >
    <i className="ri-heart-3-fill text-2xl"></i>
    <span className="text-[11px]">Liked</span>
  </NavLink>

</div>
  )
}

export default BottomNav
