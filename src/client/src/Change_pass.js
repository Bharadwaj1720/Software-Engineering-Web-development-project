import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';
import Layout from "./Layout";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Change_pass() {
    return (
        <div>
            <Layout message="Change Password" />
            <div className="Book_Search" style={{ width: 500 }}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter old Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter new Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Re-enter new Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary">Change Password</Button>


                </Form>

            </div>
        </div>
    )
}