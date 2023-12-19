
import {Routes, Route} from "react-router-dom"
import Index from "./pages/Index.jsx"
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx"
import UserHome from "./pages/UserHome.jsx";
import UserHomeAfter from "./pages/UserHomeAfter.jsx";
import MyScraps from "./pages/MyScraps.jsx";
import ScrapSingle from "./pages/ScrapSingle.jsx";
import SettingsChangePassword from "./pages/SettingsChangePassword.jsx";
import SettingsDeleteAccount from "./pages/SettingsDeleteAccount.jsx";
function App() {
  return (
    <>
       <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap"
        rel="stylesheet"
      />
    <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap"
        rel="stylesheet"
      />
   

      <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/SignIn" element={<SignIn/>}/>
          <Route path="/UserHome" element={<UserHome/>}/>
          <Route path="/UserHomeAfter" element={<UserHomeAfter/>}/>
          <Route path="/MyScraps" element={<MyScraps/>}/>
          <Route path="/ScrapSingle" element={<ScrapSingle/>}/>
          <Route path="/SettingsChangePassword" element={<SettingsChangePassword/>}/>
          <Route path="/SettingsDeleteAccount" element={<SettingsDeleteAccount/>}/>
      </Routes>

      
    </>
  );
}

export default App;
