const LikedSkeleton = () => {
  return (
    <div className="pb-32 px-4 sm:px-6 lg:px-8 pt-6 animate-pulse">

      {/* Hero */}
      <div className="flex flex-col md:flex-row gap-6 md:items-end">

        <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-2xl bg-white/10" />

        <div className="flex-1">
          <div className="h-3 w-20 bg-white/10 rounded mb-4" />

          <div className="h-12 sm:h-16 w-72 bg-white/10 rounded mb-6" />

          <div className="flex gap-3">
            <div className="h-12 w-32 bg-white/10 rounded-full" />
            <div className="h-12 w-12 bg-white/10 rounded-full" />
          </div>
        </div>

      </div>

      {/* Controls */}
      <div className="flex justify-between items-center mt-10 border-b border-white/10 pb-4">

        <div className="h-5 w-12 bg-white/10 rounded" />

        <div className="h-5 w-20 bg-white/10 rounded" />

      </div>

      {/* Tracks */}
      <div className="mt-6 space-y-3">

        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-between bg-white/5 rounded-xl p-3"
          >
            <div className="flex items-center gap-3">

              <div className="w-14 h-14 rounded-lg bg-white/10" />

              <div>
                <div className="h-4 w-32 bg-white/10 rounded mb-2" />
                <div className="h-3 w-20 bg-white/10 rounded" />
              </div>

            </div>

            <div>
              <div className="w-5 h-5 rounded-full bg-white/10 mb-2" />
              <div className="h-3 w-10 bg-white/10 rounded" />
            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

export default LikedSkeleton