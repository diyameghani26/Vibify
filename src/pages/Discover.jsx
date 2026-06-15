import React from 'react'
import { useState } from 'react'
import tracks from '../data/track'
import DiscoverSkeleton from '../Components/skeletons/DiscoverSkeleton'
import { useEffect } from 'react'
import PageWrapper from "../Components/PageWrapper";

const Discover = ({ setCurrentTrack, setIsPlaying }) => {
  const [selectedGenre, setSelectedGenre] = useState('All')

  const genres = ['All', 'Ambient', 'Lo-fi', 'Classical', 'Instrumental', 'Electronic']
  const filteredTracks = tracks.filter((track) => {
    return selectedGenre === "All" || track.genre === selectedGenre
  })

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  if (loading) {
  return <DiscoverSkeleton />
}
  return (
    <PageWrapper>
    <div className='pb-34 md:pb-29 px-4'>
      {/* Genre Pills */}
      <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 mt-6 md:items-center md:justify-center md:mt-8">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => setSelectedGenre(genre)}
            className={`
              whitespace-nowrap px-4 py-2 md:px-5 md:py-2 md:text-xl rounded-full text-sm font-medium transition-all
              ${
                selectedGenre === genre
                  ? "bg-pink-500 text-white"
                  : "bg-white/12 text-gray-300 hover:bg-white/20"
              }
            `}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Track Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
        {filteredTracks.map((track) => (
          <div
            key={track.id}
            onClick={() => {
              setCurrentTrack(track)
              setIsPlaying(true)
            }}
            className="bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-all group cursor-pointer"
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={track.cover}
                alt={track.title}
                className="w-full aspect-square object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <h3 className="text-white font-medium mt-3 truncate md:text-2xl">
              {track.title}
            </h3>

            <p className="text-gray-400 text-sm md:text-base truncate">
              {track.artist}
            </p>
          </div>
        ))}
      </div>
    </div>
    </PageWrapper>
  )
}

export default Discover
