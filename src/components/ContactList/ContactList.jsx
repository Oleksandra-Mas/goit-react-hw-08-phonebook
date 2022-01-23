import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import ContactListItem from '../ContactListItem/';
import styled from 'styled-components';

import { removeContact } from '../../store/contacts/actions';

const List = styled.ul`
    margin-top: 20px;
`;

export default function ContactList({ contacts }) {
    const dispatch = useDispatch();

    const onDelete = useCallback(id => dispatch(removeContact(id)), [dispatch]);

    return (
        <List>
            {contacts.map(contact => (
                <ContactListItem
                    key={contact.id}
                    contact={contact}
                    onDelete={onDelete}
                />
            ))}
        </List>
    );
}
ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            phone: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};
