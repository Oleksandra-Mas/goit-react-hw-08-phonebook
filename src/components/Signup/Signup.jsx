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

export default function SignupForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const nameId = shortid.generate();
    const emailId = shortid.generate();
    const passwordId = shortid.generate();
    const dispatch = useDispatch();

    const handleInputChange = event => {
        const { value, name } = event.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
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
            return toast(`Password shpuld have at least 3 symbols`);
        }
        dispatch(authActions.register({ name, email, password }));
        reset();
    };

    const reset = () => {
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <>
            <h1>Registration page</h1>
            <FormWrapper onSubmit={handleSubmit}>
                <Form.Label htmlFor={nameId}>
                    Name
                    <Form.Control
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                        onChange={handleInputChange}
                        id={nameId}
                    />
                </Form.Label>
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
                        type="password"
                        name="password"
                        required
                        value={password}
                        onChange={handleInputChange}
                        id={passwordId}
                    />
                </Form.Label>
                <Button variant="outline-dark" type="sumbit">
                    Signup
                </Button>
            </FormWrapper>
        </>
    );
}
