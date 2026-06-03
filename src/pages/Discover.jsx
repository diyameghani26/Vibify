import React from 'react'
import { useState } from 'react'
import tracks from '../data/track'


const Discover = ({ setCurrentTrack, setIsPlaying }) => {

  const [searchQuery, setSearchQuery] = useState('')
const [selectedGenre, setSelectedGenre] = useState('All')

const genres = ['All' , 'Ambient', 'Lo-fi', 'Classical', 'Instrumental', 'Electronic' ]

const filteredTracks = tracks.filter((track) => {
  const matchesGenre = selectedGenre === "All" || 
  track.genre === selectedGenre;

  const matchesSearch = track.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()) || 
  track.artist.toLowerCase().includes(searchQuery.toLowerCase());
   return matchesGenre && matchesSearch;
})

  return (
<div className='pb-34 md:pb-29'>
  {/* Search Bar */}
  <div className="flex justify-center px-4 mt-4">
    <div className="w-full max-w-2xl rounded-full flex items-center px-4 gap-3 bg-white/10 h-12 backdrop-blur-xl border border-white/20">
      <i className="ri-search-line text-pink-400 md:text-xl shrink-0"></i>

      <input
        type="text"
        placeholder="Search songs, artists..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="bg-transparent flex-1 outline-none text-white text-base md:text-xl placeholder:text-gray-500 "
      />
    </div>
  </div>

  {/* Genre Pills */}
<div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 mt-6 px-4 md:items-center md:justify-center md:mt-8 ">
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
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
  {filteredTracks.map((track) => (
   <div
  key={track.id}
     onClick={() => {
        setCurrentTrack(track)
        setIsPlaying(true)
      }}
  className="bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-all group"
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

  )
}

export default Discover
