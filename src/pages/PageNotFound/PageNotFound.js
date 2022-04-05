import React from 'react';
import { NavLink } from 'react-router-dom';
import './PageNotFound.css';

const PageNotFound = () => {
    return (
        <div className='not-found-container'>
            <h1>404</h1>
            <p>page not found</p>
            <NavLink to="/home">
                <button className='btn btn-primary'>Home</button>
            </NavLink>
        </div>
    );
};

export default PageNotFound;