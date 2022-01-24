import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

import styles from './UserMenu.module.css';

export default function UserMenu({ email }) {
    return (
        <Navbar className={styles.header} id="header" bg="dark" variant="dark">
            <Navbar.Brand>Phonebook</Navbar.Brand>
            <Navbar.Text>
                <a href={'mailto:' + email}>{email}</a>
            </Navbar.Text>
            <Navbar.Text>
                <Button
                    variant="outline-light"
                    type="button"
                    onClick={() => {}}
                >
                    Logout
                </Button>
            </Navbar.Text>
        </Navbar>
    );
}
UserMenu.propTypes = {
    email: PropTypes.string.isRequired,
};
