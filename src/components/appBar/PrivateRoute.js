import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/authSlice';

export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/goit-react-hw-08-phonebook/login" />
  );
}
