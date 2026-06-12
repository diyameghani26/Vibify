import React from "react";

const PlayerBarMobile = ({
  currentTrack,
  isPlaying,
  handlePlay,
  handleNext,
  handlePrev,
}) => {
  return (
    <div className="fixed block bottom-16 bg-linear-to-r from-[#0f0f0f] via-[#b10d6c] to-[#0f0f0f] sm:hidden w-full px-2 py-2 -ml-3 rounded-2xl z-50">
      <div className="flex items-center justify-between gap-2">

        {/* Left - Song Info */}
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <img
            src={currentTrack.cover}
            alt={currentTrack.title}
            className="w-10 h-10 rounded"
          />

          <div className="min-w-0">
            <p className="text-white text-xs font-semibold truncate">
              {currentTrack.title}
            </p>

            <p className="text-gray-400 text-xs truncate">
              {currentTrack.artist}
            </p>
          </div>
        </div>

        {/* Right - Controls */}
        <div className="flex items-center gap-2 shrink-0">

          <button
            onClick={handlePrev}
            className="text-gray-400 hover:text-white"
          >
            <i className="ri-skip-back-fill text-2xl"></i>
          </button>

          <button
            onClick={handlePlay}
            className="w-9 h-9 bg-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition"
          >
            <i
              className={`text-white text-xl ${
                isPlaying ? "ri-pause-fill" : "ri-play-fill"
              }`}
            ></i>
          </button>

          <button
            onClick={handleNext}
            className="text-gray-400 hover:text-white"
          >
            <i className="ri-skip-forward-fill text-2xl"></i>
          </button>

        </div>
      </div>
    </div>
  );
};

export default PlayerBarMobile;