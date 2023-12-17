
import {Routes, Route, Link} from "react-router-dom"
import Index from "./pages/Index.jsx"
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx"
function App() {
  return (
    <>
    
   

      <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/SignIn" element={<SignIn/>}/>
      </Routes>

      
    </>
  );
}

export default App;
