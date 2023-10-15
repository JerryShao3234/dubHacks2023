import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const SongLists = ({ tracks, isVisible , setIsVisible, setTrackIndex}) => {

    const toggleSongListVisibility = () => {
        setIsVisible(!isVisible);
    };

    const songList = tracks.map((track, index) => {
        if (index < 10) {
            return (
                <li key={index}>
                    <a onClick={() => setTrackIndex(index)}>{track.title}</a>
                </li>
            );
        }
    });

    return (
        <div>
            {isVisible &&
            (<div className={`song-list ${isVisible ? 'visible' : 'hidden'}`}>
                <button className="close-button" onClick={toggleSongListVisibility}>x</button>
                <ol>
                    {songList}
                </ol>
            </div>)}
        </div>
    );
};

export default SongLists;
