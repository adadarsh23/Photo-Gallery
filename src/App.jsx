// import { useState } from 'react'
import NavBar from './Components/NavBar'
import NoPage from './Components/ErrorSection7.jsx'
import Inbox from './Components/Inbox.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserForm from './Components/UserForm.jsx'
import Sign from './Components/Sign.jsx'
import LoginSubmit from './Components/LoginSubmit.jsx'
import Login from './Components/Login.jsx';
import SignInSubmit from './Components/SignInSubmit.jsx'
import UserSubmit from './Components/UserSubmit.jsx'
import AboutPage from './Components/AboutPage.jsx'
import CursorTrail from './Components/CursorTrail'; // 
import PrivacyPolicy from './components/PrivacyPolicy.jsx';
import Licenses from './Components/Licenses.jsx'
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
        <Route path="/mountain" element={<NavBar category="mountain" />} />
        <Route path="/river" element={<NavBar category="river" />} />
        <Route path="/technology" element={<NavBar category="technology" />} />
        <Route path="/travel" element={<NavBar category="travel" />} />
        <Route path="/food" element={<NavBar category="food" />} />
        <Route path="/animals" element={<NavBar category="animals" />} />
        <Route path="/sports" element={<NavBar category="sports" />} />
        <Route path="/architecture" element={<NavBar category="architecture" />} />
        <Route path="/people" element={<NavBar category="people" />} />
        <Route path="/art" element={<NavBar category="art" />} />
        <Route path="/fashion" element={<NavBar category="fashion" />} />
        <Route path="/music" element={<NavBar category="music" />} />
        <Route path="/movies" element={<NavBar category="movies" />} />
        <Route path="/games" element={<NavBar category="games" />} />
        <Route path="/books" element={<NavBar category="books" />} />
        <Route path="/health" element={<NavBar category="health" />} />
        <Route path="/fitness" element={<NavBar category="fitness" />} />
        <Route path="/science" element={<NavBar category="science" />} />
        <Route path="/space" element={<NavBar category="space" />} />
        <Route path="/history" element={<NavBar category="history" />} />
        <Route path="/photography" element={<NavBar category="photography" />} />
        <Route path="/travel" element={<NavBar category="travel" />} />
        <Route path="/food" element={<NavBar category="food" />} />
        <Route path="/sports" element={<NavBar category="sports" />} />
        <Route path="/sea" element={<NavBar category="sea" />} />
        <Route path="/sky" element={<NavBar category="sky" />} />
        <Route path="/forest" element={<NavBar category="forest" />} />
        <Route path="/city" element={<NavBar category="city" />} />
        <Route path="/village" element={<NavBar category="village" />} />
        <Route path="/desert" element={<NavBar category="desert" />} />
        <Route path="/snow" element={<NavBar category="snow" />} />
        <Route path="/rain" element={<NavBar category="rain" />} />
        <Route path="/sunset" element={<NavBar category="sunset" />} />
        <Route path="/sunrise" element={<NavBar category="sunrise" />} />
        <Route path="/surreal" element={<NavBar category="surreal" />} />
        <Route path="/fantasy" element={<NavBar category="fantasy" />} />
        <Route path="/moon" element={<NavBar category="moon" />} />
        <Route path="/minimalist" element={<NavBar category="minimalist" />} />
        <Route path="/retro" element={<NavBar category="retro" />} />
        <Route path="/vintage" element={<NavBar category="vintage" />} />
        <Route path="/blackandwhite" element={<NavBar category="blackandwhite" />} />
        <Route path="/abstract" element={<NavBar category="abstract" />} />

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