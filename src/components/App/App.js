import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { useDispatch } from 'react-redux';

import AppBar from 'components/AppBar/AppBar';
import { currentUser } from '../../redux/thunks';
import Container from 'components/Container/Container';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CircularProgress from '@mui/material/CircularProgress';
const Home = lazy(() => import('../../pages/Home/Home'));
const RegisterPage = lazy(() =>
  import('../../pages/RegisterPage/RegisterPage')
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() =>
  import('../../pages/ContactsPage/ContactsPage')
);
const PrivateRoute = lazy(() => import('components/PrivateRoute'));
const PublicRoute = lazy(() => import('components/PublicRoute'));
export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);
  return (
    <Container>
      <ToastContainer autoClose={3000} position="top-right" />
      <AppBar />
      {/* <Suspense fallback={<Loading...</div>}> */}
      <Suspense fallback={<CircularProgress />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<div>NotFound </div>} />
        </Routes>
      </Suspense>
    </Container>
  );
};
