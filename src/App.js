import logo from './logo.svg';
import './App.css';
import Login from "./components/Login";
import About from "./components/About";
import Map from "./components/Map";
import News from "./components/News";
import NewSighting from "./components/NewSighting";
import NewUser from "./components/NewUser";
import Sightings from "./components/Sightings";
import Videos from "./components/Videos";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
