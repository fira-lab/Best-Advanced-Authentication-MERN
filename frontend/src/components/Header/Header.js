import React from 'react'
import "./Header.scss"
import { FiLogIn } from "react-icons/fi";
import {  FaUserCircle } from "react-icons/fa";
import { Link, NavLink,useNavigate} from 'react-router-dom';


const Header = () => {

    const activeLink = ({isActive}) =>(isActive ? "active": "" );
    
    const navigate = useNavigate();
    
   const goHome = () => {

   }
  return (
    <header>
        <nav>
            <div className='logo' onClick={goHome}>
            <FiLogIn size={35}/>
            <span>AUTH:Z</span>

            <ul className='home-links'>
                <li className='--flex-center'>
                <FaUserCircle size={40}/>
                <p className='--color-white'>
                    Hi, Fira 
                </p>

                </li>
                <li>
                    <button className='--btn --btn-primary'>
                        <Link to="/login">
                            Login
                        </Link>
                    </button>
                </li>
                <li>
                   
                        <NavLink to="/profile" className={activeLink}>
                            Profile
                        </NavLink>
                    
                </li>
                <li>
                    <button className='--btn --btn-Secondary'>
                        <Link to="/login">
                            LoginOut
                        </Link>
                    </button>
                </li>
            </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header;
