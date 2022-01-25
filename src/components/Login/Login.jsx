import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
import { Button, Form } from 'react-bootstrap';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { authActions } from '../../store/auth';

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 400px;
    width: 100%;
    margin: 0 auto 20px;
`;

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailId = shortid.generate();
    const passwordId = shortid.generate();
    const dispatch = useDispatch();

    const handleInputChange = event => {
        const { value, name } = event.target;
        switch (name) {
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                throw new Error(`Unknown input ${name}`);
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
        let re =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!re.test(email)) {
            return toast(`Please enter valid email`);
        }
        if (password.length < 3) {
            return toast(`Password should have at least 3 symbols`);
        }
        dispatch(authActions.logIn({ email, password }));
        reset();
    };

    const reset = () => {
        setEmail('');
        setPassword('');
    };
    return (
        <>
            <h1>Login page</h1>
            <FormWrapper onSubmit={handleSubmit}>
                <Form.Label htmlFor={emailId}>
                    Email
                    <Form.Control
                        type="name"
                        name="email"
                        title="Please enter valid email"
                        required
                        value={email}
                        onChange={handleInputChange}
                        id={emailId}
                    />
                </Form.Label>
                <Form.Label htmlFor={passwordId}>
                    Password
                    <Form.Control
                        type="text"
                        name="password"
                        required
                        value={password}
                        onChange={handleInputChange}
                        id={passwordId}
                    />
                </Form.Label>
                <Button variant="outline-dark" type="sumbit">
                    Login
                </Button>
            </FormWrapper>
        </>
    );
}
