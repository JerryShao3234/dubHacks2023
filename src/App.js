import {useEffect, useState} from 'react';
import './App.css';
import {getSongs} from "./api/getSongs";
import {SimpleGlobe} from "./globe/globe";
import AudioPlayer from "./player/AudioPlayer";
import Search from "./player/Search";
import {MAPPED_COUNTRIES} from "./countries";
import SongLists from './player/SongLists';
import Home from './Home';

function App() {
  const [country, setCountry] = useState(MAPPED_COUNTRIES[6]);
  const [tracks, setTracks] = useState([]);
  const [showMainPage, setShowMainPage] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);

  const handleButtonClick = () => {
    setShowMainPage(true);
  };

  useEffect(() => {
      getSongs(country).then((data) => {
        console.log(data);
        const tracks = data.map((song) => {
            return {
                title: song.title,
                artist: song.artists[0].name,
                color: "#F1B4BB",
                url: "https://www.youtube.com/watch?v=" + song.videoId
            }
        });
        setTracks(tracks);
      })
  }, [country]);

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="App">

        <div className={`home-page ${showMainPage ? 'fade-out' : 'fade-in'}`}>
          <Home showMainPage={showMainPage} setShowMainPage={setShowMainPage} handleButtonClick={handleButtonClick}/>
        </div>

        {showMainPage && tracks.length > 0 && <AudioPlayer class='fade-in' tracks={tracks} trackIndex={trackIndex} setTrackIndex={setTrackIndex} />}
        {showMainPage && <Search class='fade-in' country={country} setCountry={setCountry}/>}
        <SimpleGlobe country={country} setCountry={setCountry}/>

        {showMainPage &&
          <button class='fade-in song-list-btn' onClick={toggleVisibility} >
            {isVisible ? "Hide Song List" : "Show Song List"}
          </button>}
        {showMainPage && <SongLists class='fade-in' tracks={tracks} isVisible={isVisible} setIsVisible={setIsVisible} setTrackIndex={setTrackIndex}/>}

    </div>
  );
}

export default App;
