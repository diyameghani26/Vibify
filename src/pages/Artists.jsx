import artists from "../data/artists";
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";
import ArtistsSkeleton from "../Components/skeletons/AtistSkeleton";
import PageWrapper from "../components/PageWrapper";
const Artists = () => {
  const navigate = useNavigate()
  const handleArtistClick = (artist) => {
    navigate(`/artist/${artist.id}`)
  }

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  if (loading) {
    return <ArtistsSkeleton />
  }
  return (
    <PageWrapper>
      <div className="bg-black/30 min-h-screen text-white pb-20 md:px-4 sm:px-8 py-3 md:py-6">

        {/* Heading */}
        <div className="mb-10 ">
          <h1 className="text-4xl  text-center sm:text-5xl md:text-6xl font-bold">
            Featured Artists
          </h1>

          <p className="text-pink-200 text-sm md:text-base text-center mt-2">
            Discover the creators behind the rhythm.
          </p>
        </div>

        {/* Artists Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {artists.map((artist) => (
              <div
                key={artist.id}
                onClick={() => handleArtistClick(artist)}
                className=" bg-[#111111] rounded-2xl  overflow-hidden  p-4 md:p-5 h-60 sm:h-auto text-center  group cursor-pointer  hover:bg-[#1b1b1b] transition-all duration-500 w-full"
              >
                {/* Image */}
                <div className="overflow-hidden rounded-full w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 mx-auto">
                  <img
                    src={artist.image} alt={artist.name}
                    className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 group-hover:scale-10 transition-all duration-700"
                  />
                </div>

                {/* Name */}
                <h2 className="mt-5 text-lg sm:text-xl font-bold">
                  {artist.name}
                </h2>

                {/* Genre */}
                <span
                  className=" inline-block mt-3 px-3  py-1 text-[10px] sm:text-xs rounded-full  bg-pink-500/20 text-pink-300 uppercase tracking-wide">
                  {artist.genre}
                </span>

                {/* Followers */}
                <p className="mt-3 text-gray-400 text-xs sm:text-sm">
                  {artist.followers} Followers
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Rising Talents */}
        <div className="mt-16 mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Rising Talents
          </h2>

          <div className="grid lg:grid-cols-[2fr_1fr] gap-6">

            {/* Large Featured Card */}
            <div className="relative overflow-hidden rounded-3xl h-87.5 group cursor-pointer">

              <img
                src="/covers/pulse-theory.jpg" alt="Electric Vibes"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
              />

              <div className="absolute inset-0 bg-black/40"></div>

              <div className="absolute bottom-8 left-8 max-w-md">
                <span className="bg-pink-500/20 text-pink-300 px-4 py-1 rounded-full text-xs uppercase">
                  Trending Now
                </span>

                <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-4">
                  Pulse Theory
                </h3>

                <p className="text-gray-300 mt-3 text-sm md:text-base">
                  The underground sensation from Berlin is taking over the global techno scene with their latest album"oscillation"
                </p>

                <button className="mt-5 px-6 py-3 bg-pink-500 rounded-full font-semibold hover:bg-pink-600 transition-all">
                  Follow Artist
                </button>
              </div>
            </div>

            {/* Right Cards */}
            <div className="flex flex-col gap-6">

              <div className="bg-[#111111] rounded-3xl p-5 flex items-center gap-4 hover:bg-[#1b1b1b] transition-all">
                <img
                  src="/covers/nova.jpg"
                  alt=""
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-bold text-lg">
                    Nova Drift
                  </h3>

                  <p className="text-pink-300 text-sm">
                    420K Followers
                  </p>
                </div>
              </div>

              <div className="bg-[#111111] rounded-3xl p-5 flex items-center gap-4 hover:bg-[#1b1b1b] transition-all">
                <img
                  src="/covers/static-void.jpg" alt="static-void"
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-bold text-lg">
                    Static Void
                  </h3>

                  <p className="text-pink-300 text-sm">
                    1.8M Followers
                  </p>
                </div>
              </div>

              <div className="bg-[#111111] rounded-3xl p-5 flex items-center gap-4 hover:bg-[#1b1b1b] transition-all">
                <img
                  src="/covers/pulse-theory.jpg"
                  alt=""
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-bold text-lg">
                    Pulse Theory
                  </h3>

                  <p className="text-pink-300 text-sm">
                    890K Followers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Artists;
