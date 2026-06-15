import React from "react";
import PlayerBarMobile from "./PlayerBarMobile";
import PlayerBarDesktop from "./PlayerBarDesktop";
import useAudioPlayer from "../hooks/useAudioPlayer";
import { useState } from "react";
import NowPlayingMobile from "./NowPlayingMobile";
import Queue from "./Queue";
import QueueDesktop from "./QueueDesktop";

const PlayerBar = ({
  currentTrack,
  setCurrentTrack,
  isPlaying,
  setIsPlaying,
  allTracks,
}) => {
  const [showNowPlaying, setShowNowPlaying] = useState(false);
  const [showQueue, setShowQueue] = useState(false);
  const [showQueueDesktop, setShowQueueDesktop] = useState(false);
  
  const [queue, setQueue] = useState(allTracks);
  const player = useAudioPlayer(
    currentTrack,
    setCurrentTrack,
    isPlaying,
    setIsPlaying,
    allTracks
     
    
  );

  return (
    <>
      <PlayerBarMobile
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        handlePlay={player.handlePlay}
        handleNext={player.handleNext}
        handlePrev={player.handlePrev}
        handleSeek={player.handleSeek}
          setShowNowPlaying={setShowNowPlaying}
      />

      

      <PlayerBarDesktop
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        handlePlay={player.handlePlay}
        handleNext={player.handleNext}
        handlePrev={player.handlePrev}
        handleShuffle={player.handleShuffle}
        handleRepeat={player.handleRepeat}
        repeatMode={player.repeatMode}
        progress={player.progress}
        currentTime={player.currentTime}
        duration={player.duration}
        formatTime={player.formatTime}
        volume={player.volume}
        setVolume={player.setVolume}
        isMuted={player.isMuted}
        handleMute={player.handleMute}
        handleSeek={player.handleSeek}
        showQueueDesktop={showQueueDesktop}
  setShowQueueDesktop={setShowQueueDesktop}
      />





      <NowPlayingMobile
  showNowPlaying={showNowPlaying}
  setShowNowPlaying={setShowNowPlaying}
  currentTrack={currentTrack}
  isPlaying={isPlaying}
  handlePlay={player.handlePlay}
  handleNext={player.handleNext}
  handlePrev={player.handlePrev}
   handleShuffle={player.handleShuffle}
  handleRepeat={player.handleRepeat}
  repeatMode={player.repeatMode}
  isShuffleOn={player.isShuffleOn}
  setShowQueue={setShowQueue}
/>

<Queue
  showQueue={showQueue}
  setShowQueue={setShowQueue}
  queue={queue}
  currentTrack={currentTrack}
  setCurrentTrack={setCurrentTrack}
  setIsPlaying={setIsPlaying}
/>

<QueueDesktop
  showQueueDesktop={showQueueDesktop}
  setShowQueueDesktop={setShowQueueDesktop}
  queue={queue}
  currentTrack={currentTrack}
  setCurrentTrack={setCurrentTrack}
  setIsPlaying={setIsPlaying}
/>


    </>

    
  );
};

export default PlayerBar;