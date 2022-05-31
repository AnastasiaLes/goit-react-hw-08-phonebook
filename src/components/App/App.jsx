import { Routes, Route } from 'react-router-dom';
// import { NameField } from '../Form/Form';
// import { ContactList } from '../ContactList/ContactList';
// import { FilterField } from '../Filter/filter';
// import { useGetContactsQuery } from 'redux/contactsSlice';
import { Suspense, lazy } from 'react';
// import HomeView from 'views/HomeView';
// import Welcome from "views/WelcomeView";
import AppBar from 'components/AppBar';

const HomeView = lazy(() =>
  import('../../views/HomeView' /* webpackChunkName: "home-page" */)
);
const Welcome = lazy(() =>
  import('../../views/WelcomeView' /* webpackChunkName: "welcome-page" */)
);
const LoginView = lazy(() =>
  import('../../views/LoginView' /* webpackChunkName: "login-page" */)
);
const RegisterView = lazy(() =>
  import('../../views/RegisterView' /* webpackChunkName: "register-page" */)
);
const ContactsView = lazy(() =>
  import('../../views/ContactView' /* webpackChunkName: "contacts-page" */)
);

export function App() {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<h2>Loading....</h2>}>
        <Routes>
          <Route path="/goit-react-hw-08-phonebook/" element={<HomeView />}>
            <Route index element={<Welcome />} />
            <Route path="register" element={<RegisterView />} />
            <Route path="login" element={<LoginView />} />
            <Route path="contacts" element={<ContactsView />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}
