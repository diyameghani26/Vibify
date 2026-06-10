const HomeSkeleton = () => {
  return (
    <div className="flex flex-col gap-6 animate-pulse">

      {/* Greeting */}
      <div className="h-10 w-64 bg-white/10 rounded-lg mx-2 sm:mx-6 lg:mx-10 mt-3" />

      {/* Hero Banner */}
      <div className="px-1 sm:px-2 lg:px-1">
        <div className="h-55 sm:h-70 lg:h-90 rounded-3xl bg-white/10" />
      </div>

      {/* Trending Header */}
      <div className="flex items-center justify-between px-4">
        <div className="h-8 w-40 bg-white/10 rounded-lg" />
        <div className="h-6 w-20 bg-white/10 rounded-lg" />
      </div>

      {/* Track List */}
      <div className="sm:px-4 lg:px-10 space-y-3">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-3 rounded-lg"
          >
            {/* Number */}
            <div className="w-4 h-4 bg-white/10 rounded" />

            {/* Cover */}
            <div className="w-12 h-12 bg-white/10 rounded" />

            {/* Title + Artist */}
            <div className="flex-1">
              <div className="h-4 w-32 bg-white/10 rounded mb-2" />
              <div className="h-3 w-24 bg-white/10 rounded" />
            </div>

            {/* Heart */}
            <div className="w-5 h-5 bg-white/10 rounded-full" />

            {/* Duration */}
            <div className="h-4 w-10 bg-white/10 rounded" />
          </div>
        ))}
      </div>

    </div>
  )
}

export default HomeSkeleton