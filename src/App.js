import {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {getSongs} from "./api/getSongs";
import {SimpleGlobe} from "./globe/globe";
import AudioPlayer from "./player/AudioPlayer";
import Search from "./player/Search";
// import tracks from "./tracks";

function App() {
  const [country, setCountry] = useState({
    name: 'Canada',
    lat: 56.1304,
    lng: -106.3468,
    code: 'CA'
  });
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
      getSongs(country.code).then((data) => {
        console.log(data);
        const tracks = data.map((song) => {
            return {
                title: song.title,
                artist: song.artists[0].name,
                color: "#F1B4BB",
                image: song.thumbnails[0].url,
                audioSrc: undefined
            }
        });
        setTracks(tracks);
      })
  }, [country]);


  return (
    <div className="App">
      {/* <div className='audio-div'> */}
        {tracks.length > 0 && <AudioPlayer tracks={tracks} />}
        <Search country={country.code} setCountry={setCountry}/>
      {/* </div> */}
      {/* <div className='globe-div'> */}
        <SimpleGlobe country={country} setCountry={setCountry}/>
      {/* </div> */}
    </div>

  );
}

export default App;
