
import {Routes, Route, Link} from "react-router-dom"
function App() {
  return (
    <>
      <Link to="/"></Link>

      <Routes>
          <Route path="/" element={Index}/>
      </Routes>

      
    </>
  );
}

export default App;
