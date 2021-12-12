import React from 'react';
import { checkAuth } from '../actions/auth';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import Logout from './Logout';
import '../styles/Navbar.css'

class Navbar extends React.Component {
  componentDidMount() {
    this.props.checkAuth();
  }

    renderAuthLinks() {
        const { authChecked, loggedIn } = this.props;
        if (authChecked) {
            return loggedIn ? (
                <>
                    <div className='NavbarItems'>
                        <ul className='navlinks'>
                            <Link to='/' >Home</Link>            
                            <Link to='/newsighting'>Report A Sighting</Link>
                            <Logout />
                            <Link to='/about'  >About</Link> 
                        </ul>
                    </div>
                </>
            ) : (        
                <>
                    <nav className='NavbarItems'>
                        <ul className='navlinks'>
                            <Link to='/'  >Home</Link>    
                            <Link to='/login'  >Login</Link>
                            <Link to='/signup'  >Signup</Link>
                            <Link to='/about'  >About</Link> 
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