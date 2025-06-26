import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CursorTrail from './Components/CursorTrail.jsx';
import NoInternet from './Components/NoInternet.jsx';

const NavBar = lazy(() => import('./Components/NavBar'));
const NoPage = lazy(() => import('./Components/ErrorSection7.jsx'));
const Inbox = lazy(() => import('./Components/Inbox.jsx'));
const UserForm = lazy(() => import('./Components/UserForm.jsx'));
const Sign = lazy(() => import('./Components/Sign.jsx'));
const LoginSubmit = lazy(() => import('./Components/LoginSubmit.jsx'));
const Login = lazy(() => import('./Components/Login.jsx'));
const SignInSubmit = lazy(() => import('./Components/SignInSubmit.jsx'));
const UserSubmit = lazy(() => import('./Components/UserSubmit.jsx'));
const AboutPage = lazy(() => import('./Components/AboutPage.jsx'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy.jsx'));
const Licenses = lazy(() => import('./Components/Licenses.jsx'));
const ForgotPassword = lazy(() => import('./Components/ForgotPassword.jsx'));

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const goOnline = () => setIsOnline(true);
    const goOffline = () => setIsOnline(false);

    window.addEventListener('online', goOnline);
    window.addEventListener('offline', goOffline);

    return () => {
      window.removeEventListener('online', goOnline);
      window.removeEventListener('offline', goOffline);
    };
  }, []);

  if (!isOnline) return <NoInternet />;

  return (
    <BrowserRouter>
      <CursorTrail />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-white">Loading...</div>}>
        <Routes>
          <Route path="/" element={<NavBar />} />
          <Route path="/nature" element={<NavBar category="nature" />} />
          <Route path="/car" element={<NavBar category="car" />} />
          <Route path="/bike" element={<NavBar category="bike" />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/userform" element={<UserForm />} />
          <Route path="/userSubmit" element={<UserSubmit />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/loginsubmit" element={<LoginSubmit />} />
          <Route path="/signInSubmit" element={<SignInSubmit />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/licenses" element={<Licenses />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
