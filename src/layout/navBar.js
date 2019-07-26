import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <Router>
            <nav className="navBar">
                <h1 className="icon">
                    <i className="fas fa-feather-alt"/>
                    <i className="fab fa-earlybirds"/>
                    <i className="fas fa-feather-alt"/>
                </h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                </ul>
            </nav>
        </Router>
    );
};

export default NavBar;