import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

export default function AuthNav() {
    return (
        <>
            <Navbar.Text>
                <NavLink end to="/signup">
                    Signup
                </NavLink>
            </Navbar.Text>
            <Navbar.Text>
                <NavLink end to="/login">
                    Login
                </NavLink>
            </Navbar.Text>
        </>
    );
}
