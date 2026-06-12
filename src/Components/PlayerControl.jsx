import React from "react";

const PlayerControls = ({
  isPlaying,
  handlePlay,
  handleNext,
  handlePrev,
  handleShuffle,
  handleRepeat,
  repeatMode,
}) => {
  return (
    <div className="flex items-center gap-6">

      {/* Shuffle */}
      <button
        onClick={handleShuffle}
        className="text-gray-400 hover:text-pink-500"
      >
        <i className="ri-shuffle-line text-xl"></i>
      </button>

      {/* Previous */}
      <button
        onClick={handlePrev}
        className="text-gray-400 hover:text-white"
      >
        <i className="ri-skip-back-fill text-2xl"></i>
      </button>

      {/* Play / Pause */}
      <button
        onClick={handlePlay}
        className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition"
      >
        <i
          className={`text-2xl text-white ${
            isPlaying ? "ri-pause-fill" : "ri-play-fill"
          }`}
        ></i>
      </button>

      {/* Next */}
      <button
        onClick={handleNext}
        className="text-gray-400 hover:text-white"
      >
        <i className="ri-skip-forward-fill text-2xl"></i>
      </button>

      {/* Repeat */}
      <button
        onClick={handleRepeat}
        className={`text-xl transition-all relative ${
          repeatMode === "none"
            ? "text-gray-400 hover:text-pink-500"
            : "text-pink-500"
        }`}
      >
        <i className="ri-repeat-line"></i>

        {repeatMode === "one" && (
          <span className="absolute -top-2 -right-2 text-[10px] bg-pink-500 text-white px-1 rounded">
            1
          </span>
        )}
      </button>

    </div>
  );
};

export default PlayerControls;