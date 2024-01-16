import NavButton from "../common/NavButton/NavButton";
import { Link } from "react-router-dom";
import NavLogo from "../common/NavLogo";
import "./TopLayOut.css";
import { Outlet } from "react-router-dom";
const BeforeSignInTopLayOut = () => {
    return (
        <div className="page">
            <nav className="NavBar">
                <Link to="/">
                    <NavLogo />
                </Link>
                <div className="NavButtonWrap">
                    <Link to="signin">
                        <NavButton name="Sign In" />
                    </Link>
                    <Link to="signup">
                        <NavButton name="Sign Up" />
                    </Link>
                </div>
            </nav>
            <Outlet />
        </div>
    );
};

export default BeforeSignInTopLayOut;
