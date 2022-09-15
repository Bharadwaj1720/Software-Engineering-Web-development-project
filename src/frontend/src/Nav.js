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
                            <li><Link className="navbar-items" to='health-center'>Medical Records and Appointment booking</Link></li>
                            <li><Link Link className="navbar-items" to='doc-availability'>Doctor Availability Timings</Link></li>
                        </ul>
                    </div>
                    <div >

                        <span className='sideH_Nav'>Library</span>
                        <ul>
                            <li><Link Link className="navbar-items" to='Book Checkout'>Book Checkout</Link></li>
                            <li><Link Link className="navbar-items" to='Fine Management'>Fine Management and Due clearance</Link></li>
                            <li><Link Link className="navbar-items" to='Status of Library account'>Status of library account</Link></li>
                            <li><Link Link className="navbar-items" to='Book Acquisition Module'>Book Acquisition Module</Link></li>
                            <li><Link Link className="navbar-items" to='Journal Acquisition Module'>Journal Acquisition Module</Link></li>
                            <li><Link Link className="navbar-items" to='Lost book Module'>Lost book Module</Link></li>
                        </ul>
                    </div>
                    <div >

                        <span className='sideH_Nav'>General Administration</span>
                        <ul>
                            <li><Link Link className="navbar-items" to='vehicle-management'>Vehicle Management Records</Link></li>
                            <li><Link Link className="navbar-items" to='vehicle-availability'>Available vehicles</Link></li>
                            <li><Link Link className="navbar-items" to='book-vehicle'>Book Vehicle</Link></li>

                            <li><Link Link className="navbar-items" to='AllotRoom'>Allot Rooms</Link></li>
                            <li><Link Link className="navbar-items" to='AvailableRooms'>Available Rooms</Link></li>
                            <li><Link Link className="navbar-items" to='GuestHouseManagements'>Guest House Management</Link></li>
                            {/* <li><Link to='Guest house Management'>Institute Guest house Management</Link></li> */}
                        </ul>
                    </div>
                    <div>
                        <span className='sideH_Nav'>Sponcered Research and Consultancy</span>
                        <ul >
                            <li><Link Link className="navbar-items" to='Open Projects Notifications'>Open Projects Notifications</Link></li>
                            <li><Link Link className="navbar-items" to='Accounts'>Processes from Accounts
                                Module</Link></li>
                            <li><Link className="navbar-items" to='Purchase'>Processes from Purchase
                                Module</Link></li>
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