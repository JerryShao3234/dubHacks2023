import React from "react";
import { ReactComponent as Play } from "../assets/play.svg";
import { ReactComponent as Pause } from "../assets/pause.svg";
import { ReactComponent as Next } from "../assets/next.svg";
import { ReactComponent as Prev } from "../assets/prev.svg";

const AudioControls = ({
  onPrevClick,
  onNextClick
}) => (
  <div className="audio-controls">
    <button
      type="button"
      className="prev"
      aria-label="Previous"
      onClick={onPrevClick}
    >
      <Prev />
    </button>
        <button
        type="button"
        className="next"
        aria-label="Next"
        onClick={onNextClick}
        >
        <Next />
    </button>
  </div>
);

export default AudioControls;
