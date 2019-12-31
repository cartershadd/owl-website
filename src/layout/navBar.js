import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {LinkContainer} from 'react-router-bootstrap';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="*" bg="success" variant="success">
            <Navbar.Brand href="/">
                <i
                    className="fab fa-phoenix-framework"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer exact to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer exact to="/owl">
                        <Nav.Link>Owls</Nav.Link>
                    </LinkContainer>
                    <LinkContainer exact to="/fox">
                        <Nav.Link>Foxes</Nav.Link>
                    </LinkContainer>
                    <LinkContainer exact to="/salamander">
                        <Nav.Link>Salamanders</Nav.Link>
                    </LinkContainer>
                    <LinkContainer exact to="/frog">
                        <Nav.Link>Frogs</Nav.Link>
                    </LinkContainer>
                    <LinkContainer exact to="/about">
                        <Nav.Link>About</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;