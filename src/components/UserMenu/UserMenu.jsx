import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

export default function UserMenu({ email }) {
    return (
        <>
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
        </>
    );
}
