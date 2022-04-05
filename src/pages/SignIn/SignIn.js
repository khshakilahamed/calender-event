import React from 'react';
import { NavLink } from 'react-router-dom';
import google from '../../images/google.png'
import './SignIn.css'

const SignIn = () => {
    return (
        <div className='sign-in-container'>
            <div className='signin-form-container border rounded px-4 py-3 pb-5'>
                <NavLink to='/home' style={{textDecoration:'none'}}>
                    <h2 className='py-3 text-center text-secondary'>Calender Event</h2>
                </NavLink>
                <form action="" className=' d-flex flex-column gap-3'>
                    <input className='rounded px-2 py-1' type="text" placeholder='Email' disabled/>
                    <input className='rounded px-2 py-1' type="text" placeholder='Password' disabled/>
                    <input className='btn btn-secondary' type="submit" value="Sign in" disabled/>
                    <p>New User? <span className='text-primary' style={{cursor:'pointer'}}>click here</span></p>
                </form>
                <hr />
                <div className='signin-with-google d-flex justify-content-center align-items-center gap-2 border p-2 rounded-pill bg-secondary' style={{cursor:'pointer'}}>
                    <img width="25px" height="25px" src={google} alt="" />
                    <span>Sign in with google</span>
                </div>
            </div>
        </div>
    );
};

export default SignIn;