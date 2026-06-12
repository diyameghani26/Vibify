import React from "react";

const ProgressBar = ({
  progress,
  currentTime,
  duration,
  formatTime,
  handleSeek
}) => {
  return (
    <div className="w-full sm:hidden md:block">
      <div className="flex justify-between text-xs text-gray-400 mb-1">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>

    <input
  type="range"
  min="0"
  max="100"
  value={progress}
  onChange={handleSeek}
  className="w-full accent-pink-500 cursor-pointer"
/>
    </div>
  );
};

export default ProgressBar;