import React, { useEffect } from "react";

const ImageBackdrop = ({ activeColor, trackIndex, isPlaying }) => {
  useEffect(() => {
    document.documentElement.style.setProperty("--active-color", activeColor);
  }, [trackIndex, activeColor]);

  return <div className={`artwork ${isPlaying ? "isPlaying" : "idle"}`} />;
};

export default ImageBackdrop;