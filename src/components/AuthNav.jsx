// import { Nav, NavElement } from "./Navigation.styled";
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const AuthNav = () => {
  const location = useLocation();
  return (
    <nav>
      <NavLink
        to={{
          pathname: '/register',
          state: { from: location },
        }}
      >
        Register
      </NavLink>
      <NavLink
        to={{
          pathname: '/login',
          state: { from: location },
        }}
      >
        Log in
      </NavLink>
    </nav>
  );
};

export default AuthNav;
