import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import { getIsLoggedIn } from 'redux/auth/authSlice';
import { AppBarContainer } from './AppBar.styled';

const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <AppBarContainer>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppBarContainer>
  );
};

export default AppBar;
