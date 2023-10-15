import React, { useState, useEffect, useRef } from "react";
import AudioControls from "./AudioControls";
import Backdrop from "./Backdrop";
import "./styles.css";
import ReactPlayer from "react-player";

const AudioPlayer = ({ tracks, trackIndex, setTrackIndex }) => {
  // State
  const [isPlaying, setIsPlaying] = useState(false);

  // Destructure for conciseness
  const { title, artist, color, url } = tracks[trackIndex];

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  const toNextTrack = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

  return (
    <div className="audio-player">
      <div className="track-info">
        <h2 className="title">{title}</h2>
        <h3 className="artist">{artist}</h3>
        <AudioControls
          onPrevClick={toPrevTrack}
          onNextClick={toNextTrack}
        />

      </div>
      <Backdrop
        trackIndex={trackIndex}
        activeColor={color}
        isPlaying={isPlaying}
      />
      <div className="player-container">
        <ReactPlayer url={"https://www.youtube.com/watch?v=" + url} width={260} height={180} controls={true} />
      </div>
    </div>
  );
};

export default AudioPlayer;
