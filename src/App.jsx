// import { useState } from 'react'
import NavBar from './Components/NavBar'
import NoPage from './Components/ErrorSection7.jsx'
import Inbox from './Components/Inbox.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserForm from './Components/UserForm.jsx'
import Sign from './Components/Sign.jsx'
import LoginSubmit from './Components/LoginSubmit.jsx';
import Login from './Components/Login.jsx';
import SignInSubmit from './Components/SignInSubmit.jsx'
import UserSubmit from './Components/UserSubmit.jsx'
import AboutPage from './Components/AboutPage.jsx'
import CursorTrail from './Components/CursorTrail.jsx';
import PrivacyPolicy from './components/PrivacyPolicy.jsx';
import Licenses from './Components/Licenses.jsx';
import ForgotPassword from "./Components/ForgotPassword.jsx";

function App() {
  return (
    <BrowserRouter>
     <CursorTrail />
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
        {/* ...other routes... */}
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        {/* Other routes */}
        <Route path="/licenses" element={<Licenses/>} />
        {/* Other routes */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App