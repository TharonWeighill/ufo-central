import Login from "../components/Login";
import About from "../components/About";
import Map from "../components/Map";
import News from "../components/News";
import NewSighting from "../components/NewSighting";
import NewUser from "../components/NewUser";
import Sightings from "../components/Sightings";
import Videos from "../components/Videos";


const App = () => {
    return (
        <div>
            <Login />
            <About />
            <Map />
            <News />
            <NewSighting />
            <NewUser />
            <Sightings />
            <Videos />
        </div>
    );
};
export default App;