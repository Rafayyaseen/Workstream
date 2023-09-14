import { useParams } from 'react-router-dom';
import React from 'react';
import { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const getCurrentWeekDates = () => {
    const currentDate = new Date();
    const currentDayOfWeek = currentDate.getDay();

    const mondayDate = new Date(currentDate);
    mondayDate.setDate(currentDate.getDate() - currentDayOfWeek + 1);
    const tuesdayDate = new Date(currentDate);
    tuesdayDate.setDate(currentDate.getDate() - currentDayOfWeek + 2);
    const wednesdayDate = new Date(currentDate);
    wednesdayDate.setDate(currentDate.getDate() - currentDayOfWeek + 3);
    const thursdayDate = new Date(currentDate);
    thursdayDate.setDate(currentDate.getDate() - currentDayOfWeek + 4);
    const fridayDate = new Date(currentDate);
    fridayDate.setDate(currentDate.getDate() - currentDayOfWeek + 5);
    const saturdayDate = new Date(currentDate);
    saturdayDate.setDate(currentDate.getDate() - currentDayOfWeek + 6);

    const sundayDate = new Date(currentDate);
    sundayDate.setDate(currentDate.getDate() - currentDayOfWeek + 7);

    return { mondayDate, sundayDate, tuesdayDate, wednesdayDate, thursdayDate, fridayDate, saturdayDate };
};

const Projectlogs = () => {
    const [checkedDays, setCheckedDays] = useState({
        Monday: false,
        Tuesday: false,
        Wednesday: false,
        Thursday: false,
        Friday: false,
        Saturday: false,
        Sunday: false,
    });
    const toggleWeekdays = () => {
        const allWeekdaysSelected = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
            .every(day => checkedDays[day]);

        const newStatus = !allWeekdaysSelected;

        setCheckedDays(prevState => ({
            ...prevState,
            Monday: newStatus,
            Tuesday: newStatus,
            Wednesday: newStatus,
            Thursday: newStatus,
            Friday: newStatus,
        }));

        setIsChecked(newStatus);  
    };


    const [data, setData] = useState({
        mondayData: [],
        tuesdayData: [],
        wednesdayData: [],
        thursdayData: [],
        fridayData: [],
        saturdayData: [],
        sundayData: []
    });

    const sendDataToServer = async () => {
        try {
            const response = await fetch('http://localhost:8000/user/api/projectlogs/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data, user_id }),
            });

            console.log('Request:', JSON.stringify({ data, user_id }));
            console.log('Response:', await response.text());

            if (response.ok) {

            } else {

            }
        } catch (error) {
            console.error('Error:', error);
        }

    };
    const addField = (day) => {
        setData({
            ...data,
            [`${day}Data`]: [...data[`${day}Data`], { id: uuidv4(), time: '', note: '', selectedOption: '' }],
        });
    };
    const updateField = (day, id, field, value) => {
        const updatedDayData = data[`${day}Data`].map((entry) =>
            entry.id === id ? { ...entry, [field]: value } : entry
        );
        setData({ ...data, [`${day}Data`]: updatedDayData });
    };

    const handleSubmit = () => {
        console.log(data, user_id);
        sendDataToServer();

    };
    const renderAccordionItem = (day, index) => (
        <Accordion.Item eventKey={index}>
            <Accordion.Header>
                <Form.Check
                    style={{ marginRight: '1rem' }}
                    aria-label="option 1"
                    checked={checkedDays[day]}
                    onChange={() => toggleDay(day)}
                />
                {day} ({formatDate(weekDates?.[`${day.toLowerCase()}Date`])})
            </Accordion.Header>
            <Accordion.Body style={{
                maxWidth: '100%',
                overflowY: 'auto',
                maxHeight: '180px'
            }}>
                {data[`${day.toLowerCase()}Data`].map(({ id, time, note, selectedOption }) => (
                    <div key={id} className="entry-container">
                        <div className="input-container">
                            <Form.Control
                                type="time"
                                value={time}
                                onChange={(e) => updateField(day.toLowerCase(), id, 'time', e.target.value)}
                            />

                        </div>
                        <div className="input-container">
                            <Form.Control
                                as="textarea" id="selecttype"
                                value={note}
                                placeholder='Description'
                                onChange={(e) => updateField(day.toLowerCase(), id, 'note', e.target.value)}
                            />
                        </div>
                        <div className="input-container">
                            <Form.Select id="selecttype"
                                value={selectedOption}
                                onChange={(e) =>
                                    updateField(day.toLowerCase(), id, 'selectedOption', e.target.value)
                                }
                            >
                                <option> Choose Tag</option>
                                <option value="Training">Training/Learning</option>
                                <option value="Coding">Coding</option>
                                <option value="Meeting">Meeting</option>
                                <option value="Documentation">Documentation</option>
                                <option value="Code Review">Code Review</option>
                                <option value="Testing">Testing</option>
                                <option value="Team Discussion">Team Discussion</option>
                                <option value="Interviewing">Interviewing</option>
                                <option value="Reporting/Analysis">Reporting/Analysis</option>
                            </Form.Select>
                        </div>
                    </div>
                ))}
                <Button onClick={() => addField(day.toLowerCase())}>+</Button>
            </Accordion.Body>
        </Accordion.Item>
    );



    const [isChecked, setIsChecked] = useState(false);
    const [weekDates, setWeekDates] = useState(null);
    const { user_id } = useParams();
    useEffect(() => {
        const getProjectLogs = async () => {
            try {
                const userId = user_id;
                const response = await axios.post('http://localhost:8000/user/api/getprojectlogs/', { userId });
                setData(response.data.data);
            } catch (error) {
                console.error('An error occurred while fetching data:', error);
            }
        };

        getProjectLogs();
        const dates = getCurrentWeekDates();
        setWeekDates(dates);
    }, []);

    const formatDate = (date) => {
        return date?.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
    };
    const handleSwitchChange = () => {

        setIsChecked(!isChecked);


        if (!isChecked) {
            yourCustomFunction();
        }
    }
    const yourCustomFunction = () => {
        console.log('Switch is ON');
    };
    const toggleDay = (day) => {
        setCheckedDays(prevState => ({
            ...prevState,
            [day]: !prevState[day],
        }));
    };



    return (
        <div className="projectlogs">
            <h5 style={{ color: '#464C53', fontWeight: '350', display: 'inline-block', marginLeft: '3.5rem', marginTop: '2.2rem' }}>Project Logs for the week - </h5> <h5 style={{ color: '#464C53', fontWeight: '650', display: 'inline-block' }}>Mon, {formatDate(weekDates?.mondayDate)} to Sun, {formatDate(weekDates?.sundayDate)} </h5>
            <div className="projectaccordion" style={{ backgroundColor: 'white', border: '1px solid #ccc' }}>
                <Form>
                    <Form.Check
                        style={{ marginLeft: '1.3rem', marginTop: '1rem', marginBottom: '0.5rem' }}
                        type="switch"
                        id="custom-switch"
                        label="Working Days"
                        onChange={toggleWeekdays}
                        checked={isChecked}  
                    />
                </Form>
                <Accordion defaultActiveKey="0">
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(
                        (day, index) => renderAccordionItem(day, index)
                    )}
                </Accordion>
                <Button style={{ marginLeft: '90%', marginTop: '1rem' }} onClick={handleSubmit}>Submit</Button>
            </div>
        </div>

    );
}

export default Projectlogs;