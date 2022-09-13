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


export default function Book_Checkout() {
    const [state, setState] = useState(<div></div>);
    const [Bname, setBname] = useState(null)
    const [Aname, setAname] = useState(null)

    return (
        <div>
            <Layout message="Book Checkout Module" />
            <div className="Book_Search">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail" style={{ display: 'inline-block' }}>
                        <Form.Label>Search Book by Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter book name" onChange={(val) => setBname(val.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword" style={{ display: 'inline-block', marginLeft: 10 }}>
                        <Form.Label>Search Book by Author</Form.Label>
                        <Form.Control type="text" placeholder="Enter author name" onChange={(val) => setAname(val.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    </Form.Group>
                    <Button variant="primary" onClick={() => setState(<div>
                        <Display BookName={Bname} AuthorName={Aname} />


                    </div>)}>
                        Search
                    </Button>
                </Form>
                <div>
                    {state}
                </div>
            </div>
        </div>
    )
}


function Display(props) {
    return (
        <div style={{ marginTop: 30, width: 2000 }}>
            <Tab.Container id="list-group-tabs-example" >
                <Row>
                    <Col sm={4}>
                        <ListGroup>
                            <ListGroup.Item action href="#link1">
                                <span>Book Name: {props.BookName}</span>
                                <hr />
                                <span>Book Author: {props.AuthorName}</span>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={8}>
                        <Tab.Content>
                            <Tab.Pane eventKey="#link1">

                                <About />
                            </Tab.Pane>

                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );

}
function About() {
    return (
        <div>
            <h3>About</h3>
            This is a great book
        </div>

    )
}