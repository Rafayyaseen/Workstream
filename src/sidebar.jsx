import React, { useState, useEffect } from 'react';
import {
    FaHome,
    FaClock,
    FaSitemap,
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import CustomNavbar from './navbar';
import beforearbisoft from './images/befarbi.png';
import afterarbisoft from './images/afterarbi.png';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Sidebar = ({ children }) => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [activeMenu, setActiveMenu] = useState("Dashboard");
    const { user_id } = useParams();
    const[ID,SETID]=useState(null);

    useEffect(() => {
        SETID(user_id);
        navigate(`/${user_id}`);
    }, []);

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
    const menuItem = [
        {
            path: `/${ID}`,
            name: "Dashboard",
            icon: <FaHome />
        },
        {
            path: "/organogram",
            name: "Organogram",
            icon: <FaClock />
        },
        {
            path: `/projectlogs/${ID}`,
            name: "Projectlogs",
            icon: <FaSitemap />
        }

    ]
    return (
        <div>
            <CustomNavbar myfunction={toggle}></CustomNavbar>
            <div className="container1">
                <div style={{ width: isOpen ? "270px" : "57px" }} className="sidebar1">
                    <div className="top_section"></div>
                    {
                        menuItem.map((item, index) => (
                            <NavLink
                                to={item.path}
                                key={index}
                                className={activeMenu === item.name ? "active link" : "link"}
                                onClick={() => {
                                    setActiveMenu(item.name);
                                    navigate(item.path);
                                }}
                                isActive={(match, location) => {
                                    if (!match) {
                                        return false;
                                    }
                                    setActiveMenu(item.name);
                                    return true;
                                }}
                            >
                                <div className="icon">{item.icon}</div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
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
                <main style={{ padding: 0 }}>{children}</main>
            </div>
        </div>
    );
};

export default Sidebar;