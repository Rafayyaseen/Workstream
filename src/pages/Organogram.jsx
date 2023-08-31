import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
const Organogram = () => {
    return (
        <div className="organogram">
            <h1>Organogram</h1>
            <div className="centered-card-container">
                <Card style={{ width: '100%' }}>
                    <Card.Header style={{ color: '#083671' }}>Teams</Card.Header>
                    <Card.Body>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic-organo" style={{ width: '18%', position: 'relative' }}>
                                Find Teams
                                <span style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}>
                                    &#x25BC;
                                </span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu style={{width:'18%'}}>
                                <Dropdown.Item href="#/action-1">Pattern</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">Unstack</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">ElectronX</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">DevOps</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">Careem</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">Edly ALW</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">ilmX</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">Fresh Grad Hiring</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Organogram;