import React from 'react'
import LikedSkeleton from '../Components/skeletons/LikedSkeleton'
import { useState, useEffect } from 'react'
import PageWrapper from "../components/PageWrapper";

const Liked = ({
  allTracks,
  setAllTracks,
  setCurrentTrack,
  setIsPlaying
}) => {

  const likedTracks = allTracks.filter(
    (track) => track.liked 
  )

  const removeLike = (id) => {
    const updatedTracks = allTracks.map((track)=>{
      if(track.id === id){
        return {
          ...track,
          liked:false,
        }
      }
      return track
    })
    setAllTracks(updatedTracks)
  }

  const  handleShuffle =()=>{

    if(likedTracks.length === 0){
      alert("No liked songs to shuffle")
    return
    }
    const randomIndex = Math.floor(Math.random()*likedTracks.length)

  setCurrentTrack(likedTracks[randomIndex])
  setIsPlaying(true)
  }
  
  const [loading, setLoading] = useState(true)

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false)
  }, 1500)

  return () => clearTimeout(timer)
}, [])

if (loading) {
  return <LikedSkeleton />
}

  return (
    <PageWrapper>
    <div className="pb-32 px-4 sm:px-6 lg:px-8 pt-6">

  {/* hero */}
  <div className="flex flex-col md:flex-row gap-6 md:items-end">

    <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-2xl bg-linear-to-br from-pink-400 to-pink-700 flex items-center justify-center shadow-2xl">
      <i className="ri-heart-fill text-white text-6xl"></i>
    </div>

    <div>
      <p className="text-xs uppercase tracking-[3px] text-pink-400">
        Playlist
      </p>

      <h1 className="text-4xl sm:text-6xl font-bold text-white mt-2">
        Your Liked Songs
      </h1>

      {/* <p className="text-gray-400 mt-3">
        Vibify User • 24 songs • 1 hr 42 min
      </p> */}

      <div className="flex gap-3 mt-6">
        <button 
    onClick={() => {
    if (likedTracks.length === 0) {
      alert("No liked tracks to play 🎵")
      return
    }

    setCurrentTrack(likedTracks[0])
    setIsPlaying(true)
  }}
        className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-medium transition-all">
          <i className="ri-play-fill mr-1"></i>
          Play All
        </button>

        <button 
        onClick={handleShuffle}
        className="w-12 h-12 rounded-full border border-gray-700 hover:border-pink-500 flex items-center justify-center transition-all">
          <i className="ri-shuffle-line text-white  hover:text-pink-500"></i>
        </button>
      </div>
    </div>

  </div>

  {/* Controls */}
  <div className="flex justify-between items-center mt-10 border-b border-white/10 pb-4">

    <div className="flex gap-6 text-sm">
      <button className="text-pink-400 border-b border-pink-400 pb-1">
        List
      </button>

   
    </div>

  

  </div>

   {likedTracks.length === 0 && (
        <div className="text-center py-20">

          <h2 className="mt-4 text-2xl font-semibold text-white">
            No liked tracks yet
          </h2>

          <p className="text-gray-400 mt-2">
            Start liking tracks to see them here.
          </p>
        </div>
      )}

  {/* Desktop Table */}
  <div className="hidden md:block mt-6">


    {likedTracks.map((track, index) => (
      <div
        key={track.id}
        className="grid grid-cols-[50px_3fr_2fr_2fr_80px]  text-white/70 items-center py-3 hover:bg-white/5 rounded-xl px-2 transition-all"
      >
        <span>{index + 1}</span>

        <div className="flex items-center gap-3">
          <img
            src={track.cover}
            alt={track.title}
            className="w-12 h-12 rounded-lg object-cover"
          />

          <div>
            <h3 className="text-white">{track.title}</h3>
            <p className="text-sm text-gray-400">
              {track.artist}
            </p>
          </div>
        </div>

        <span className="text-gray-400">
          {track.album}
        </span>

       

        <div className="flex items-center justify-end gap-3">
  <i className="ri-heart-fill text-pink-500"></i>
  <span>{track.duration}</span>
</div>
      </div>
    ))}

  </div>

  {/* Mobile tracks */}
  <div className="md:hidden mt-6 space-y-3">

    {likedTracks.map((track) => (
      <div
        key={track.id}
        className="flex items-center justify-between bg-white/5 rounded-xl p-3"
      >
        <div className="flex items-center gap-3">

          <img
            src={track.cover}
            alt={track.title}
            className="w-14 h-14 rounded-lg object-cover"
          />

          <div>
            <h3 className="text-white font-medium">
              {track.title}
            </h3>

            <p className="text-sm text-gray-400">
              {track.artist}
            </p>
          </div>

        </div>

        <div className="text-right">
         <button onClick={() => removeLike(track.id)}>
  <i className="ri-heart-fill text-pink-500"></i>
</button>
          <p className="text-sm text-gray-400 mt-1">
            {track.duration}
          </p>
        </div>
      </div>
    ))}

  </div>

</div>
</PageWrapper>
  )
}

export default Liked
