import logo from './logo.svg';
import './App.css';
import {getSongs} from "./api/getSongs";
import {SimpleGlobe} from "./globe/globe";
import AudioPlayer from "./player/AudioPlayer";
import Search from "./player/Search";
import tracks from "./tracks";

function App() {

  getSongs().then((data) => {
    console.log(data);
  });


  return (
    <div className="App">
      {/* <div className='audio-div'> */}
        <AudioPlayer tracks={tracks} />
        <Search/>
      {/* </div> */}
      {/* <div className='globe-div'> */}
        <SimpleGlobe/>
      {/* </div> */}
    </div>

  );
}

export default App;
