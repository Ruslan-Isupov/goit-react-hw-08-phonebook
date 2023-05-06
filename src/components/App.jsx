import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout/Layout';
import { refreshUser } from 'redux/auth/authOperations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';


const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();


 useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<PublicRoute>
							<RegisterPage />
							</PublicRoute>} />
          <Route path="/login" element={<PublicRoute>
							<LoginPage />
							</PublicRoute>} />
          <Route path="/contacts" element={<PrivateRoute>
							<ContactsPage />
							</PrivateRoute>} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
     </div>
  );
};
