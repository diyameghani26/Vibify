import React from "react";

const ProgressBar = ({
  progress,
  currentTime,
  duration,
  formatTime,
}) => {
  return (
    <div className="w-full sm:hidden md:block">
      <div className="flex justify-between text-xs text-gray-400 mb-1">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>

      <div className="h-1 bg-gray-700 rounded-full overflow-hidden mb-3">
        <div
          className="h-full bg-pink-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;