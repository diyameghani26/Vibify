import React, { useEffect } from 'react'
import tracks from '../data/track'
import { useState } from 'react'
import { useRef } from 'react'

const PlayerBar = () => {
  const [currentTrack, setCurrentTrack] = useState(tracks[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(0.7)
  const audioRef = useRef(new Audio())

  const handlePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const handleNext = () => {
    const currentIndex = tracks.findIndex(t => t.id === currentTrack.id)
    const nextIndex = (currentIndex + 1) % tracks.length
    setCurrentTrack(tracks[nextIndex])
  }

  const handlePrev = () => {
    const currentIndex = tracks.findIndex(t => t.id === currentTrack.id)
    const prevIndex = (currentIndex - 1 + tracks.length) % tracks.length
    setCurrentTrack(tracks[prevIndex])
  }

  useEffect(() => {
    const audio = audioRef.current
    const updateProgress = () => {
      if (audio.duration) {
        const percent = (audio.currentTime / audio.duration) * 100
        setProgress(percent)
      }
    }
    audio.addEventListener('timeupdate', updateProgress)
    return () => audio.removeEventListener('timeupdate', updateProgress)
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if(isPlaying){
      audio.src = currentTrack.audio
      audio.play()
    } else{
      audio.pause()
    }
  },[isPlaying, currentTrack])

  return (
    <>
      {/* MOBILE - Only small screens */}
     
<div className="fixed bottom-16 sm:bottom-2 w-full bg-[#111111] border-t border-pink-500/20 px-3 py-2 lg:hidden">
  <div className="flex items-center justify-between gap-2">
    
    {/* LEFT - Track Info */}
    <div className="flex items-center gap-2 flex-1 min-w-0">
      <img src={currentTrack.cover} className="w-10 h-10 rounded" />
      <div className="min-w-0">
        <p className="text-white text-xs font-semibold truncate">{currentTrack.title}</p>
        <p className="text-gray-400 text-xs truncate">{currentTrack.artist}</p>
      </div>
    </div>

    {/* RIGHT - Controls */}
    <div className="flex items-center gap-2 flex-shrink-0">

        <button onClick={handlePrev} className="text-gray-400 hover:text-white">
                <i className="ri-skip-back-fill text-2xl"></i>
              </button>

      {/* Play Button */}
      <button onClick={handlePlay} className="w-9 h-9 bg-pink-500 rounded-full flex items-center justify-center hover:scale-110">
        <i className={`text-white text-xl ${isPlaying ? 'ri-pause-fill' : 'ri-play-fill'}`}></i>
      </button>
      
      {/* Next Button */}
      <button onClick={handleNext} className="text-gray-400 mr-2 hover:text-white">
        <i className="ri-skip-forward-fill text-2xl"></i>
      </button>
    </div>
  </div>
  
  {/* Progress bar */}
  <div className="w-full h-0.5 bg-gray-700 rounded-full overflow-hidden mt-1">
    <div className="h-full bg-pink-500" style={{ width: `${progress}%` }}></div>
  </div>
</div>

      {/* DESKTOP - Only large screens */}
      <div className="hidden sm:block md:block lg:block fixed bottom-0 w-full bg-[#111111] border-t border-pink-500/20 px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-48">
            <img src={currentTrack.cover} className="w-12 h-12 rounded" />
            <div className="min-w-0">
              <p className="text-white text-sm font-semibold truncate">{currentTrack.title}</p>
              <p className="text-gray-400 text-xs truncate">{currentTrack.artist}</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-2 flex-1">
            <div className="flex items-center gap-6">
              <button className="text-gray-400 hover:text-pink-500">
                <i className="ri-shuffle-line text-xl"></i>
              </button>
              <button onClick={handlePrev} className="text-gray-400 hover:text-white">
                <i className="ri-skip-back-fill text-2xl"></i>
              </button>
              <button onClick={handlePlay} className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center hover:scale-110">
                <i className={`text-2xl text-white ${isPlaying ? 'ri-pause-fill' : 'ri-play-fill'}`}></i>
              </button>
              <button onClick={handleNext} className="text-gray-400 hover:text-white">
                <i className="ri-skip-forward-fill text-2xl"></i>
              </button>
              <button className="text-gray-400 hover:text-pink-500">
                <i className="ri-repeat-line text-xl"></i>
              </button>
            </div>
            <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-pink-500" style={{ width: `${progress}%` }}></div>
            </div>
          </div>

          <div className="flex items-center gap-2 w-32 justify-end mr-3">
            <button className="text-gray-400 hover:text-pink-500">
               <i className="ri-volume-down-fill text-3xl"></i>
            </button>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={volume * 100}
              onChange={(e) => setVolume(e.target.value / 100)}
              className="w-20 h-1 bg-gray-700 rounded-full accent-pink-500"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default PlayerBar


