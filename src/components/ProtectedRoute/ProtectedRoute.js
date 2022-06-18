import React from 'react';
import { Route, Redirect } from "react-router-dom";
import Preloader from '../Preloader/Preloader';

const ProtectedRoute = ({ isLoggedIn, children }) => {
  if (isLoggedIn === undefined) {
    return <Preloader />
  }

  if (!isLoggedIn) {
    return <Redirect to='/' />
  }

  return children;
}

export default ProtectedRoute;