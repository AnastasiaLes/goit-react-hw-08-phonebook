// import { Nav, NavElement } from "./Navigation.styled";
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const AuthNav = () => {
  const location = useLocation();
  return (
    <nav>
      <NavLink
        to={{
          pathname: '/goit-react-hw-08-phonebook/register',
          state: { from: location },
        }}
      >
        Register
      </NavLink>
      <NavLink
        to={{
          pathname: '/goit-react-hw-08-phonebook/login',
          state: { from: location },
        }}
      >
        Log in
      </NavLink>
    </nav>
  );
};

export default AuthNav;
