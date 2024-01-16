import "./TopLayOut.css";
import { Link, Outlet } from "react-router-dom";
import NavLogo from "../common/NavLogo";
import NavButton from "../common/NavButton/NavButton";
import "./TopLayOut.css";
const AfterSignInTopLayOut = () => {
    return (
        <>
            <nav className="NavBar">
                <Link to="/UserHome">
                    <NavLogo />
                </Link>
                <div className="NavButtonWrap">
                    <Link to="/">
                        <NavButton name="Sign Out" color="#EE5656" />
                    </Link>
                    <Link to="/SettingsChangePassword">
                        <NavButton name="Settings" />
                    </Link>
                </div>
            </nav>
            <Outlet />
        </>
    );
};

export default AfterSignInTopLayOut;
