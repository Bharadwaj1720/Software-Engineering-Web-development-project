import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

const options = [
    {
        name: 'Hamburger',
        scroll: true,
        backdrop: true,
    },
];

function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

    return (
        <>
            <Button variant="primary" onClick={toggleShow} className="me-2" style={{
                backgroundColor: 'white',
                borderColor: 'white',
                marginLeft: 5,
                color: 'blue',
                width: 50

            }}>
                <img className="hamburger_Home" src="https://cdn3.iconfinder.com/data/icons/mobile-friendly-ui/100/menu-512.png" style={{ width: 40, marginRight: 30 }} />


            </Button>
            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div >

                        <span className='sideH_Nav'>Health Center</span>
                        <ul>
                            <li>Doctor Consultantion</li>
                            <li>Student Medical Record</li>
                            <li>Employees Medical Record</li>
                            <li>Pharmacy Data</li>
                            <li>Referral letters to Hospitals</li>
                        </ul>
                    </div>
                    <div >

                        <span className='sideH_Nav'>Library</span>
                        <ul>
                            <li><Link to='Fine Management'>Fine Management and Due clearance</Link></li>
                            <li>Status of library account</li>
                            <li>Book Acquisition Module</li>
                            <li>Journal Acquisition Module</li>
                            <li>Lost book Module</li>
                        </ul>
                    </div>
                    <div >

                        <span className='sideH_Nav'>General Administration</span>
                        <ul>
                            <li>Institute Vehicle Management for
                                Guest</li>
                            <li>Institute Guest house Management</li>
                        </ul>
                    </div>
                    <div>
                        <span className='sideH_Nav'>Sponcered Research and Consultancy</span>
                        <ul >
                            <li>Open Projects Notifications</li>
                            <li>Processes from Accounts
                                Module</li>
                            <li>Processes from Purchase
                                Module</li>
                        </ul>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default function Nav() {
    return (
        <>
            {options.map((props, idx) => (
                <OffCanvasExample key={idx} {...props} />
            ))}
        </>
    );
}