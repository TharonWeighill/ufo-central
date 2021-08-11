// import Login from "../components/Login";
import About from "../components/About";
// import Map from "../components/Map";
import News from "../components/News";
// import NewSighting from "../components/NewSighting";
import NewUser from "../components/NewUser";
// import Sightings from "../components/Sightings";
import Videos from "../components/Videos";
// import NewUserForm from "../components/NewUserForm";
import Footer from "./Footer";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/about" exact component={About} />
                    <Route path="/signup" exact component={NewUser} />
                </Switch>
                <Videos />
                <News />
                <Footer />
            </div>
        </Router>
    );
};
export default App;;