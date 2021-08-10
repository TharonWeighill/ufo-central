import Login from "../components/Login";
import About from "../components/About";
import Map from "../components/Map";
import News from "../components/News";
import NewSighting from "../components/NewSighting";
import NewUser from "../components/NewUser";
import Sightings from "../components/Sightings";
import Videos from "../components/Videos";
import NewUserForm from "../components/NewUserForm";
import Header from "../components/Header";
import Navbar from "../components/Navbar";


const App = () => {
    return (
        <div>
            <Navbar />
            {/* <Header /> */}
            <Videos />
            <News />
        </div>
    );
};
export default App;