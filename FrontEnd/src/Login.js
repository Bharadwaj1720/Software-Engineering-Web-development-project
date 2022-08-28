import React from "react";
import { ReactDOM } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Home from "./Home";
import root from "./Login"
import { Link } from "react-router-dom"
import './Login.css';

export default function Login() {
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
                                <div>
                                    <input type="text" placeholder="Username" style={{ marginTop: 10 }} />
                                </div>
                                <div>
                                    <input type="password" placeholder="Password" style={{ marginTop: 10 }} />
                                </div>
                                <button className="login_but" style={{
                                    marginTop: 10,
                                    backgroundColor: 'antiquewhite'
                                }}><Link className="link" to="Home">Login</Link></button>
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