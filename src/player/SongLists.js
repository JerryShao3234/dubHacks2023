import React, { useState, useEffect, useRef } from "react";

const SongLists = ({ tracks, isVisible , setIsVisible}) => {

    const toggleSongListVisibility = () => {
        setIsVisible(!isVisible);
    };

    const songList = tracks.map((track, index) => {
        if (index < 10) {
            return (
                <li key={index}>
                    <a href={track.audioSrc}>{track.title}</a>
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