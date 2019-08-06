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
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/owl">Owls</Link>
                    </li>
                    <li>
                        <Link to="/salamander">Salamanders</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
    );
};

export default NavBar;