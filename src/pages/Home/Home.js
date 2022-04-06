import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { NavLink } from 'react-router-dom';
import { config, useSpring, animated  } from 'react-spring';
import NavBar from '../NavBar/NavBar';
import './Home.css'
  

const Home = () => {

    const [flip, set] = useState(false);

    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0.2 },
        reset: true,
        reverse: flip,
        delay: 100,
        config: config.molasses,
        onRest: () => set(!flip),
    })


    return (
        <div>
            <NavBar></NavBar>
            <div className='home-dashboard'>
                <NavLink to="/dashboard" style={{textDecoration:'none'}}>
                    <animated.h2 style={props}>
                            <p className='border bg-dark text-white p-2 rounded' >Click to DashBoard</p>
                    </animated.h2>
                </NavLink>
            </div>
        </div>
    );
};

export default Home;