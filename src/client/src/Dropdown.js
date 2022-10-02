import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
export default function Dropdown_button() {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                <img className="myc_icon_Home" style={{ marginRight: 5 }} src="https://th.bing.com/th/id/R.c3631c652abe1185b1874da24af0b7c7?rik=XBP%2fc%2fsPy7r3HQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-user-icon-circled-user-icon-2240.png&ehk=z4ciEVsNoCZtWiFvQQ0k4C3KTQ6wt%2biSysxPKZHGrCc%3d&risl=&pid=ImgRaw&r=0" />
                Account
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1"><Link to="Change_pass">Change Password</Link></Dropdown.Item>
                <Dropdown.Item href="#/action-2"><Link to="Profile">Profile</Link></Dropdown.Item>
                <Dropdown.Item href="#/action-3"><Link to="">Logout</Link></Dropdown.Item>
                <Dropdown.Item href="#/action-4"><Link to="">Logout all</Link></Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}
