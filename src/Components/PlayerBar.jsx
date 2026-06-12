import React from "react";
import PlayerBarMobile from "./PlayerBarMobile";
import PlayerBarDesktop from "./PlayerBarDesktop";
import useAudioPlayer from "../hooks/useAudioPlayer";

const PlayerBar = ({
  currentTrack,
  setCurrentTrack,
  isPlaying,
  setIsPlaying,
  allTracks,
}) => {
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
    </>
  );
};

export default PlayerBar;