import React from 'react';
import { NavLink, Outlet } from 'react-router';

const Root = () => {
    return (
        <>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/login">Login</NavLink>
            </nav>
            <Outlet >   </Outlet>

        </>


    );
};

export default Root;