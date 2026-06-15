import React from "react";
import PlayerBarMobile from "./PlayerBarMobile";
import PlayerBarDesktop from "./PlayerBarDesktop";
import useAudioPlayer from "../hooks/useAudioPlayer";
import { useState } from "react";
import NowPlayingMobile from "./NowPlayingMobile";

const PlayerBar = ({
  currentTrack,
  setCurrentTrack,
  isPlaying,
  setIsPlaying,
  allTracks,
}) => {
  const [showNowPlaying, setShowNowPlaying] = useState(false);
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
      />




      <NowPlayingMobile
  showNowPlaying={showNowPlaying}
  setShowNowPlaying={setShowNowPlaying}
  currentTrack={currentTrack}
  isPlaying={isPlaying}
  handlePlay={player.handlePlay}
  handleNext={player.handleNext}
  handlePrev={player.handlePrev}
/>
    </>

    
  );
};

export default PlayerBar;