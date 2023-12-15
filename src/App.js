
import {Routes, Route, Link} from "react-router-dom"
import Index from "./pages/Index.jsx"
import SignUp from "./pages/SignUp.jsx";
function App() {
  return (
    <>
    
   

      <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
      </Routes>

      
    </>
  );
}

export default App;
