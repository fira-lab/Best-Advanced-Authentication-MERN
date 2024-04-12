import React from 'react'
import { NavLink } from 'react-router-dom'

const PageMenu = () => {
  return (
    <nav className='--btn-google --p --mb' style={{display:"flex"}}>
        <div className='--flex-center'>
    
  

    <ul className='home-links'>
        
       <li>
           
                <NavLink to="/profile" >
                    Profile
                </NavLink>
            
        </li>
        <li>
           
           <NavLink to="/changePassword" >
               Change Password
           </NavLink>
       
   </li>
   <li>
           
           <NavLink to="/users" >
               users
           </NavLink>
       
   </li>
        
    </ul>
    </div>
</nav>
  )
}

export default PageMenu
