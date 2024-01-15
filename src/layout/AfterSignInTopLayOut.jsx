import "./TopLayOut.css"
import { Link } from "react-router-dom"
import NavLogo from "../common/NavLogo"
import NavButton from "../common/NavButton/NavButton"

const AfterSignInTopLayOut = () => {
  return (
    <>
        <nav className='NavBar'>
            <Link to="/UserHome">
            <NavLogo/>
            </Link>
            <Link to="/">
            <NavButton name="Sign Out" color="#EE5656"/>
            </Link>
            <Link to="/SettingsChangePassword">
            <NavButton name="Settings"/>
            </Link>
        </nav>
    </>
  )
}

export default AfterSignInTopLayOut

