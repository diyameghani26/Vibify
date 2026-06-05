import React from 'react'

const Liked = () => {
  const likedSongs = [
  {
    id: 1,
    title: "Midnight Reverie",
    artist: "Neon Dreams",
    album: "Electric Avenues",
    dateAdded: "2 days ago",
    duration: "3:42",
    cover: "/covers/midnight reverie.jpg",
  },
  {
    id: 2,
    title: "Sky high",
    artist: "LUNA",
    album: "Celestial Wanderer",
    dateAdded: "Oct 12, 2023",
    duration: "4:15",
    cover: "/covers/Sky-high.jpg",
  },
];
  return (
    <div className="pb-32 px-4 sm:px-6 lg:px-8 pt-6">

  {/* Hero */}
  <div className="flex flex-col md:flex-row gap-6 md:items-end">

    <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-2xl bg-gradient-to-br from-pink-400 to-pink-700 flex items-center justify-center shadow-2xl">
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
        <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-medium transition-all">
          <i className="ri-play-fill mr-1"></i>
          Play All
        </button>

        <button className="w-12 h-12 rounded-full border border-gray-700 hover:border-pink-500 flex items-center justify-center transition-all">
          <i className="ri-shuffle-line text-white"></i>
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

      <button className="text-gray-400 hover:text-white">
        Grid
      </button>
    </div>

    <div className="flex items-center gap-4 text-gray-400">
      <i className="ri-search-line text-lg"></i>

      <button className="flex items-center gap-2 hover:text-white">
        Recents
        <i className="ri-arrow-down-s-line"></i>
      </button>
    </div>

  </div>

  {/* Desktop Table */}
  <div className="hidden md:block mt-6">

    <div className="grid grid-cols-[50px_3fr_2fr_2fr_80px] text-sm text-gray-500 border-b border-white/10 pb-3">
      <span>#</span>
      <span>Title</span>
      <span>Album</span>
      <span>Date Added</span>
      <span>⏱</span>
    </div>

    {likedSongs.map((song, index) => (
      <div
        key={song.id}
        className="grid grid-cols-[50px_3fr_2fr_2fr_80px] items-center py-3 hover:bg-white/5 rounded-xl px-2 transition-all"
      >
        <span>{index + 1}</span>

        <div className="flex items-center gap-3">
          <img
            src={song.cover}
            alt={song.title}
            className="w-12 h-12 rounded-lg object-cover"
          />

          <div>
            <h3 className="text-white">{song.title}</h3>
            <p className="text-sm text-gray-400">
              {song.artist}
            </p>
          </div>
        </div>

        <span className="text-gray-400">
          {song.album}
        </span>

        <span className="text-gray-400">
          {song.dateAdded}
        </span>

        <div className="flex items-center gap-3">
          <i className="ri-heart-fill text-pink-500"></i>
          <span>{song.duration}</span>
        </div>
      </div>
    ))}

  </div>

  {/* Mobile Songs */}
  <div className="md:hidden mt-6 space-y-3">

    {likedSongs.map((song) => (
      <div
        key={song.id}
        className="flex items-center justify-between bg-white/5 rounded-xl p-3"
      >
        <div className="flex items-center gap-3">

          <img
            src={song.cover}
            alt={song.title}
            className="w-14 h-14 rounded-lg object-cover"
          />

          <div>
            <h3 className="text-white font-medium">
              {song.title}
            </h3>

            <p className="text-sm text-gray-400">
              {song.artist}
            </p>
          </div>

        </div>

        <div className="text-right">
          <i className="ri-heart-fill text-pink-500"></i>
          <p className="text-sm text-gray-400 mt-1">
            {song.duration}
          </p>
        </div>
      </div>
    ))}

  </div>

</div>
  )
}

export default Liked
