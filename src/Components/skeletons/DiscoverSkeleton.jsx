const DiscoverSkeleton = () => {
  return (
    <div className="pb-34 md:pb-29 px-4 animate-pulse">

      {/* Genre Pills */}
      <div className="flex gap-3 overflow-hidden mt-6 md:justify-center">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="h-10 w-24 rounded-full bg-white/10"
          />
        ))}
      </div>

      {/* Track Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="bg-white/5 rounded-xl p-3"
          >
            <div className="aspect-square rounded-lg bg-white/10" />

            <div className="h-4 w-3/4 bg-white/10 rounded mt-3" />

            <div className="h-3 w-1/2 bg-white/10 rounded mt-2" />
          </div>
        ))}
      </div>

    </div>
  )
}

export default DiscoverSkeleton