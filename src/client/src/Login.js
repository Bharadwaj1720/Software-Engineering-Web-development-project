import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom"
import './Login.css';
import { useState } from 'react';
import { useNavigate } from "react-router";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const deviceID = Math.random();

export default function Login() {
    const [form, setForm] = useState({
        username: "",
        password_plaintext: "",
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

        const response = await fetch("http://localhost:5000/general_accounts/login", {
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
        const answer = await response.json();
        setForm({ username: "", password_plaintext: "", device_id: "" });
        if (answer.auth_token != null) {
            window.location.href = "/Home";
        }
        else {
            window.location.href = "/";
        }
    }

    return (
        <div className="body_login">
            <div className="header">
                <Container className="container text-center">
                    <Row className="row">
                        <Col xs={4} md={4}>
                        </Col>
                        <Col xs={4} md={4}>
                            <img className="Logo" src="https://www.thehindubusinessline.com/news/education/rey8hd/article29086147.ece/ALTERNATES/LANDSCAPE_615/iit-tirupatiJPG" alt=" " />
                        </Col>
                        <Col xs={4} md={4}>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="main">
                <img className="Campus" src="https://i0.wp.com/skilloutlook.com/wp-content/uploads/2019/09/IIT-Tirupati-1.jpg?fit=2048%2C993&ssl=1" />
                <div className="Heading">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col">
                            </div>
                            <div className="col-md-6">
                                <h1>ERP IIT Tirupati</h1>
                            </div>
                            <div className="col">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Login">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-md-4">
                            </div>
                            <div className="col-md-4" style={{
                                border: 2,
                                borderStyle: 'solid',
                                borderColor: 'black',
                                height: 200
                            }}>
                                <div className="profile_pic">
                                    <img className="user" src="https://th.bing.com/th/id/R.c3631c652abe1185b1874da24af0b7c7?rik=XBP%2fc%2fsPy7r3HQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-user-icon-circled-user-icon-2240.png&ehk=z4ciEVsNoCZtWiFvQQ0k4C3KTQ6wt%2biSysxPKZHGrCc%3d&risl=&pid=ImgRaw&r=0" />
                                </div>
                                <div className="about">
                                    Account Login
                                </div>
                                <Form onSubmit={onSubmit}>
                                    <div>
                                        <input type="text" placeholder="Username" style={{ marginTop: 10 }} value={form.username} onChange={(e) => updateForm({ username: e.target.value })} />
                                    </div>
                                    <div>
                                        <input type="password" placeholder="Password" style={{ marginTop: 10 }} value={form.password_plaintext} onChange={(e) => updateForm({ password_plaintext: e.target.value, device_id: deviceID })} />
                                    </div>
                                    <Button variant="primary" value="Create person" type="submit" className="login_but" style={{
                                        marginTop: 10,
                                        backgroundColor: 'blue'
                                    }}>Login</Button>

                                </Form>
                            </div>
                        </div>
                        <div className="col-md-4">
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )


}