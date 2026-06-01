import React from 'react'
import { useState } from 'react'

const Discover = () => {

  const [searchQuery, setSearchQuery] = useState('')
const [selectedGenre, setSelectedGenre] = useState('All')

const genres = ['All' , 'Ambient', 'Lo-fi', 'Classical', 'Instrumental', 'Experimental' ]

  return (
<>
  {/* Search Bar */}
  <div className="flex justify-center px-4 mt-4">
    <div className="w-full max-w-2xl rounded-full flex items-center px-4 gap-3 bg-white/10 h-12 backdrop-blur-xl border border-white/20">
      <i className="ri-search-line text-pink-400 shrink-0"></i>

      <input
        type="text"
        placeholder="Search songs, artists..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="bg-transparent flex-1 outline-none text-white placeholder:text-gray-500 text-sm"
      />
    </div>
  </div>

  {/* Genre Pills */}
<div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6 px-4">
  {genres.map((genre) => (
    <button
      key={genre}
      onClick={() => setSelectedGenre(genre)}
      className={`
        px-4 py-2 rounded-full text-xs sm:text-sm
        font-medium transition-all
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
</>

  )
}

export default Discover
