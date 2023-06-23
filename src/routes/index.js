import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import ProductView from '../pages/ProductView';
import SignUp from '../pages/SignUp/signUp';
import VerifyEmail from '../pages/VerifyEmail/verifyEmail';
import LogIn from '../pages/LogIn/LogIn';
import OrdersPage from '../pages/orders';
import ErrorPage from '../pages/ErrorPage/errorPage';
import ResetPassword from '../pages/ResetPassword';
import { ProtectedRoute } from './ProtectedRoutes';
import { PublicRoutes } from './PublicRoutes';

const AllRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="/" element={<Navigate replace to="home" />} />
        <Route path="home" element={<LandingPage />} />
        <Route path='/viewProduct/:_id' element={<ProductView />} />
        <Route path='/orders' element={<OrdersPage />} />
      </Route>

      <Route path="login" element={<PublicRoutes />}>
        <Route path='/login' element={<LogIn />} />
      </Route>

      <Route path='/signUp' element={<SignUp />} />
      <Route path='/verify' element={<VerifyEmail />} />
      <Route path='/resetPassword' element={<ResetPassword />} />

      <Route path='/*' element={<ErrorPage />} />
    </Routes>
  )
};

export default AllRoutes;
