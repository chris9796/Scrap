import NavBar from "./components/NavBar"
import "./components_css/Page.css"
import Section from "./components/Section"
import {Routes, Route, Link} from "react-router-dom"
function App() {
  return (
    <>
      <div className="Page">
          <NavBar/>
          <Section/>
      </div>
    </>
  );
}

export default App;
