import React from 'react';
import { Container } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import AddEvents from '../AddEvents/AddEvents';
import NavBar from '../NavBar/NavBar';
import ViewEvents from '../ViewEvents/ViewEvents';
import './Dashboard.css';


const Dashboard = () => {
    let { path, url } = useRouteMatch();

    return (
        <div>
            <NavBar></NavBar>
            <Container>
                <div className='d-flex pt-3'>
                    <NavLink to={`${url}/add-events`} className='menu'>
                        <p className='border-bottom border-end p-2 text-secondary'>Add Events</p>
                    </NavLink>
                    
                    <NavLink to={`${url}/view-events`}  className='menu'>
                        <p className='menu border-bottom border-end p-2 ms-2 text-secondary'>View Events</p>
                    </NavLink>
                    
                </div>
            </Container>

            <Switch>
                <Route exact path={path}>
                    <AddEvents></AddEvents>
                </Route>
                <Route path={`${url}/add-events`}>
                    <AddEvents></AddEvents>
                </Route>
                <Route path={`${url}/view-events`}>
                    <ViewEvents></ViewEvents>
                </Route>
            </Switch>
        </div>
    );
};

export default Dashboard;