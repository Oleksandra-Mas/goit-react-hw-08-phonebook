import { Routes, Route, NavLink, useMatch, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

import './App.css';
import AppBar from './components/AppBar/AppBar';
import SignupForm from './components/Signup/Signup';
import LoginForm from './components/Login/Login';
import Contacts from './components/Contacts/Contacts';
import Error from './components/Error/Error';

export default function App() {
    return (
        <div className="App">
            <AppBar email={'ssgvgsh@hbdhwe.kjvbwek'} />
            <Routes>
                <Route path="signup" element={<SignupForm />} />
                <Route path="login" element={<LoginForm />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <ToastContainer />
        </div>
    );
}
