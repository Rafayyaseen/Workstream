import React, { useState } from 'react';
import {
    FaHome,
    FaClock,
    FaSitemap,
    FaBars,
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import CustomNavbar from './navbar';

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaHome/>
        },
        {
            path:"/organogram",
            name:"Organogram",
            icon:<FaClock/>
        },
        {
            path:"/projectlogs",
            name:"Projectlogs",
            icon:<FaSitemap/>
        }
    
    ]
    return (
        <div>
            <CustomNavbar></CustomNavbar>
        <div className="container1">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar1">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo1">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars1">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
        </div>
    );
};

export default Sidebar;