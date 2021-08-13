import React from 'react';
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'



const Navbar =  (props) => {
    console.log(props)
    return (
        <nav className="NavbarItems">
            <h1><i className="fas fa-satellite-dish fas fa-3x"></i></h1>
            <ul className="navlinks">
                <Link to="/home">
                    <li>Home </li>
                </Link>
                <Link to="/login">
                    <li> Login </li>
                </Link>
                <Link to="/newsighting">
                    <li> Report A Sighting </li>
                </Link>
                <Link to="/signup">
                    <li> Create Account </li>
                </Link>
                    <Link to="/logout">
                    <li> Logout </li>
                </Link>
                <Link to="/about">
                    <li> About </li>
                </Link>
            </ul>
        </nav>
    );
}


function mapStateToProps(state) {
    return {state }
}

export default connect(mapStateToProps)(Navbar);