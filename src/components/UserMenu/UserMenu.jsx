import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

import { getEmail } from '../../store/auth/selectors';
import { authActions } from '../../store/auth';

export default function UserMenu() {
    const email = useSelector(getEmail);
    const dispatch = useDispatch();
    return (
        <>
            <Navbar.Text>
                <a href={'mailto:' + email}>{email}</a>
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
