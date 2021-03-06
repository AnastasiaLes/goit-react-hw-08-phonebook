import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'react-bootstrap';
import PrivateRoute from 'components/appBar/PrivateRoute';
import PublicRoute from 'components/appBar/PublicRoute';
import { Suspense, lazy, useEffect } from 'react';
import AppBar from 'components/appBar/AppBar';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { getIsFetchingCurrentUser } from 'redux/auth/authSlice';

const HomeView = lazy(() =>
  import('../views/HomeView' /* webpackChunkName: "home-page" */)
);
const Welcome = lazy(() =>
  import('../views/WelcomeView' /* webpackChunkName: "welcome-page" */)
);
const LoginView = lazy(() =>
  import('../views/LoginView' /* webpackChunkName: "login-page" */)
);
const RegisterView = lazy(() =>
  import('../views/RegisterView' /* webpackChunkName: "register-page" */)
);
const ContactsView = lazy(() =>
  import('../views/ContactView' /* webpackChunkName: "contacts-page" */)
);

export function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <h2>Loading....</h2>
  ) : (
    <div>
      <AppBar />
      <Suspense
        fallback={
          <div>
            <Spinner animation="border" variant="secondary" />
            Loading....
          </div>
        }
      >
        <Routes>
          <Route path="goit-react-hw-08-phonebook/" element={<HomeView />}>
            <Route
              index
              element={
                <PublicRoute>
                  <Welcome />
                </PublicRoute>
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute restricted>
                  <RegisterView />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute restricted>
                  <LoginView />
                </PublicRoute>
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <ContactsView />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}
