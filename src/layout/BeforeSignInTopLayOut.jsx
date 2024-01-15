import NavButton from "../common/NavButton/NavButton";
import { Link } from "react-router-dom";
import NavLogo from "../common/NavLogo";
import "./TopLayOut.css";
const BeforeSignInTopLayOut = () => {
    return (
        <>
            <nav className="NavBar">
                <Link to="/">
                    <NavLogo />
                </Link>
                <div className="NavButtonWrap">
                    
                        <NavButton name="Sign In" />
                   
                   
                        <NavButton name="Sign Up" />
                    
                </div>
            </nav>
        </>
    );
};

export default BeforeSignInTopLayOut;
