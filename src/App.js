import logo from './logo.svg';
import './App.css';
import {getSongs} from "./api/getSongs";
import {SimpleGlobe} from "./globe/globe";
function App() {

  getSongs().then((data) => {
    console.log(data);
  });


  return (
    <div className="App">
      <SimpleGlobe/>
    </div>

  );
}

export default App;
