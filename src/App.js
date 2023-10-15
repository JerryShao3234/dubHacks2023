import {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {getSongs} from "./api/getSongs";
import {SimpleGlobe} from "./globe/globe";
import AudioPlayer from "./player/AudioPlayer";
import Search from "./player/Search";
import {MAPPED_COUNTRIES} from "./countries";
import SongLists from './player/SongLists';

function App() {
  const [country, setCountry] = useState(MAPPED_COUNTRIES[6]);
  const [tracks, setTracks] = useState([]);

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
        {tracks.length > 0 && <AudioPlayer tracks={tracks} />}
        <Search country={country} setCountry={setCountry}/>
        <SimpleGlobe country={country} setCountry={setCountry}/>
        {/*If toggleVisibility is true, button text is Hide Song list. Or else, Show Song List */}
        <button onClick={toggleVisibility} class="song-list-btn">
          {isVisible ? "Hide Song List" : "Show Song List"}
        </button>
        <SongLists tracks={tracks} isVisible={isVisible} setIsVisible={setIsVisible}/>
    </div>
  );
}

export default App;
