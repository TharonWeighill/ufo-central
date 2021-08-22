import React from "react";
import { checkAuth } from "../actions/auth";
import { Link } from 'react-router-dom';
import {connect} from "react-redux"
import Logout from "./Logout";
import "../styles/Navbar.css"

class Navbar extends React.Component {
  componentDidMount() {
    this.props.checkAuth();
  }

    renderAuthLinks() {
        const { authChecked, loggedIn, currentUser } = this.props;
        if (authChecked) {
            return loggedIn ? (
                <>
                    <div className="NavbarItems">
                        <ul className="navlinks">
                            <Link to='/protected' exact >Protected</Link>           
                            <Link to="/newsighting"> <li> Report A Sighting </li></Link>
                            <Logout />
                        </ul>
                    </div>
                </>
            ) : (        
                <>
                    <nav className="NavbarItems">
                        <ul className="navlinks">
                            <Link to="/" exact >Home</Link>    
                            <Link to="/login" exact >Login</Link>
                            <Link to="/signup" exact >Signup</Link>
                            <Link to="/about" exact >About</Link> 
                        </ul>
                    </nav>
                </>
            );
        } else {
            return null
        }
    }
  
    render() {
        return (
            <div>
                {this.renderAuthLinks()}
            </div>
        )
    }
}

    const mapStateToProps = ({ auth: { authChecked, loggedIn, currentUser } }) => {
    return { authChecked, loggedIn, currentUser };
    };
  
    const mapDispatchToProps = (dispatch) => {
        return {
            checkAuth: () => dispatch(checkAuth())
        };
    };
  
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);