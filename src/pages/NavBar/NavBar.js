import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand >
                        <NavLink to="/" style={{ textDecoration: 'none' }}>
                            <h2 style={{ color: 'white' }}>Calender Event</h2>
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="me-auto ms-4">
                            <Nav.Link>
                                {/* <NavLink to="/home" style={{ textDecoration: 'none' }}>
                                    <span className="text-white">Home</span>
                                </NavLink> */}
                            </Nav.Link>
                        </Nav>

                        <Navbar.Text>
                            {/* Hello, {user.displayName} */}
                        </Navbar.Text>

                        {/* <button  className="btn btn-light ms-3">Sign up</button> */}
                        <NavLink to="/sign-in">
                            <button className="btn btn-light ms-3">Sign in</button>
                        </NavLink>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;