import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getIsLoggedIn } from '../../store/auth/selectors';

const PrivateRoute = ({ component: Component }) => {
    const isLoggedIn = useSelector(getIsLoggedIn);

    return isLoggedIn ? <Component /> : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
    component: PropTypes.elementType.isRequired,
};

export default PrivateRoute;
