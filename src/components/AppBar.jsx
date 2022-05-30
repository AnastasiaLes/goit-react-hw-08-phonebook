import React from 'react';
import Navigation from './Navigation';
import AuthNav from './AuthNav';

const AppBar = () => {
  return (
    <div>
      <Navigation />
      <AuthNav />
    </div>
  );
};

export default AppBar;
