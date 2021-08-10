import Login from "../components/Login";
import About from "../components/About";
import Map from "../components/Map";
import News from "../components/News";
import NewSighting from "../components/NewSighting";
import NewUser from "../components/NewUser";
import Sightings from "../components/Sightings";
import Videos from "../components/Videos";
import NewUserForm from "../components/NewUserForm";
import Footer from "./Footer";
import Navbar from "../components/Navbar";


const App = () => {
    return (
        <div>
            <Navbar />
            <Videos />
            <News />
            <Footer />
            <Map />
        </div>
    );
};
export default App;