import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const {user, isLoading} = useAuth();

    if(isLoading){
        return <div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}}><Spinner animation="border" variant="danger" /></div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/sign-in",
                    state: { from: location }
                    }}
                />
                )
            }
        />
    );
};

export default PrivateRoute;