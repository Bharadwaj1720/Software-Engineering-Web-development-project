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

    return (
        <div>
            <Layout message="Book Checkout Module" />
            <div className="Book_Search">
                <Form>
                    <Form.Group className="mb-6" controlId="formBasicEmail" style={{ display: "inline-block" }}>
                        <Form.Label>Search Book by Name</Form.Label>
                        <Form.Control type="text" placeholder="EG: Harry Porter" onChange={(val) => setBname(val.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    </Form.Group>
                    <Button variant="primary" onClick={set}>
                        Search
                    </Button>
                </Form>
                <div>
                    {state}
                </div>
            </div>
        </div>
    )


    function set() {
        if (Bname.toLowerCase() == "harry" || Bname.toLowerCase() == "harry potter") {
            setState(<div>
                <Display1 />
            </div>);
        }
        else if (Bname.toLowerCase() == "the theory of everything") {
            setState(<div>
                <Display2 />
            </div>);
        }
        else {
            setState(<div style={{ marginTop: 20 }}>No book found</div>)
        }

    }
}




function Display1() {
    return (
        <div style={{ marginTop: 30, width: 2000 }}>
            <Tab.Container id="list-group-tabs-example" >
                <Row>
                    <Col sm={4}>
                        <ListGroup>
                            <ListGroup.Item action href="#link1">
                                <span>Book Name: Harry Porter and the Philosopher's Stone </span>
                            </ListGroup.Item>

                            <ListGroup.Item action href="#link1">
                                <span>Book Author: JK Rowling</span>
                            </ListGroup.Item>
                        </ListGroup>

                        <ListGroup style={{ marginTop: 20 }}>
                            <ListGroup.Item action href="#link2">
                                <span>Book Name: Harry Potter and the Chamber of Secrets  </span>
                            </ListGroup.Item>

                            <ListGroup.Item action href="#link2">
                                <span>Book Author: JK Rowling</span>
                            </ListGroup.Item>
                        </ListGroup>


                        <ListGroup style={{ marginTop: 20 }}>
                            <ListGroup.Item action href="#link3">
                                <span>Book Name: Harry Porter and the Deathly Hallows </span>
                            </ListGroup.Item>

                            <ListGroup.Item action href="#link3">
                                <span>Book Author: JK Rowling</span>
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

                            <Tab.Pane eventKey="#link3">

                                <About />
                            </Tab.Pane>

                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );

}

function Display2() {
    return (
        <div style={{ marginTop: 30, width: 2000 }}>
            <Tab.Container id="list-group-tabs-example" >
                <Row>
                    <Col sm={4}>
                        <ListGroup>
                            <ListGroup.Item action href="#link1">
                                <span>Book Name: The Theory of Everything </span>
                            </ListGroup.Item>

                            <ListGroup.Item action href="#link1">
                                <span>Book Author: Stephen Hawking</span>
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

                            <Tab.Pane eventKey="#link3">

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