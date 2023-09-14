import Card from 'react-bootstrap/Card';
import { TbActivityHeartbeat, TbSpeakerphone } from "react-icons/tb";
import { FaCalendarAlt, FaBirthdayCake, FaHandshake } from 'react-icons/fa';
import { BsEmojiAngry, BsEmojiFrown, BsEmojiNeutral, BsEmojiSmile, BsEmojiLaughing } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import { GiSuitcase } from "react-icons/gi";
import{ AiOutlineTeam } from "react-icons/ai";
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [userName, setUserName] = useState('');
    const customButtonStyle = {
        position: 'absolute ',
        display: 'inline-block',
        fontSize: '12px',
        padding: '5px 8px',
        marginLeft:'6px',
    };
    const { user_id } = useParams();
    useEffect(() => {
       
        const fetchUsername = async () => {
            try {
              const userId = user_id; 
              const response = await axios.post('http://localhost:8000/user/api/getusername/', { userId });
              const username = response.data.name;
              setUserName(username);
              console.log(`Fetched username: ${username}`);
            } catch (error) {
              console.error('An error occurred while fetching data:', error);
            }
          };
      
          fetchUsername();

      }, [user_id]);
    return (
        <div className="dashboard">
            <div className="remaindercard">
            <h2 style={{marginTop:'25px',marginBottom:'58px',color:'#464C53',display:'inline-block',fontWeight:'650',marginRight:'6px'}}>Hi, </h2>
            <h2 style={{color:'#464C53',display:'inline-block',fontWeight:'400'}}>{userName}!</h2>
            
                <Card>
                    <Card.Header style={{ backgroundColor: 'rgba(225, 232, 242, 0.8)', color: '#083671', width: '90%', marginLeft: '5%', borderRadius: '8px' }}><div class="remaindericon"><FaCalendarAlt /></div>My Reminders</Card.Header>
                    <Card.Body> 
                        <blockquote className="blockquote mb-0" style={{ borderLeft: '5px solid #1084F1', borderRadius: '3.5px', padding: '5px' }}>
                            <p style={{ fontSize: '16px' }}>
                                Complete your profile{' '}
                            </p>
                            <footer className="blockquote-footer" style={{ fontSize: '12px' }}>
                                Please add your Kin's information in your profile. <cite title="Source Title"></cite>
                            </footer>
                        </blockquote>
                        <hr class="line" />
                        <blockquote className="blockquote mb-0" style={{ borderLeft: '5px solid #1084F1', borderRadius: '3.5px', padding: '5px' }}>
                            <p style={{ fontSize: '16px' }} >
                                Complete your profile{' '}
                            </p>
                            <footer className="blockquote-footer" style={{ fontSize: '12px' }}>
                                Please add Chat ID for Slack. <cite title="Source Title"></cite>
                            </footer>
                        </blockquote>
                        <hr class="line" />
                        <blockquote className="blockquote mb-0" style={{ borderLeft: '5px solid #1084F1', borderRadius: '3.5px', padding: '5px' }}>
                            <p style={{ fontSize: '16px' }} >
                                Add Text CV detail{' '}
                            </p>
                            <footer className="blockquote-footer" style={{ fontSize: '12px' }}>
                                Add summary, skills, projects for your Text CV <cite title="Source Title"></cite>
                            </footer>
                        </blockquote>
                        <hr class="line" />
                        <blockquote className="blockquote mb-0" style={{ borderLeft: '5px solid #1084F1', borderRadius: '3.5px', padding: '5px' }}>
                            <p style={{ fontSize: '16px' }}>
                                Training Invitation{' '}
                            </p>
                            <footer className="blockquote-footer" style={{ fontSize: '12px' }}>
                                by Suleman Latif for "Share it" with Arbisoft <cite title="Source Title"></cite>
                            </footer>
                        </blockquote>
                        <hr class="line" />
                        <blockquote className="blockquote mb-0" style={{ borderLeft: '5px solid #1084F1', borderRadius: '3.5px', padding: '5px' }}>
                            <p style={{ fontSize: '16px' }}>
                                Training Invitation{' '}
                            </p>
                            <footer className="blockquote-footer" style={{ fontSize: '12px' }}>
                                by Fatima Dawood for Talk n Heal ...<cite title="Source Title"></cite>
                            </footer>
                        </blockquote>
                        <hr class="line" />
                    </Card.Body>
                </Card>
            </div>
            <div className="moodstats">
                <Card>
                    <Card.Header style={{ backgroundColor: 'rgba(225, 232, 242, 0.8)', color: '#083671', width: '90%', marginLeft: '5%', borderRadius: '8px' }}><div class="remaindericon"><TbActivityHeartbeat /></div>Mood</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0" >
                            <p style={{ fontSize: '14px', textAlign: 'center' }}>
                                {' '}How are you doing today?{' '}
                            </p>
                        </blockquote>
                        <blockquote className="blockquote mb-0">
                            <p>
                                {' '}<div className="moodicon" style={{ marginLeft: '9%', marginTop: '25px', display: 'inline-block' }}><BsEmojiAngry style={{ fontSize: '30px', marginLeft: '7px' }} /></div>
                                <div className="moodicon" style={{ marginLeft: '9%', marginTop: '25px', display: 'inline-block' }}><BsEmojiFrown style={{ fontSize: '30px' }} /></div>
                                <div className="moodicon" style={{ marginLeft: '9%', marginTop: '25px', display: 'inline-block' }}><BsEmojiNeutral style={{ fontSize: '30px' }} /></div>
                                <div className="moodicon" style={{ marginLeft: '9%', marginTop: '25px', display: 'inline-block' }}><BsEmojiSmile style={{ fontSize: '30px' }} /></div>
                                <div className="moodicon" style={{ marginLeft: '9%', marginTop: '25px', display: 'inline-block' }}><BsEmojiLaughing style={{ fontSize: '30px' }} /></div>{' '}
                            </p><a href="" style={{fontSize:'12px',marginBottom:'50px'}}>View mood stats</a>

                        </blockquote>
                    </Card.Body>
                </Card>
                <Card style={{marginTop:'30px'}}>
                    <Card.Header style={{ backgroundColor: 'rgba(225, 232, 242, 0.8)', color: '#083671', width: '90%', marginLeft: '5%', borderRadius: '8px' }}><div class="remaindericon"><AiOutlineTeam/></div>Team Updates</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0" >
                            <p style={{ fontSize: '12px'}}>
                                {' '}No team updates available{' '}
                            </p>
                        </blockquote>
                        <blockquote className="blockquote mb-0">
                            <p>
                                {' '}<div className="teamupdates" style={{height:'300px',width:'100%'}}></div>{' '}
                            </p>

                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
            <div className="announcements">
                <Card>
                    <Card.Header style={{ backgroundColor: 'rgba(225, 232, 242, 0.8)', color: '#083671', width: '90%', marginLeft: '5%', borderRadius: '8px' }}><div class="remaindericon"><TbSpeakerphone /></div>Announcements</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0" >
                            <p style={{ fontSize: '11px' }}>
                                {' '} <div className="moodicon" style={{ marginLeft: '1%', marginRight: '12px', marginTop: '10px', display: 'inline-block' }}><FaBirthdayCake style={{ fontSize: '20px' }} /></div><p style={{display:'inline-block'}}>Danish Sattar & 2 more have birthdays today </p><Button variant="outline-danger" style={customButtonStyle}>Wish Him</Button>{' '}
                            </p>
                            <hr class="line" />
                            <p style={{ fontSize: '11px' }}>
                                {' '} <div className="moodicon" style={{ marginLeft: '1%', marginRight: '12px', display: 'inline-block' }}><GiSuitcase style={{ fontSize: '20px' }} /></div> <p style={{display:'inline-block'}}>Daniyal Farman has work anniversary today</p><Button variant="outline-warning" style={customButtonStyle}>Wish Them</Button>{' '}
                            </p>
                            <hr class="line" />
                            <p style={{ fontSize: '11px' }}>
                                {' '} <div className="moodicon" style={{ marginLeft: '1%', marginRight: '12px', display: 'inline-block' }}><FaHandshake style={{ fontSize: '20px' }} /></div><p style={{display:'inline-block'}}>Habib Ur Rehman & 3 more joined us recently </p><Button variant="outline-info" style={customButtonStyle}>Greet Them</Button>{' '}
                            </p>
                            <hr class="line" />
                            <p style={{ fontSize: '18px', fontWeight: '600' }}>
                                Re: Jashn-e-Azadi{' '}
                            </p>
                            <footer className="blockquote-footer" style={{ fontSize: '12px' }}>
                                Hi Folks! The countdown to Jashn-e-Azadi has begun! Get ready to express your love for Pakistan with Arbisoft on the 10th of August. Join us for the hoisting of the flag, rendition of the national <cite title="Source Title"></cite>
                            </footer>
                            <hr class="line" />
                            <p style={{ fontSize: '18px', fontWeight: '600' }}>
                                Complete your profile{' '}
                            </p>
                            <footer className="blockquote-footer" style={{ fontSize: '12px' }}>
                            Last day to update your details on Organogram! I will share a Google sheet with you in the coming days to update your client details. Team leads and project data will be collected from Organogram<cite title="Source Title"></cite>
                            </footer>
                            <hr class="line" />
                            <p style={{ fontSize: '18px', fontWeight: '600' }}>
                                Re: Buckle up for NPS 2023 - Q3!{' '}
                            </p>
                            <footer className="blockquote-footer" style={{ fontSize: '12px' }}>
                                Ladies and gentlemen! Arbitainment is thrilled to present "Jashn-e-Azadi", a patriotic extravaganza, on the 10th of August! Join us for a day filled with love and pride for Pakistan<cite title="Source Title"></cite>
                            </footer>
                            <hr class="line" />
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>

        </div>

    );
}

export default Dashboard;
