import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import { getUsername } from '../../store/auth/selectors';
import { authActions } from '../../store/auth';

export default function UserMenu() {
    const username = useSelector(getUsername);
    const dispatch = useDispatch();
    return (
        <>
        <Navbar.Text>
            <NavLink end to="/contacts">
                Contacts
            </NavLink>
        </Navbar.Text>
            <Navbar.Text>{username}
            </Navbar.Text>
            <Navbar.Text>
                <Button
                    variant="outline-light"
                    type="button"
                    onClick={() => dispatch(authActions.logOut())}
                >
                    Logout
                </Button>
            </Navbar.Text>
        </>
    );
}
