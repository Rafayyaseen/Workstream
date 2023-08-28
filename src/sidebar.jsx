import React, { useState } from 'react';
import {
    FaHome,
    FaClock,
    FaSitemap,
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import CustomNavbar from './navbar';
import beforearbisoft from './images/befarbi.png';
import afterarbisoft from './images/afterarbi.png';

const Sidebar = ({children}) => {

    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const imageStyle = isOpen ? 
    { 
        height: '48px', 
        width: '120px',
        background: 'white',
        margin: '8px',
        transition: 'all 0.5s',
    } :
    { 
        height: '25px', 
        width: '29px',
        background: 'white',
        margin: '8px',
        transition: 'all 0.5s',
    };
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
            <CustomNavbar myfunction={toggle}></CustomNavbar>
        <div className="container1">
           <div style={{width: isOpen ? "270px" : "55px"}} className="sidebar1">
               <div className="top_section"></div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
                <img 
                style={imageStyle}
                id="btnimage2" 
                src={isOpen ? beforearbisoft : afterarbisoft} 
                alt="" 
            />
           </div>
           <main>{children}</main>
        </div>
        </div>
    );
};

export default Sidebar;