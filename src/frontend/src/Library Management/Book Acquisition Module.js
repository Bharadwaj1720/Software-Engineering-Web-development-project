import React from "react";
import '../Home.css';
import "react-bootstrap"
import Layout from "../Layout";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';


export default function Book_Acquisition() {
    return (
        <div>
            <Layout message="Book Acquisition Module" />
            <div className="Book_Search" style={{ width: 400 }}>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name of the Book</Form.Label>
                        <Form.Control type="text" placeholder="Book Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name of the Author</Form.Label>
                        <Form.Control type="text" placeholder="Author Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Enter Book ISBN number</Form.Label>
                        <Form.Control type="text" placeholder="Eg: 9876345312" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Publication</Form.Label>
                        <Form.Control type="text" placeholder="Publication Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Year of Publication</Form.Label>
                        <Form.Control type="text" placeholder="Year" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Why do you want to add this book?</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>


            </div>
        </div>

    )
}
