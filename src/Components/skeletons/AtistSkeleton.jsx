const ArtistsSkeleton = () => {
  return (
    <div className="min-h-screen pb-20 px-4 sm:px-8 py-6 animate-pulse">

      {/* Heading */}
      <div className="mb-10 flex flex-col items-center">
        <div className="h-12 w-72 bg-white/10 rounded-lg" />
        <div className="h-4 w-48 bg-white/10 rounded mt-4" />
      </div>

      {/* Artists Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="bg-white/5 rounded-2xl p-4 text-center"
            >
              <div className="w-28 h-28 sm:w-36 sm:h-36 mx-auto rounded-full bg-white/10" />

              <div className="h-5 w-24 bg-white/10 rounded mx-auto mt-5" />

              <div className="h-4 w-16 bg-white/10 rounded-full mx-auto mt-3" />

              <div className="h-3 w-20 bg-white/10 rounded mx-auto mt-3" />
            </div>
          ))}

        </div>
      </div>

      {/* Rising Talents */}
      <div className="mt-16">

        <div className="h-10 w-56 bg-white/10 rounded mb-6" />

        <div className="grid lg:grid-cols-[2fr_1fr] gap-6">

          {/* Large Card */}
          <div className="h-[350px] rounded-3xl bg-white/10" />

          {/* Side Cards */}
          <div className="flex flex-col gap-6">

            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-white/5 rounded-3xl p-5 flex items-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-white/10" />

                <div className="flex-1">
                  <div className="h-4 w-24 bg-white/10 rounded mb-2" />
                  <div className="h-3 w-20 bg-white/10 rounded" />
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  )
}

export default ArtistsSkeleton