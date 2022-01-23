import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import shortid from 'shortid';
import { Button, Form } from 'react-bootstrap';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { addContact } from '../../store/contacts/actions';
import { getVisibleContacts } from '../../store/contacts/selectors';

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 400px;
    width: 100%;
    margin: 0 auto 20px;
`;

export default function ContactForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const nameId = shortid.generate();
    const numberId = shortid.generate();
    const dispatch = useDispatch();
    const contacts = useSelector(getVisibleContacts);

    const handleInputChange = event => {
        const { value, name } = event.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                throw new Error(`Unknown input ${name}`);
        }
    };
    const handleSubmit = event => {
        event.preventDefault();
        const idx = contacts.findIndex(
            contact => contact.name.toLowerCase() === name.toLowerCase(),
        );
        if (idx !== -1) {
            toast(`${name} is already in contacts`);
            return;
        }
        dispatch(addContact({ name, number }));
        reset();
    };

    const reset = () => {
        setName('');
        setNumber('');
    };
    return (
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
            <Form.Label htmlFor={numberId}>
                Number
                <Form.Control
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={handleInputChange}
                    id={numberId}
                />
            </Form.Label>
            <Button variant="outline-dark" type="sumbit">
                Add contact
            </Button>
        </FormWrapper>
    );
}
