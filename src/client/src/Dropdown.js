import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from "react-router";
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useGlobalState } from '.';

export default function Dropdown_button() {


    const [form, setForm] = useState({
        username: "",
        device_id: ""
    });

    const navigate = useNavigate;
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }


    // This function will handle the submission.
    async function onSubmit(e) {


        e.preventDefault();



        // When a post request is sent to the create url, we'll add a new record to the database.
        const newAccount = { ...form };

        await fetch("http://localhost:5000/general_accounts/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newAccount),
        })
            .catch(error => {
                window.alert(error);
                return;
            });

        setForm({ username: "", device_id: "" });
        navigate("/");
    }
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                <img className="myc_icon_Home" style={{ marginRight: 5 }} src="https://th.bing.com/th/id/R.c3631c652abe1185b1874da24af0b7c7?rik=XBP%2fc%2fsPy7r3HQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-user-icon-circled-user-icon-2240.png&ehk=z4ciEVsNoCZtWiFvQQ0k4C3KTQ6wt%2biSysxPKZHGrCc%3d&risl=&pid=ImgRaw&r=0" />
                Account
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1"><Button style={{ backgroundColor: "inherit", border: "0" }}><Link to="Change_pass">Change Password</Link></Button></Dropdown.Item>
                <Dropdown.Item href="#/action-2"><Button style={{ backgroundColor: "inherit", border: "0" }}><Link to="Profile">Profile</Link></Button></Dropdown.Item>
                <Form onSubmit={onSubmit}>
                    <Dropdown.Item href="#/action-3"><Button type="submit" onClick={() => { updateForm({ username: "Bharadwaj", device_id: 1 }) }} style={{ backgroundColor: "inherit", border: "0", color: "blue" }}><Link to="">Logout</Link></Button></Dropdown.Item>
                    <Dropdown.Item href="#/action-4"><Button type="submit" onClick={() => updateForm({ username: "Bharadwaj", device_id: null })} style={{ backgroundColor: "inherit", border: "0", color: "blue" }}><Link to="">Logout all</Link></Button></Dropdown.Item>
                </Form>
            </Dropdown.Menu>
        </Dropdown>
    );
}
