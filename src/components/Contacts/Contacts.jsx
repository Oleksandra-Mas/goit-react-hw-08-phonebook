import { useSelector, useDispatch } from 'react-redux';
import { Alert } from 'react-bootstrap';

import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter/';
import { getVisibleContacts } from '../../store/contacts/selectors';
import { getContacts } from '../../store/contacts/actions';

export default function Contacts() {
    const contacts = useSelector(getVisibleContacts);

    const dispatch = useDispatch();

    // useEffect(() => dispatch(getContacts()), [dispatch]);
    return (
        <>
            <ContactForm />
            <h2>Contacts</h2>
            <Filter title={'Find contacts by name'} />
            {contacts.length ? (
                <ContactList contacts={contacts} />
            ) : (
                <Alert className="Alert" variant="dark">
                    Nothing found
                </Alert>
            )}
        </>
    );
}
