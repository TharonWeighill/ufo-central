import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import "../components/Navbar.css";

export class Navbar extends Component {

    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">UF<i class="fas fa-satellite-dish "></i> CENTRAL </h1>
                <ul>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        );
    }
}

export default Navbar;
