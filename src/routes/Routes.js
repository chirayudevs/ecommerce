import React from 'react';
import { Route, useLocation } from 'react-router-dom';

const PublicRoutes = ['signUp', 'verify', 'resetPassword'];

export const PrivateRoutes = () => {
  const location = useLocation();

  const isPublicRoute = (['/signUp', '/verify', '/resetPassword'].includes(location.pathname)) || PublicRoutes.some(route => location.pathname.indexOf(route) >= 0);

  return (
    <Route

    />
  )
};

export const PublicRoutes = () => {
  const isLoggedIn = ''

  return (
    <Route

    />
  )
};
