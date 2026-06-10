import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)

const handleLogin = () => {
  if (!email || !password) {
    alert("Please fill all fields")
    return
  }

  if (rememberMe) {
    localStorage.setItem("email", email)
    localStorage.setItem("password", password)
  } else {
    localStorage.removeItem("email")
    localStorage.removeItem("password")
  }

  console.log("Logged In")
  navigate("/")
}



useEffect(() => {
  const savedEmail = localStorage.getItem("email")
  const savedPassword = localStorage.getItem("password")

  if (savedEmail) setEmail(savedEmail)
  if (savedPassword) setPassword(savedPassword)
}, [])

  return (
    <div className="  bg-linear-to-br from-black via-[#0a0a0a] to-[#140014] flex items-center justify-center px-4 py-8">
      
      <div className="w-full max-w-md bg-[#0f0f0f]/90 backdrop-blur-md border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl">

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-white">
          Welcome Back
        </h1>

        <p className="text-center text-base text-gray-400 mt-3 mb-8">
          Log in to your account
        </p>

        {/* Email */}
        <input
          type="email"
          value={email}
  onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full h-13 px-4 md:b-8 mb-4  rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder:text-gray-500 focus:outline-none focus:border-pink-500"
        />

        {/* Password */}
        <input
          type="password"
           value={password}
  onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="w-full h-13 px-4 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder:text-gray-500 focus:outline-none focus:border-pink-500"
        />

        {/* Remember + Forgot */}
        <div className="flex items-center justify-between mt-10 text-sm">
          <label className="flex text-base items-center gap-2 text-gray-300">
            <input type="checkbox" 
             checked={rememberMe}
  onChange={(e) => setRememberMe(e.target.checked)} className="accent-pink-500" />
            Remember me
          </label>

          <button className="text-pink-500 hover:text-pink-400">
            Forgot password?
          </button>
        </div>

        {/* Login Button */}
        <button 
        onClick={handleLogin}
        className="w-full h-12 text-xl bg-pink-600 hover:bg-pink-500 transition rounded-lg text-white font-semibold mt-6">
          Log In
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-zinc-800"></div>
          <span className="text-xs text-gray-500 uppercase">
            Or continue with
          </span>
          <div className="flex-1 h-px bg-zinc-800"></div>
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button className="h-10 md:h-12 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center gap-2 transition">
            <i className="ri-google-fill"></i>
            Google
          </button>

          <button className="h-10 md:h-12 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center gap-2 transition">
            <i className="ri-apple-fill"></i>
            Apple
          </button>
        </div>

        {/* Sign Up */}
        <p className="text-center text-gray-400 mt-3 md:mt-8">
          Don't have an account?{" "}
          <span className="text-pink-500 hover:text-pink-400 cursor-pointer font-medium">
            Sign Up
          </span>
        </p>

      </div>
    </div>
  );
}

export default Profile;
