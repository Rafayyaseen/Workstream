import React from 'react';
import { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './navbar.css'
import worklogo from './images/navbar-worklogo.png'
import dropimage from './images/imgtest1.png'
import slacklogo from './images/slack.png'
import listentool from './images/listentool.png'
import procedures from './images/procedures.png'
import librarylogo from './images/library.png'
import hirestream from './images/hirestream.png'
import lunchmenu from './images/lunchmenu.png'
import arbisoftses from './images/arbisoftsessions.png'
import surveys from './images/surveys.png'
import checkinapp from './images/checkinapp.png'
import holidays from './images/holidays.png'
import calander from './images/calender.png'
import peoplepartner from './images/peoplepartner.png'
import knowledgeshare from './images/knowledgeshare.png'
import merchandise from './images/merchandise.png'
import adminlogo from './images/admin.png'
import profilelogo from './images/profile-logo.png'
import logoutlogo from './images/logout.png'
import beforeclick from './images/beforeclick.png'
import afterclick from './images/afterclick.png'

const CustomNavbar = ({myfunction}) => {
    const [isInitialImage, setIsInitialImage] = useState(true);
    const toggleImage = () => {
        setIsInitialImage(!isInitialImage);
        myfunction();
      };



    return (
        <nav class="navbar">
           <button style={{border:'none',background:'white'}}id="navbtn" onClick={toggleImage}>
        <img 
          style={{ height: '25px', width: '31px',background:'white',margin:'8px'}} 
          id="btnimgclick" 
          src={isInitialImage ? beforeclick : afterclick} 
          alt=""
        />
      </button>
            <div class="logo">
                <a href=""><img id="img1" src={worklogo} alt="" /></a>
            </div>
            <Nav>
            <NavDropdown title={<img id="img2" src={dropimage} alt="Dropdown Icon" />} id="basic-nav-dropdown">
                    <div className="custom-dropdown">
                        <div className="column">
                            <NavDropdown.Item href="https://arbisoft.listentool.com/sign-in/"> <img src={listentool} alt="listentool" className="action-icon" /><p id="nav-p1">ListenTool</p></NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.2"><img src={librarylogo} alt="librarylogo" className="action-icon" /><p id="nav-p1">Library</p></NavDropdown.Item>
                            <NavDropdown.Item href="https://sites.google.com/arbisoft.com/arbisoft-sessions-portal/"><img src={arbisoftses} alt="arbisoft session logo" className="action-icon" /><p id="nav-p">Arbisoft Sessio...</p></NavDropdown.Item>
                            <NavDropdown.Item href="https://arbisoft.com/holidays"><img src={holidays} alt="holidays" className="action-icon" /><p id="nav-p1">Holidays</p></NavDropdown.Item>
                            <NavDropdown.Item href="#action/1.5"><img src={knowledgeshare} alt="knowledgeshare" className="action-icon" /><p id="nav-p">Knowledge Sh...</p></NavDropdown.Item>
                        </div>
                        <div className="column">
                            <NavDropdown.Item href="#action/2.1"><img src={slacklogo} alt="slacklogo" className="action-icon" /><p  id="nav-p11">Slack</p></NavDropdown.Item>
                            <NavDropdown.Item href="https://arbisoft.hirestream.io/login/"><img src={hirestream} alt="hirestream" className="action-icon" /><p id="nav-p">Hirestream</p></NavDropdown.Item>
                            <NavDropdown.Item href="#action/2.3"><img src={surveys} alt="surverys" className="action-icon" /><p id="nav-p1">Surveys</p></NavDropdown.Item>
                            <NavDropdown.Item href="#action/2.4"><img src={calander} alt="calander" className="action-icon" /><p id="nav-p">Calendar - Co...</p></NavDropdown.Item>
                            <NavDropdown.Item href="#action/2.5"><img src={merchandise} alt="merchandise" className="action-icon" /><p id="nav-p">Merchandise</p></NavDropdown.Item>
                        </div>
                        <div className="column">
                            <NavDropdown.Item href="#action/3.1"><img src={procedures} alt="procedures" className="action-icon" /><p id="nav-p">Procedures & ...</p></NavDropdown.Item>
                            <NavDropdown.Item href="https://docs.google.com/spreadsheets/d/1nXUtJ3HmH_H1WrS2o6hgMBDgF0ajvfkNmK71J69YFkQ/edit#gid=0"><img src={lunchmenu} alt="lunchmenu" className="action-icon" /><p id="nav-p">Lunch Menu</p></NavDropdown.Item>
                            <NavDropdown.Item href="https://checkin.arbisoft.com/"><img src={checkinapp} alt="checkinapp" className="action-icon" /><p id="nav-p">Check -In App</p></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4"><img src={peoplepartner} alt="peoplepartner" className="action-icon" /><p id="nav-p">People Partner...</p></NavDropdown.Item>
                        </div>
                    </div>
                </NavDropdown>

                <NavDropdown title={<img id="img3" src={adminlogo} alt="Dropdown Icon" />} id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/2.1">Action 2.1</NavDropdown.Item>
                    <NavDropdown.Item href="#action/2.2"><img src={profilelogo} alt="procedures" className='dropimg2' /></NavDropdown.Item>
                    <NavDropdown.Item href="#action/2.3"><img src={logoutlogo} alt="procedures" className='dropimg2' /></NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </nav>

    );
};

export default CustomNavbar;