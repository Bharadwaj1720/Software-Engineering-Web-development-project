import React from "react";
import '../Home.css';
import "react-bootstrap"
import Layout from "../Layout";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from "react-router";
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';


export default function Book_Acquisition() {

    const [form, setForm] = useState({
        title: "",
        author: "",
        ISBN: "",
    });
    const navigate = useNavigate;
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    // This function will handle the submission.
    async function onSubmit(e) {
        e.preventDefault();

        // When a post request is sent to the create url, we'll add a new record to the database.
        const newBook = { ...form };

        await fetch("http://localhost:5000/library_books/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newBook),
        })
            .catch(error => {
                window.alert(error);
                return;
            });

        setForm({ title: "", author: "", ISBN: "" });
        navigate("/");
    }


    return (
        <div>
            <Layout message="Book Acquisition Module" />
            <div className="Book_Search" style={{ width: 400 }}>
                <Form onSubmit={onSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name of the Book</Form.Label>
                        <Form.Control type="text" placeholder="Book Name" value={form.title}
                            onChange={(e) => updateForm({ title: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name of the Author</Form.Label>
                        <Form.Control type="text" placeholder="Author Name" value={form.author}
                            onChange={(e) => updateForm({ author: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Enter Book ISBN number</Form.Label>
                        <Form.Control type="text" placeholder="Eg: 9876345312" value={form.ISBN}
                            onChange={(e) => updateForm({ ISBN: e.target.value })} />
                    </Form.Group>
                    <Button variant="primary" type="submit" value="Create person"
                        className="btn btn-primary">
                        Submit
                    </Button>
                </Form>

            </div>
        </div>

    );
}
