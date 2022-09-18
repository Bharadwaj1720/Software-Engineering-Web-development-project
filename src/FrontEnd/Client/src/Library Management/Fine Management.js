import React from "react";
import '../Home.css';
import "react-bootstrap"
import Layout from "../Layout";
import Button from 'react-bootstrap/Button';

import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

export default function Fine_Management() {
    return (
        <div>
            <Layout message="Fine Management Module" />

            <div className="Book_Search" style={{ width: 2000 }}>
                <div><h2>List of Active Fines</h2></div>
                <Tab.Container id="list-group-tabs-example" >
                    <Row>
                        <Col sm={4}>
                            <ListGroup>
                                <ListGroup.Item action href="#link1" >
                                    <span>Book Name: Harry Porter</span>
                                    <hr />
                                    <span>Fine Name: Missing Book</span>
                                    <hr />
                                    <span>Fine Amount: $25</span>
                                </ListGroup.Item>
                                <br />
                                <br />
                                <ListGroup.Item action href="#link2">
                                    <span>Book Name: Dragon book</span>
                                    <hr />
                                    <span>Fine Name: Over due</span>
                                    <hr />
                                    <span>Fine Amount: $10</span>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col sm={8}>
                            <Tab.Content>
                                <Tab.Pane eventKey="#link1">
                                    <Button variant="primary" type="submit" style={{ backgroundColor: "green" }}>
                                        Pay
                                    </Button>
                                </Tab.Pane>

                                <Tab.Pane eventKey="#link2">
                                    <Button variant="primary" type="submit" style={{ backgroundColor: "green" }}>
                                        Pay
                                    </Button>

                                </Tab.Pane>

                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>

            </div>
        </div >


    )
}