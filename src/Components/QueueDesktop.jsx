import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const QueueDesktop = ({
  showQueueDesktop,
  setShowQueueDesktop,
  queue,
  currentTrack,
  setCurrentTrack,
  setIsPlaying,
}) => {
  return (
    <AnimatePresence>
      {showQueueDesktop && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.25 }}
          className="hidden sm:block fixed bottom-24 right-5 w-[370px] h-[520px] bg-[#111111]/95 backdrop-blur-xl border border-pink-500/10 rounded-3xl z-[99999] overflow-hidden shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-white/10">
            <h2 className="text-white font-semibold text-lg">
              Queue
            </h2>

            <button
              onClick={() => setShowQueueDesktop(false)}
              className="text-gray-400 hover:text-white"
            >
              <i className="ri-close-line text-2xl"></i>
            </button>
          </div>

          {/* Now Playing */}
          <div className="p-4 border-b border-white/10">
            <p className="text-xs uppercase text-gray-400 mb-3">
              Now Playing
            </p>

            <div className="flex items-center gap-3">
              <img
                src={currentTrack.cover}
                alt={currentTrack.title}
                className="w-14 h-14 rounded-xl"
              />

              <div className="min-w-0">
                <p className="text-white font-medium truncate">
                  {currentTrack.title}
                </p>

                <p className="text-gray-400 text-sm truncate">
                  {currentTrack.artist}
                </p>
              </div>
            </div>
          </div>

          {/* Queue */}
          <div className="p-4 h-[360px] overflow-y-auto no-scrollbar">
            <p className="text-xs uppercase text-gray-400 mb-3">
              Up Next
            </p>

            <div className="space-y-2">
              {queue?.map((track) => (
                <div
                  key={track.id}
                  onClick={() => {
                    setCurrentTrack(track);
                    setIsPlaying(true);
                    setShowQueueDesktop(false);
                  }}
                  className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 cursor-pointer transition"
                >
                  <img
                    src={track.cover}
                    alt={track.title}
                    className="w-12 h-12 rounded-lg"
                  />

                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm truncate">
                      {track.title}
                    </p>

                    <p className="text-gray-400 text-xs truncate">
                      {track.artist}
                    </p>
                  </div>

                  <span className="text-gray-500 text-xs">
                    {track.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QueueDesktop;
