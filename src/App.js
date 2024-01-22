import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/IndexPage/Index.jsx";
import SignUp from "./pages/SignUpPage/SignUp.jsx";
import SignIn from "./pages/SignInPage/SignIn.jsx";
import UserHome from "./pages/UserHome/UserHome.jsx";
import UserHomeAfter from "./pages/UserHomeAfter/UserHomeAfter.jsx";
import MyScraps from "./pages/Scraps/MyScraps.jsx";
import ScrapSingle from "./pages/ScrapSingle/ScrapSingle.jsx";
import SettingsChangePassword from "./pages/SettingsPage/ChangePasswordPage/SettingsChangePassword.jsx";
import AfterSignInTopLayOut from "./layout/AfterSignInTopLayOut.jsx";
import BeforeSignInTopLayOut from "./layout/BeforeSignInTopLayOut.jsx";
import NotFoundPage from "./pages/ErrorPage/NotFoundPage.jsx";
import SettingDeleteAccount from "./pages/SettingsPage/DeleteAccountPage/SettingsDeleteAccount.jsx";
// import PrivateRoute from "./Route/PrivateRoute.js";
// const[authenticate,setAuthenticate]=useState(false);


function App() {
    return (
        <Routes>
            <Route element={<BeforeSignInTopLayOut />}>
                <Route path="/" element={<Index />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
            </Route>
            <Route element={<AfterSignInTopLayOut />}>
                <Route path="/userHome" element={<UserHome />} />
                <Route path="/userhomeafter" element={<UserHomeAfter />} />
                <Route path="/myscraps" element={<MyScraps />} />
                <Route path="/scrapsingle" element={<ScrapSingle />} />
                <Route path="/settingschangepassword" element={<SettingsChangePassword />} />
                <Route path="/settingsdeleteaccount" element={<SettingDeleteAccount />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default App;
