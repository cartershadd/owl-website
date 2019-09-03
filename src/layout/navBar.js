import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
            <nav className="navBar">
                <h1 className="icon">
                    <i className="fab fa-phoenix-framework"/>
                </h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/owl">Owls</Link>
                    </li>
                    <li>
                        <Link to="/fox">Foxes</Link>
                    </li>
                    <li>
                        <Link to="/salamander">Salamanders</Link>
                    </li>
                    <li>
                        <Link to="/frog">Frogs</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
    );
};

export default NavBar;