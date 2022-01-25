import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { authActions } from './store/auth';
import './App.css';
import AppBar from './components/AppBar/AppBar';
import SignupForm from './components/Signup/Signup';
import LoginForm from './components/Login/Login';
import Contacts from './components/Contacts/Contacts';
import Error from './components/Error/Error';
// import PublicRoute from './components/PublicRoute/PublicRoute';

export default function App() {
    const dispatch = useDispatch();
    useEffect(() => dispatch(authActions.fetchCurrentUser()), [dispatch]);

    return (
        <div className="App">
            <AppBar />
            <Routes>
                <Route path="register" element={<SignupForm />} />
                <Route path="login" element={<LoginForm />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <ToastContainer />
        </div>
    );
}
