import UrlInput from "../components/UrlInput.jsx";
import "../components_css/Page.css"
import SectionTitle from "../components/SectionTitle.jsx";
import "../components_css/IndexPage.css"
//
import "../components_css/NavBar.css";
import NavLogo from '../components/NavLogo';
import NavButton from '../components/NavButton.jsx';
import {Link} from "react-router-dom"

function Index(){

return(
    <div className="Page">

        <nav className='NavBar'>
            <Link to="/">
            <NavLogo/>
            </Link>
            <Link to="/SignUp">
            <NavButton name="Sign Up"/>
            </Link>
            <Link to="/SignIn">
            <NavButton name="Sign In"/>
            </Link>
        </nav>
        <section>
        <SectionTitle title="Scrap" size="100px" color="white"/>
            <form action="">
                
                <br></br>
                <UrlInput/>
            </form>
         </section>
       
         </div>

      );
   
}

export default Index;

