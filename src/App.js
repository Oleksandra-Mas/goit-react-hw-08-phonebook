import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { authActions } from './store/auth';
import './App.css';
import AppBar from './components/AppBar/AppBar';
import SignupForm from './components/Signup/Signup';
import LoginForm from './components/Login/Login';
import Contacts from './components/Contacts/Contacts';
import PublicRoute from './components/PublicRoute/PublicRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import About from './components/About/About';

export default function App() {
    const dispatch = useDispatch();
    useEffect(() => dispatch(authActions.fetchCurrentUser()), [dispatch]);

    const isFetchingCurrentUser = useSelector(state => state.isFetchingCurrent);

    return !isFetchingCurrentUser ? (
        <div className="App">
            <AppBar />
            <Routes>
                <Route
                    path="register"
                    element={<PublicRoute component={SignupForm} restricted />}
                />
                <Route
                    path="login"
                    element={<PublicRoute component={LoginForm} restricted />}
                />
                <Route
                    path="contacts"
                    element={<PrivateRoute component={Contacts} />}
                />
                <Route path="/about" element={<About/>} />
                <Route path="*" element={<Navigate to='/about' />} />
            </Routes>
            <ToastContainer />
        </div>
    ) : (
        <div>Loading...</div>
    );
}
