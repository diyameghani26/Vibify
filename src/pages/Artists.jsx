import artists from "../data/artists";
import { useNavigate } from 'react-router-dom'

const Artists = () => {
   const navigate = useNavigate()
  
  const handleArtistClick = (artist) => {
    navigate(`/artist/${artist.id}`)
  }
  return (
    <div className="bg-black min-h-screen text-white px-4 sm:px-8 py-6">

      {/* Heading */}
      <div className="mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold">
          Featured Artists
        </h1>

        <p className="text-pink-200 mt-2">
          Discover the creators behind the rhythm.
        </p>
      </div>

      {/* Artists Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

        {artists.map((artist) => (
          <div
            key={artist.id}
             onClick={() => handleArtistClick(artist)}
            className="
            bg-[#111111]
            rounded-2xl
            p-6
            text-center
            group
            hover:bg-[#1b1b1b]
            transition-all
            duration-500
            "
          >
            {/* Image */}
            <div className="overflow-hidden rounded-full w-45 h-45 mx-auto">
              <img
                src={artist.image}
                alt={artist.name}
                className="
                w-full
                h-full
                object-cover
                rounded-full
                grayscale
                group-hover:grayscale-0
                group-hover:scale-110
                transition-all
                duration-700
                "
              />
            </div>

            {/* Name */}
            <h2 className="mt-6 text-xl font-bold">
              {artist.name}
            </h2>

            {/* Genre */}
            <span
              className="
              inline-block
              mt-3
              px-3
              py-1
              text-xs
              rounded-full
              bg-pink-500/20
              text-pink-300
              uppercase
              tracking-wider
              "
            >
              {artist.genre}
            </span>

            {/* Followers */}
            <p className="mt-3 text-gray-400 text-sm">
              {artist.followers} Followers
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Artists;
