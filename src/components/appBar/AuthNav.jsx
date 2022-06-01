import { NavigationLink } from './AppBar.styled';

import { useLocation } from 'react-router-dom';

const AuthNav = () => {
  const location = useLocation();
  return (
    <nav>
      <NavigationLink
        to={{
          pathname: '/goit-react-hw-08-phonebook/register',
          state: { from: location },
        }}
      >
        Register
      </NavigationLink>
      <NavigationLink
        to={{
          pathname: '/goit-react-hw-08-phonebook/login',
          state: { from: location },
        }}
      >
        Log in
      </NavigationLink>
    </nav>
  );
};

export default AuthNav;
