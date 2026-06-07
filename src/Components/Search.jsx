import { useState } from 'react'
import tracks from '../data/track'

const Search = ({ setCurrentTrack, setIsPlaying }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const results = searchQuery === '' 
    ? [] 
    : tracks.filter(track => 
        track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        track.artist.toLowerCase().includes(searchQuery.toLowerCase())
      )

  return (
    <div className='pb-40 px-6 pt-4'>
      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <div className="w-full max-w-2xl rounded-full flex items-center px-4 gap-3 bg-white/10 h-11 backdrop-blur-xl border border-white/20">
          <i className="ri-search-line text-pink-400 text-xl"></i>
          <input
            type="text"
            placeholder="Search songs, artists..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
            className="bg-transparent flex-1 outline-none text-white placeholder:text-gray-500"
          />
        </div>
      </div>

      {/* Results List */}
      {searchQuery === '' ? (
        <p className="text-gray-400 text-center mt-12">Start typing to search...</p>
      ) : results.length === 0 ? (
        <p className="text-gray-400 text-center mt-12">No songs found</p>
      ) : (
        <div>
          {results.map((track, index) => (
            <div
              key={track.id}
              onClick={() => {
                setCurrentTrack(track)
                setIsPlaying(true)
              }}
              className="flex items-center gap-4 p-3 rounded hover:bg-white/5 cursor-pointer group mb-2"
            >
              {/* Number */}
              <span className="text-gray-400 w-6 text-sm">{index + 1}</span>

              {/* Image */}
              <img src={track.cover} alt={track.title} className="w-10 h-10 rounded" />

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="text-white font-medium truncate">{track.title}</p>
                <p className="text-gray-400 text-xs truncate">{track.artist}</p>
              </div>

              {/* Duration */}
              <span className="text-gray-400 text-sm">{track.duration}</span>

              {/* Like */}
              <button className="text-gray-400 hover:text-pink-500 opacity-0 group-hover:opacity-100">
                <i className="ri-heart-line"></i>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Search
