import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import { Outlet } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav>
      <NavLink
        to={{
          pathname: '/',
          state: { from: location },
        }}
      >
        Home
      </NavLink>
      <NavLink
        to={{
          pathname: '/contacts',
          state: { from: location },
        }}
      >
        My Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;
