import React from "react";
import '../Home.css';
import Layout from "../Layout";
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
export default function Processes_Accounts() {
    return (
        <div>
            <Layout message="Processes from Accounts Module" />
            <div style={{ marginTop: 100, marginLeft: 100 }}>
                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                    <Row>
                        <Col sm={4}>
                            <ListGroup>
                                <ListGroup.Item action href="#link1">
                                    Sponsored Project & Consultancy Project Accounts
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link2">
                                    Cash Book and ank
                                    Book
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link3">
                                    General Ledger
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link4">
                                    Trial Balance
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link5">
                                    Profit &Loss and Balancesheet
                                </ListGroup.Item>
                                <ListGroup.Item action href="#link6">
                                    Materials and Fixed Asset Management
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col sm={8}>
                            <Tab.Content>
                                <Tab.Pane eventKey="#link1">
                                    Items will be shown here.

                                </Tab.Pane>
                                <Tab.Pane eventKey="#link2">
                                    Items will be shown here.
                                </Tab.Pane>
                                <Tab.Pane eventKey="#link3">
                                    Items will be shown here.
                                </Tab.Pane>
                                <Tab.Pane eventKey="#link4">
                                    Items will be shown here.
                                </Tab.Pane>
                                <Tab.Pane eventKey="#link5">
                                    Items will be shown here.
                                </Tab.Pane>
                                <Tab.Pane eventKey="#link6">
                                    Items will be shown here.
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </div>
    )
}