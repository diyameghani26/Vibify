import React, { useEffect } from 'react'
import tracks from '../data/track'
import { useState } from 'react'
import { useRef } from 'react'

const PlayerBar = ({
  currentTrack,
  setCurrentTrack,
  isPlaying,
  setIsPlaying,
  allTracks,
  setAllTracks
}) => {
  
  const [repeatMode, setRepeatMode] = useState('none')
const [progress, setProgress] = useState(0)
const [volume, setVolume] = useState(0.7)
const [isMuted, setIsMuted] = useState(false)
const [currentTime, setCurrentTime] = useState(0)
const [duration, setDuration] = useState(0)

const audioRef = useRef(new Audio())

// ---------------- Repeat toggle
const handleRepeat = () => {
  if (repeatMode === 'none') setRepeatMode('all')
  else if (repeatMode === 'all') setRepeatMode('one')
  else setRepeatMode('none')
}

//Format time
const formatTime = (time) => {
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}

// Shuffle
const handelShuffle = () => {
  if (allTracks.length <= 1) return

  const currentIndex = allTracks.findIndex(
    (track) => track.id === currentTrack.id
  )

  let randomIndex
  do {
    randomIndex = Math.floor(Math.random() * allTracks.length)
  } while (randomIndex === currentIndex)

  setCurrentTrack(allTracks[randomIndex])
  setIsPlaying(true)
}

// Play / Pause
const handlePlay = () => {
  setIsPlaying(!isPlaying)
}

//  Mute
const handelMute = () => {
  setIsMuted(!isMuted)
}

//Next
const handleNext = () => {
  const currentIndex = tracks.findIndex(t => t.id === currentTrack.id)
  const nextIndex =
    currentIndex === tracks.length - 1 ? 0 : currentIndex + 1

  setCurrentTrack(tracks[nextIndex])
}

// Prev
const handlePrev = () => {
  const currentIndex = tracks.findIndex(t => t.id === currentTrack.id)
  const prevIndex =
    currentIndex === 0 ? tracks.length - 1 : currentIndex - 1

  setCurrentTrack(tracks[prevIndex])
}

//  Progress tracker
useEffect(() => {
  const audio = audioRef.current

  const updateProgress = () => {
    if (audio.duration) {
      setProgress((audio.currentTime / audio.duration) * 100)
      setCurrentTime(audio.currentTime)
      setDuration(audio.duration)
    }
  }

  audio.addEventListener('timeupdate', updateProgress)
  return () => audio.removeEventListener('timeupdate', updateProgress)
}, [])

// Volume control
useEffect(() => {
  audioRef.current.volume = isMuted ? 0 : volume
}, [isMuted, volume])

// Play sync + reset fix
useEffect(() => {
  const audio = audioRef.current

  if (isPlaying) {
    audio.src = currentTrack.audio
    audio.play()
  } else {
    audio.pause()
  }


  setProgress(0)
  setCurrentTime(0)
}, [isPlaying, currentTrack])

// Repeat logic 
useEffect(() => {
  const audio = audioRef.current

  const handleEnd = () => {
    if (repeatMode === 'one') {
      audio.currentTime = 0
      audio.play()
      setCurrentTime(0)
      setProgress(0)
    }

    else if (repeatMode === 'all') {
      handleNext()
    }

    else {
      setIsPlaying(false)
      audio.currentTime = 0
      setProgress(0)
      setCurrentTime(0)
    }
  }

  audio.addEventListener('ended', handleEnd)
  return () => audio.removeEventListener('ended', handleEnd)
}, [repeatMode, currentTrack])
  return (
   
    <>
      {/* MOBILE - Only < 640px */}
      <div className="fixed block bottom-16 bg-linear-to-r from-[#0f0f0f] via-[#ff0697] to-[#0f0f0f]
border-t border-pink-500/80 sm:hidden w-full px-2  py-2   -ml-3 rounded-2xl">
        <div className="flex items-center justify-between gap-2 "> 
          
          {/* LEFT - Track Info */}
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <img src={currentTrack.cover} className="w-10 h-10 rounded" />
            <div className="min-w-0">
              <p className="text-white text-xs font-semibold truncate">{currentTrack.title}</p>
              <p className="text-gray-400 text-xs truncate">{currentTrack.artist}</p>
            </div>
          </div>

          {/* RIGHT - Controls */}
          <div className="flex items-center gap-2  shrink-0">
            <button onClick={handlePrev} className="text-gray-400 hover:text-white">
              <i className="ri-skip-back-fill text-2xl"></i>
            </button>

            {/* Play Button */}
            <button onClick={handlePlay} className="w-9 h-9 bg-pink-500 rounded-full flex items-center justify-center hover:scale-110">
              <i className={`text-white text-xl ${isPlaying ? 'ri-pause-fill' : 'ri-play-fill'}`}></i>
            </button>
            
            {/* Next Button */}
            <button onClick={handleNext} className="text-gray-400 hover:text-white">
              <i className="ri-skip-forward-fill text-2xl"></i>
            </button>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="w-full hidden mt-2">
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span className='text-[9px]'>{formatTime(currentTime)}</span>
            <span className='text-[9px]'>{formatTime(duration)}</span>
          </div>

          <div className="w-full h-0.5 bg-gray-700 rounded-full overflow-hidden hidden ">
            <div
              className="h-full bg-pink-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* DESKTOP - 640px and above */}
      <div className="hidden sm:block sm:bottom-16 fixed md:bottom-0 w-full bg-[#111111] border-t border-pink-500/20 px-4 py-3 z-50">
        <div className="flex items-center justify-between gap-4">

          <div className="flex items-center gap-3 w-48">
            <img src={currentTrack.cover} className="w-12 h-12 rounded" />
            <div className="min-w-0">
              <p className="text-white text-sm font-semibold truncate md:text-lg">{currentTrack.title}</p>
              <p className="text-gray-400 text-xs md:text-sm truncate">{currentTrack.artist}</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap- flex-1">
            <div className="flex items-center gap-6">
              <button 
                onClick={handelShuffle}
                className="text-gray-400 hover:text-pink-500">
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
             <button 
  onClick={handleRepeat}
  className={`text-xl transition-all relative ${
    repeatMode === 'none' 
      ? 'text-gray-400 hover:text-pink-500'
      : 'text-pink-500'
  }`}
>
  <i className="ri-repeat-line"></i>

  {repeatMode === 'one' && (
    <span className="absolute -top-2 -right-2 text-[10px] bg-pink-500 text-white px-1 rounded">
      1
    </span>
  )}
</button>
            </div>

            <div className="w-full sm:hidden md:block">
              <div className="flex justify-between text-xs text-gray-400 mb-1">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
              <div className="h-1 bg-gray-700 rounded-full overflow-hidden mb-3">
                <div
                  className="h-full bg-pink-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 w-32 mr-6 justify-end">
            <button 
              onClick={handelMute}
              className="text-gray-400 hover:text-pink-500">
              <i className={isMuted ? "ri-volume-mute-fill text-xl" : "ri-volume-down-fill text-3xl"}></i>
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


