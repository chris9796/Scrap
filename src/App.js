
import {Routes, Route} from "react-router-dom"
import Index from "./pages/Index.jsx"
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx"
import UserHome from "./pages/UserHome.jsx";
import UserHomeAfter from "./pages/UserHomeAfter.jsx";
import MyScraps from "./pages/MyScraps.jsx";
import ScrapSingle from "./pages/ScrapSingle.jsx";
function App() {
  return (
    <>
    
   

      <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/SignIn" element={<SignIn/>}/>
          <Route path="/UserHome" element={<UserHome/>}/>
          <Route path="/UserHomeAfter" element={<UserHomeAfter/>}/>
          <Route path="/MyScraps" element={<MyScraps/>}/>
          <Route path="/ScrapSingle" element={<ScrapSingle/>}/>
      </Routes>

      
    </>
  );
}

export default App;
