import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Queue = ({
  showQueue,
  setShowQueue,
  queue,
  currentTrack,
  setCurrentTrack,
  setIsPlaying,
}) => {
  return (
    <AnimatePresence>
      {showQueue && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="fixed inset-0 z-[100000] bg-gradient-to-b from-[#0f0f0f] via-[#b10d6c] to-[#0f0f0f] sm:hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-5">
            <button
              onClick={() => setShowQueue(false)}
              className="text-white"
            >
              <i className="ri-arrow-left-line text-3xl"></i>
            </button>

            <h2 className="text-white text-xl font-bold">
              Queue
            </h2>

            <div className="w-8"></div>
          </div>

          {/* Now Playing */}
<div className="px-4 mb-6">
  <p className="text-gray-300 text-sm mb-3">
    Now Playing
  </p>

  <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/10 border border-white/10">
    <img
      src={currentTrack.cover}
      alt={currentTrack.title}
      className="w-16 h-16 rounded-xl object-cover"
    />

    <div className="flex-1">
      <h3 className="text-white font-semibold">
        {currentTrack.title}
      </h3>

      <p className="text-gray-300 text-sm">
        {currentTrack.artist}
      </p>
    </div>

    <div className="text-pink-500">
      <i className="ri-volume-up-fill text-xl"></i>
    </div>
  </div>
</div>

          {/* Subtitle */}
          <div className="px-5 mb-4">
            <p className="text-gray-300 text-sm">
              Up Next
            </p>
          </div>

          {/* Queue List */}
          <div className="px-4 space-y-3 overflow-y-auto h-[85vh] pb-10 no-scrollbar">
            {queue?.map((track, index) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.03,
                }}
                onClick={() => {
                  setCurrentTrack(track);
                  setIsPlaying(true);
                  setShowQueue(false);
                }}
                className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10"
              >
                <img
                  src={track.cover}
                  alt={track.title}
                  className="w-14 h-14 rounded-xl object-cover"
                />

                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-medium truncate">
                    {track.title}
                  </h3>

                  <p className="text-gray-300 text-sm truncate">
                    {track.artist}
                  </p>
                </div>

                <span className="text-gray-400 text-sm">
                  {track.duration}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Queue;