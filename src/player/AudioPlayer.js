import React, { useState, useEffect, useRef } from "react";
import AudioControls from "./AudioControls";
import Backdrop from "./Backdrop";
import "./styles.css";

const AudioPlayer = ({ tracks }) => {
  // State
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);

  // Destructure for conciseness
  const { title, artist, color, image } = tracks[trackIndex];

  const getAudioUrl = async (songTitle, artist) => {
    const temp = sanitizeSongName(songTitle);
    //remove Official and Video from song title
    const temp2 = temp.replace(/\b(Official|Video|VIDEO|OFFICIAL|official|video|music|Music|MUSIC|Live|LIVE|live)\b/g, '');
    // remove any extra spaces
    let temp3 = temp2;
    if (!temp2.includes(artist.split(" ")[0])) {
      temp3 = temp3 + " " + artist
    }

    const temp4 = temp3.replace(/\s+/g, ' ').trim().split(" ").slice(0,7).join('+');
    const url = 'https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search?q=' + temp4;
    console.log(url)
    return fetch(url).then((response) => {
      return response.json();
    }).then((data) => {
      return data.data[0].preview;
    }).catch((error) => {
      toNextTrack();
    });
  }

  // Refs
  const audioRef = useRef();
  const intervalRef = useRef();

  useEffect(() => {
    audioRef.current.pause();
    clearInterval(intervalRef.current);
    getAudioUrl(tracks[trackIndex].title, tracks[trackIndex].artist).then((url) => {
      setAudioUrl(url);
      setTrackProgress(0);
    });
  }, [trackIndex]);

  useEffect(() => {
    audioRef.current.pause();
    clearInterval(intervalRef.current);
    setTrackIndex(0);
    getAudioUrl(tracks[trackIndex].title, tracks[trackIndex].artist).then((url) => {
      setAudioUrl(url);
      setTrackProgress(0);
    });
  }, [tracks]);

  const getTrackStyling = (duration) => {
    const currentPercentage = duration
        ? `${(trackProgress / duration) * 100}%`
        : "0%";
    return `
      -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
    `;
  }

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  const onScrub = (value) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

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

  const togglePlayPause = (changeTo) => {
    if (changeTo) {
      setIsPlaying(true);
      audioRef.current.play();
      startTimer();
    } else {
      clearInterval(intervalRef.current);
      setIsPlaying(false);
      audioRef.current.pause();
    }
  }

  const sanitizeSongName = (songName) => {
    return songName.replace(/[~!@$%^&*()\-_=+\[{\]}\\|;:',./?`"‘’]/g, "");
  }

  return (
    <div className="audio-player">
      <div className="track-info">
        <audio src={audioUrl} ref={audioRef} onPause={() => togglePlayPause(false)} onPlay={() => togglePlayPause(true)} />
        <div
          className={`artwork ${isPlaying ? "isPlaying" : ""}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <h2 className="title">{title}</h2>
        <h3 className="artist">{artist}</h3>
        <AudioControls
          isPlaying={isPlaying}
          onPrevClick={toPrevTrack}
          onNextClick={toNextTrack}
          onPlayPauseClick={() => togglePlayPause(!isPlaying)}
        />
        { audioRef && audioRef.current &&
          <input
            type="range"
            value={trackProgress}
            step="1"
            min="0"
            max="30"
            className="progress"
            onChange={(e) => onScrub(e.target.value)}
            onMouseUp={onScrubEnd}
            onKeyUp={onScrubEnd}
            style={{ background: getTrackStyling(audioRef.current.duration) }}
          />
        }
      </div>
      <Backdrop
        trackIndex={trackIndex}
        activeColor={color}
        isPlaying={isPlaying}
      />
    </div>
  );
};

export default AudioPlayer;
