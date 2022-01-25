import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';

import styles from './AppBar.module.css';
import { getIsLoggedIn } from '../../store/auth/selectors';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';

export default function AppBar({ email }) {
    const isLoggedIn = useSelector(getIsLoggedIn);
    return (
        <Navbar className={styles.header} id="header" bg="dark" variant="dark">
            <Navbar.Brand>Phonebook</Navbar.Brand>
            {!isLoggedIn ? (
                <>
                    <AuthNav />
                </>
            ) : (
                <UserMenu email={email} />
            )}
        </Navbar>
    );
}
