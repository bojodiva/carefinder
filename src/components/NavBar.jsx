import './NavBar.css';
import picture from "../images/carefinder-logo.png";
import {NavLink} from "react-router-dom";

export default function NavBar(){

  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "#0c7179" : "black",
      // fontWeight: isActive ? "bold" : "normal",
    };
  };
  
  return (
    <>
      <div className="navbar--section">
      <div className='nav--logo'>
        <img src={picture} className="logo"></img>
      <h2 className='logo--name'>CareFinder</h2>
      </div>

      <div className='nav--links'>
        <NavLink to="/" style={navLinkStyle} className='nav--link'>Home</NavLink>
        <NavLink to="/about" style={navLinkStyle} className='nav--link'>About</NavLink>
        <NavLink to="/search" style={navLinkStyle} className='nav--link'>Find Hospital</NavLink>
      </div>

      <div className='nav--buttons'>
        <NavLink className="log--in">Login</NavLink>
        <NavLink className='sign--up' >Signup</NavLink>
      </div>
      </div>  
    </>
  )
}