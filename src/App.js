import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProductView from './pages/ProductView';
import SignUp from './pages/SignUp/signUp';
import VerifyEmail from './pages/VerifyEmail/verifyEmail';
import LogIn from './pages/LogIn/LogIn';
import OrdersPage from './pages/orders';
import './App.css';
import ErrorPage from "./pages/ErrorPage/errorPage";

const App = () => {
  return (
    
      <Routes>
        <Route path='/home' element={<LandingPage />} />
        <Route path='/viewProduct/:_id' element={<ProductView />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/verify' element={<VerifyEmail />} />
        <Route path='/' element={<LogIn />} />
        <Route path='/orders' element={<OrdersPage />} />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
  );
}

export default App;
