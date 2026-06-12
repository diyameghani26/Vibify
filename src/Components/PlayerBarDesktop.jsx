import React from "react";
import PlayerControls from "./PlayerControl";
import ProgressBar from "./ProgressBar";

const PlayerBarDesktop = ({
  currentTrack,
  isPlaying,
  handlePlay,
  handleNext,
  handlePrev,
  handleShuffle,
  handleRepeat,
  repeatMode,
  progress,
  currentTime,
  duration,
  formatTime,
  volume,
  setVolume,
  isMuted,
  handleMute,
  handleSeek
}) => {
  return (
    <div className="hidden sm:block fixed md:bottom-0 w-full bg-[#111111] border-t border-pink-500/20 px-4 py-3 z-50">
      <div className="flex items-center justify-between gap-4">

        {/* Left - Song Info */}
        <div className="flex items-center gap-3 w-48">
          <img
            src={currentTrack.cover}
            alt={currentTrack.title}
            className="w-12 h-12 rounded"
          />

          <div className="min-w-0">
            <p className="text-white text-sm font-semibold truncate md:text-lg">
              {currentTrack.title}
            </p>

            <p className="text-gray-400 text-xs md:text-sm truncate">
              {currentTrack.artist}
            </p>
          </div>
        </div>

        {/* Center */}
        <div className="flex flex-col items-center flex-1">

          <PlayerControls
            isPlaying={isPlaying}
            handlePlay={handlePlay}
            handleNext={handleNext}
            handlePrev={handlePrev}
            handleShuffle={handleShuffle}
            handleRepeat={handleRepeat}
            repeatMode={repeatMode}
          />

          <ProgressBar
            progress={progress}
            currentTime={currentTime}
            duration={duration}
            formatTime={formatTime}
            handleSeek={handleSeek}
          />
        </div>

        {/* Right - Volume */}
        <div className="flex items-center gap-2 w-32 mr-6 justify-end">

          <button
            onClick={handleMute}
            className="text-gray-400 hover:text-pink-500"
          >
            <i
              className={
                isMuted
                  ? "ri-volume-mute-fill text-xl"
                  : "ri-volume-down-fill text-3xl"
              }
            ></i>
          </button>

          <input
            type="range"
            min="0"
            max="100"
            value={volume * 100}
            onChange={(e) => setVolume(e.target.value / 100)}
            className="w-20 h-1 bg-gray-700 rounded-full accent-pink-500"
          />
        </div>

      </div>
    </div>
  );
};

export default PlayerBarDesktop;