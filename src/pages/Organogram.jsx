import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState} from 'react';
import useFetchJson from '../usefetch';
import CustomDataTable from '../customtable';

const Organogram = () => {
    const [url,Seturl]=useState('http://localhost:8000/team/teams/api/1/');
    const [selectedOption, setSelectedOption] = useState('Pattern'); 


    const handleDropdownSelect = (eventKey,event) => {
        let urlBasic="http://localhost:8000/team/teams/api/";
        Seturl(urlBasic+`${eventKey}`+"/");
        const value = event.target.innerText;
        setSelectedOption(value);
        console.log('Event Key:', eventKey);
        console.log('Value:', value);

    }
    const jsonData = useFetchJson(url);
    if (!jsonData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="organogram">
            <h1>Organogram</h1>
            <div className="centered-card-container">
                <Card style={{ width: '100%', height:'100%' }}>
                    <Card.Header style={{ color: '#083671' }}>Teams</Card.Header>
                    <Card.Body>
                        <Dropdown onSelect={handleDropdownSelect}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic-organo" style={{ width: '18%', position: 'relative' }}>
                            {selectedOption}
                                <span style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}>
                                    &#x25BC;
                                </span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu style={{ width: '18%' }}>
                                <Dropdown.Item eventKey="1" value="Pattern">Pattern</Dropdown.Item>
                                <Dropdown.Item eventKey="2" value="Unstack">Unstack</Dropdown.Item>
                                <Dropdown.Item eventKey="3" value="ElectronX">ElectronX</Dropdown.Item>
                                <Dropdown.Item eventKey="4" value="DevOps">DevOps</Dropdown.Item>
                                <Dropdown.Item eventKey="5" value="Careem">Careem</Dropdown.Item>
                                <Dropdown.Item eventKey="6" value="Edly ALW">Edly ALW</Dropdown.Item>
                                <Dropdown.Item eventKey="7" value="Edly ALW">ilmX</Dropdown.Item>
                                <Dropdown.Item eventKey="8" value="Fresh Grad Hiring">Fresh Grad Hiring</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <div style={{marginTop:'50px'}}>
                            {jsonData.custom_data ? <CustomDataTable customData={jsonData.custom_data} /> : 'No custom data available'}
                        </div>
                    </Card.Body>

                </Card>

            </div>
        </div>
    );
}

export default Organogram;