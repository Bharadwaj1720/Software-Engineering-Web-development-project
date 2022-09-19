import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';
import Layout from "./Layout";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Profile() {
    return (
        <div>
            <Layout message="Welcome to profile page" />
            <div className="Book_Search" style={{ width: 500 }}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="VUPPALA BHARADWAJ" disabled />
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Roll Number</Form.Label>
                        <Form.Control type="text" placeholder="CS20B051" disabled />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Department</Form.Label>
                        <Form.Control type="text" placeholder="Computer Science and Engineering" disabled />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Programme</Form.Label>
                        <Form.Control type="text" placeholder="B.Tech" disabled />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Year</Form.Label>
                        <Form.Control type="text" placeholder="2020" disabled />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Date of Joining</Form.Label>
                        <Form.Control type="text" placeholder="16/11/2020" disabled />
                    </Form.Group>
                </Form>

            </div>
        </div>
    )
}