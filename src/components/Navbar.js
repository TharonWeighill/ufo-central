import React from 'react';
import { MenuItems } from './MenuItems';
import "../styles/Navbar.css";

export default function Navbar() {
    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo">UF<i className="fas fa-satellite-dish "></i> CENTRAL </h1>
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


