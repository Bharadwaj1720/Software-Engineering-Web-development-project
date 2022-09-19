import React from "react";
import '../Home.css';
import Layout from "../Layout";
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
export default function Status() {
    return (
        <div>
            <Layout message="Library Status Module" />
            <div className="Book_Search" style={{ width: 400 }}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter your full name</Form.Label>
                        <Form.Control type="text" placeholder="Name" />
                        <Form.Text className="text-muted">
                            The name you enter should be same as the name you gave to institute
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Institute Roll Number</Form.Label>
                        <Form.Control type="text" placeholder="Roll number" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Check status
                    </Button>
                </Form>
            </div>
        </div>

    )
}