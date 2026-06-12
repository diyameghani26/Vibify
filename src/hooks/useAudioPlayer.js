import { useState, useEffect, useRef } from "react";

const useAudioPlayer = (
  currentTrack,
  setCurrentTrack,
  isPlaying,
  setIsPlaying,
  allTracks
) => {
  const [repeatMode, setRepeatMode] = useState("none");
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(new Audio());

  // Repeat
  const handleRepeat = () => {
    if (repeatMode === "none") setRepeatMode("all");
    else if (repeatMode === "all") setRepeatMode("one");
    else setRepeatMode("none");
  };

  // Time formatter
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Shuffle
  const handleShuffle = () => {
    if (allTracks.length <= 1) return;

    const currentIndex = allTracks.findIndex(
      (track) => track.id === currentTrack.id
    );

    let randomIndex;

    do {
      randomIndex = Math.floor(Math.random() * allTracks.length);
    } while (randomIndex === currentIndex);

    setCurrentTrack(allTracks[randomIndex]);
    setIsPlaying(true);
  };

  // Play Pause
  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Mute
  const handleMute = () => {
    setIsMuted(!isMuted);
  };

  // Next
  const handleNext = () => {
    const currentIndex = allTracks.findIndex(
      (track) => track.id === currentTrack.id
    );

    const nextIndex =
      currentIndex === allTracks.length - 1
        ? 0
        : currentIndex + 1;

    setCurrentTrack(allTracks[nextIndex]);
  };

  // Prev
  const handlePrev = () => {
    const currentIndex = allTracks.findIndex(
      (track) => track.id === currentTrack.id
    );

    const prevIndex =
      currentIndex === 0
        ? allTracks.length - 1
        : currentIndex - 1;

    setCurrentTrack(allTracks[prevIndex]);
  };

  // Progress Tracking
  useEffect(() => {
    const audio = audioRef.current;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress(
          (audio.currentTime / audio.duration) * 100
        );

        setCurrentTime(audio.currentTime);
        setDuration(audio.duration);
      }
    };

    audio.addEventListener("timeupdate", updateProgress);

    return () => {
      audio.removeEventListener(
        "timeupdate",
        updateProgress
      );
    };
  }, []);

  // Volume
  useEffect(() => {
    audioRef.current.volume = isMuted ? 0 : volume;
  }, [isMuted, volume]);

  // Track Change + Play Sync
  useEffect(() => {
    const audio = audioRef.current;

    audio.src = currentTrack.audio;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    setProgress(0);
    setCurrentTime(0);
  }, [currentTrack, isPlaying]);

  // Repeat Logic
  useEffect(() => {
    const audio = audioRef.current;

    const handleEnded = () => {
      if (repeatMode === "one") {
        audio.currentTime = 0;
        audio.play();

        setProgress(0);
        setCurrentTime(0);
      } else if (repeatMode === "all") {
        handleNext();
      } else {
        setIsPlaying(false);

        audio.currentTime = 0;
        setProgress(0);
        setCurrentTime(0);
      }
    };

    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, [repeatMode, currentTrack]);

  return {
    repeatMode,
    progress,
    volume,
    isMuted,
    currentTime,
    duration,

    setVolume,

    handleRepeat,
    handleShuffle,
    handlePlay,
    handleMute,
    handleNext,
    handlePrev,

    formatTime,
  };
};

export default useAudioPlayer;