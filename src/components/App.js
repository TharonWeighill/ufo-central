import Login from '../components/Login';

import About from '../components/About';
import Map from '../components/Map';
import News from '../components/News';
import NewSighting from '../components/NewSighting';
import NewUser from '../components/NewUser';
import Videos from '../components/Videos';
import Footer from './Footer';
import Navbar from '../components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route path='/login'  component={Login} />
                    <Route path='/signup'  component={NewUser} />
                    <Route path='/about'  component={About} />
                    <Route path='/newsighting'  component={NewSighting} />
                </Switch>
                <Videos />
                <News />
                <Map />
                <Footer />
            </div>
        </Router>
    );
};
export default App;;