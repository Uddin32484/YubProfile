
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
function Header() {


 
    return (
        <div className="Header">
       {/*   Logo */}
       <Link to="/">
           <div className="Header-logo">
                     <i className="fa fa-home" aria-hidden="true"></i>
                    
                   {/*   <img src="assets/images/YubLogo.JPG" /> */}
                  {/*    <img src={"https://th.bing.com/th/id/OIP.z5zG7ljx-1migRWzmn2AhQHaHa?w=150&h=180&c=7&o=5&dpr=1.75&pid=1.7"} alt="" />  */}
                </div>
               </Link>
      {/*   address */}
         <div className="Header-optionAddress">
           <div className="Header-option">
            <span className="Header-optionLineTwo">Hello,</span>
              <span className="Header-optionLineOne">I'm  Yub Uddin</span>
           </div>
          </div>
       {/*   Serach Bar */}
      <div className="Header-search">
      
        <div className="Header-searchIconContainer">
       

         </div>
        </div>

         
        <div className="Header-navItem">
       <Link to="/projects">
        <div className="Header-option">
         <span className="Header-optionLineTwo">Projects</span>
        </div>
        </Link>
        <Link to="/skills">
          <div className="Header-option">
         <span className="Header-optionLineOne">Skills</span>
        </div>
        </Link>
          <Link to="/jobs">
        <div className="Header-option">
         <span className="Header-optionLinethree">Jobs</span>
        </div>
        </Link>
        <Link to="/educations">
        <div className="Header-option">
        <span className="Header-optionLineTwo">Education</span>
        </div>
       </Link>
        <Link to="/resume">
         <div className="Header-option">
       <span className="Header-optionLinethree">Resume</span>
        </div>
        </Link>
         <Link to="/contact">
         <div className="Header-option">
         <span className="Header-optionLineOne">Contact</span>
          
        </div>
        </Link>
        <Link to="/">
         <div className="Header-option">
         <span className="Header-optionLineOne"> <i className="fa fa-home" aria-hidden="true">  </i></span>
        
        </div>
        </Link>
       </div> 
       <Link to="/cart">
        <div className="Header-optionCart">
                     
                     
                    </div>
          </Link>
        </div>
    )
}

export default Header
