import React from 'react';
// import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { NavigationLink } from './AppBar.styled';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav>
      <NavigationLink
        to={{
          pathname: '/goit-react-hw-08-phonebook/contacts',
          state: { from: location },
        }}
      >
        My Contacts
      </NavigationLink>
    </nav>
  );
};

export default Navigation;
