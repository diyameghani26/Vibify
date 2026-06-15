import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const NowPlayingMobile = ({
  showNowPlaying,
  setShowNowPlaying,
  currentTrack,
  isPlaying,
  handlePlay,
  handleNext,
  handlePrev,
}) => {
  if (!showNowPlaying || !currentTrack) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{
          duration: 0.35,
          ease: "easeInOut",
        }}
        className="fixed inset-0 z-[9999] sm:hidden overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f] via-[#b10d6c] to-[#0f0f0f]" />

        {/* Blur Glow */}
        <div className="absolute top-32 left-1/2 -translate-x-1/2 w-72 h-72 bg-pink-500/30 blur-[120px] rounded-full" />

        {/* Content */}
        <div className="relative h-full flex flex-col px-6 pt-8 pb-10">
          
          {/* Header */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setShowNowPlaying(false)}
              className="text-white"
            >
              <i className="ri-arrow-down-s-line text-3xl"></i>
            </button>

            <p className="text-white/80 text-sm tracking-widest">
              NOW PLAYING
            </p>

            <button className="text-white">
              <i className="ri-more-2-fill text-xl"></i>
            </button>
          </div>

          {/* Album Cover */}
       {/* Vinyl Record */}
<div className="flex-1 flex items-center justify-center">
  <motion.div
    animate={
      isPlaying
        ? { rotate: 360 }
        : { rotate: 0 }
    }
    transition={{
      duration: 15,
      repeat: Infinity,
      ease: "linear",
    }}
    className="relative w-[320px] h-[320px]"
  >
    {/* Pink Glow */}
    <div className="absolute inset-0 rounded-full bg-pink-500/30 blur-3xl scale-110"></div>

    {/* Vinyl Disc */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-zinc-900 via-black to-zinc-800 shadow-[0_20px_80px_rgba(0,0,0,0.8)] overflow-hidden">

      {/* Vinyl Grooves */}
      <div className="absolute inset-4 rounded-full border border-white/5"></div>
      <div className="absolute inset-8 rounded-full border border-white/5"></div>
      <div className="absolute inset-12 rounded-full border border-white/5"></div>
      <div className="absolute inset-16 rounded-full border border-white/5"></div>
      <div className="absolute inset-20 rounded-full border border-white/5"></div>

      {/* Album Cover */}
      <div className="absolute inset-14 rounded-full overflow-hidden border-4 border-white/10">
        <img
          src={currentTrack.cover}
          alt={currentTrack.title}
          className="w-full h-full object-cover"
        />
      </div>

     
    </div>
  </motion.div>
</div>

          {/* Song Info */}
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-white text-2xl font-bold">
                  {currentTrack.title}
                </h2>

                <p className="text-gray-300 mt-1">
                  {currentTrack.artist}
                </p>
              </div>

              <button>
                <i className="ri-heart-fill text-pink-500 text-2xl"></i>
              </button>
            </div>
          </div>

          {/* Progress */}
          <div className="mb-1">
            <div className="h-1 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full w-1/3 bg-white rounded-full"></div>
            </div>

            <div className="flex justify-between mt-2 text-xs text-gray-300">
              <span>1:12</span>
              <span>{currentTrack.duration}</span>
            </div>
          </div>

        {/* Controls */}
<div className="flex items-center justify-between mt-6 px-2">

  {/* Shuffle */}
  <button className="text-white/80">
    <i className="ri-shuffle-line text-2xl"></i>
  </button>

  {/* Previous */}
  <button
    onClick={handlePrev}
    className="text-white"
  >
    <i className="ri-skip-back-fill text-4xl"></i>
  </button>

  {/* Play Pause */}
  <button
    onClick={handlePlay}
    className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl"
  >
    <i
      className={`text-black text-3xl ${
        isPlaying
          ? "ri-pause-fill"
          : "ri-play-fill"
      }`}
    ></i>
  </button>

  {/* Next */}
  <button
    onClick={handleNext}
    className="text-white"
  >
    <i className="ri-skip-forward-fill text-4xl"></i>
  </button>

  {/* Queue */}
  <button className="text-white/80">
    <i className="ri-play-list-2-line text-2xl"></i>
  </button>

  {/* Repeat */}
  <button className="text-white/80">
    <i className="ri-repeat-line text-2xl"></i>
  </button>

</div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default NowPlayingMobile;