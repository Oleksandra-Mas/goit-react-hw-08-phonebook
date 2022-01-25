import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

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

export async function registerUser(credentials) {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
}

export async function loginUser(credentials) {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
}

export async function logoutUser() {
    await axios.post('/users/logout');
    token.unset();
}

export async function getCurrentUser(persistedToken) {
    token.set(persistedToken);
    const { data } = await axios.get('/users/current');
    return data;
}
