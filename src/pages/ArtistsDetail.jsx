
import React from 'react'
import { useParams } from 'react-router-dom'
import tracks from '../data/track'
import artists from '../data/artists'

const ArtistsDetail = () => {
  const { id } = useParams()

  const artist = artists.find((a) => a.id === id)

  if (!artist) {
    return (
      <h1 className="text-white p-6">
        Artist not found
      </h1>
    )
  }

  const artistSongs = tracks.filter(
    (t) =>
      t.artist.toLowerCase() ===
      artist.name.toLowerCase()
  )

  return (
    <div className="pb-32 px-4 sm:px-6 lg:px-10 pt-6">

      {/* Hero Banner */}
      <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden mb-10">

        <img
          src={artist.image}
          alt={artist.name}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        <div className="absolute bottom-8 left-6 sm:left-10">

          <p className="text-pink-400 text-sm uppercase tracking-wider">
            Featured Artist
          </p>

          <h1 className="text-4xl sm:text-6xl font-bold text-white">
            {artist.name}
          </h1>

          <p className="text-pink-300 mt-2">
            {artist.genre} • {artist.followers} Followers
          </p>

          <div className="flex gap-4 mt-6">
            <button className="bg-pink-500 text-white px-8 py-3 rounded-full hover:scale-105 transition-all">
              <i className="ri-play-fill mr-1"></i>
              Play
            </button>

            <button className="border border-pink-500 text-pink-400 px-8 py-3 rounded-full hover:bg-pink-500 hover:text-white transition-all">
              Follow
            </button>
          </div>

        </div>
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-3 gap-8">

        {/* Left Side */}
        <div className="lg:col-span-2">

          <h2 className="text-2xl font-bold text-white mb-6">
            Popular Tracks
          </h2>

          <div className="space-y-2">

            {artistSongs.map((track, index) => (
              <div
                key={track.id}
                className="
                flex items-center
                gap-4
                p-3
                rounded-xl
                hover:bg-white/5
                transition-all
                cursor-pointer
                "
              >

                {/* Number */}
                <span className="text-gray-500 w-6">
                  {index + 1}
                </span>

                {/* Cover */}
                <img
                  src={track.cover}
                  alt={track.title}
                  className="w-14 h-14 rounded-lg object-cover"
                />

                {/* Info */}
                <div className="flex-1 min-w-0">

                  <p className="text-white font-semibold truncate">
                    {track.title}
                  </p>

                  <p className="text-gray-400 text-sm truncate">
                    {track.artist}
                  </p>

                </div>

                {/* Duration */}
                <span className="text-gray-400 hidden sm:block">
                  {track.duration}
                </span>

                {/* Like */}
                <button className="text-gray-400 hover:text-pink-500">
                  <i className="ri-heart-line text-lg"></i>
                </button>

              </div>
            ))}

          </div>

        </div>

        {/* Right Side */}
        <div className="space-y-4">

          {/* Latest Release */}
          <div className="bg-white/5 rounded-2xl p-4">

            <h3 className="text-xl font-semibold text-white mb-4">
              Latest Release
            </h3>

            <img
              src={artistSongs[0]?.cover}
              alt={artistSongs[0]?.title}
              className="w-full h-56 rounded-xl object-cover"
            />

            <h4 className="text-white font-semibold mt-4">
              {artistSongs[0]?.title}
            </h4>

            <p className="text-pink-400">
              {artistSongs[0]?.genre}
            </p>

          </div>

          {/* Followers */}
          <div className="bg-white/5 p-4 rounded-2xl">

            <p className="text-gray-400">
              Followers
            </p>

            <h3 className="text-2xl font-bold text-white">
              {artist.followers}
            </h3>

          </div>

          {/* Genre */}
          <div className="bg-white/5 p-4 rounded-2xl">

            <p className="text-gray-400">
              Genre
            </p>

            <h3 className="text-2xl font-bold text-pink-400">
              {artist.genre}
            </h3>

          </div>

        </div>

      </div>

      {/* About Artist */}
<div className="mt-10 grid lg:grid-cols-[1fr_280px] gap-6">

  {/* About Artist Card */}
  <div className="bg-white/5 p-6 rounded-2xl">

    <h2 className="text-2xl font-bold text-white mb-4">
      About Artist
    </h2>

    <p className="text-gray-300 text-sm md:text-base leading-5 md:leading-7">
        {artist.name} is a rising force in the world of {artist.genre.toLowerCase()} music, recognized for creating immersive soundscapes that blend emotion, creativity, and modern production. With a unique artistic vision, every track is designed to take listeners on a journey, whether it's through relaxing melodies, atmospheric textures, energetic rhythms, or deeply expressive compositions.

        <span className="hidden lg:inline">
          {" "}Over the years, {artist.name} has built a dedicated community of {artist.followers} followers who appreciate the authenticity and depth of their music. Their catalog reflects a passion for storytelling through sound, with each release offering a distinct mood and listening experience.

          Known for attention to detail and a commitment to artistic growth, {artist.name} continues to push creative boundaries and explore fresh musical directions, delivering memorable experiences for listeners around the world.
        </span>
      </p>


  </div>

  {/* Stats Cards */}
  <div className="flex flex-col gap-4">

    <div className="bg-white/5 p-4 rounded-2xl">
      <p className="text-gray-400">Global Rank</p>
      <h3 className="text-2xl font-bold text-white">
        {artist.globalRank}
      </h3>
    </div>

    <div className="bg-white/5 p-4 rounded-2xl">
      <p className="text-gray-400">Social Followers</p>
      <h3 className="text-2xl font-bold text-pink-400">
        {artist.socialFollowers}
      </h3>
    </div>

    <div className="bg-white/5 p-4 rounded-2xl">
      <p className="text-gray-400">Monthly Listeners</p>
      <h3 className="text-2xl font-bold text-white">
        {artist.monthlyListeners}
      </h3>
    </div>

  </div>

</div>
 

    </div>
  )
}

export default ArtistsDetail