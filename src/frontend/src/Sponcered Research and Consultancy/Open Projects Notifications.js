import React from "react";
import '../Home.css';
import Layout from "../Layout";
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
export default function Open_Project() {
    return (
        <div>
            <Layout message="Open Projects Notifications" />
            <div className="Book_Search" style={{ width: 1000 }}>
                <div><h2>List of Notifications</h2></div>
                <Tab.Container id="list-group-tabs-example" >
                    <Row>
                        <Col sm={4}>
                            <ListGroup>
                                <ListGroup.Item action href="#link1" >
                                    <span>Application for Sprinklr intern are open</span>
                                </ListGroup.Item>
                                <br />
                                <ListGroup.Item action href="#link2" >
                                    <span>Apply for Arista</span>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col sm={8}>
                            <Tab.Content>
                                <Tab.Pane eventKey="#link1">
                                    <About />
                                </Tab.Pane>

                                <Tab.Pane eventKey="#link2">
                                    <About />

                                </Tab.Pane>

                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>

            </div>
        </div>
    )
}
function About() {
    return (
        <div>
            <h2>Abstarct</h2>
            <div>
                This is a good company. .............

            </div>
        </div>
    )
}