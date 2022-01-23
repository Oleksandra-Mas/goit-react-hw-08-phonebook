import axios from 'axios';

axios.defaults.baseURL = 'https://61eb12c27ec58900177cdb91.mockapi.io';

export async function fetchContacts() {
    const { data } = await axios.get(`/contacts`);
    return data;
}

export async function deleteContact(id) {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
}

export async function insertContact(contact) {
    const { data } = await axios.post(`/contacts`, contact);
    return data;
}
