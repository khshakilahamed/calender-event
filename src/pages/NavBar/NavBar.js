import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './NavBar.css';

const NavBar = () => {
    const {user, logout} = useAuth();

    const handleSignOut = () =>{
        logout();
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand >
                        <NavLink to="/" style={{ textDecoration: 'none' }}>
                            <h2 style={{ color: 'white' }}>Calendar Event</h2>
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


                        {
                            user?.email && <Navbar.Text className='d-block d-md-inline-block me-2'>
                                                Hello, {user.displayName}
                                            </Navbar.Text>
                        }

                        


                        {
                            user?.email ? 
                                <button onClick={handleSignOut}  className="btn btn-light">Sign out</button>
                                :
                                <NavLink to="/sign-in">
                                    <button className="btn btn-light">Sign in</button>
                                </NavLink>
                        }

                        
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;