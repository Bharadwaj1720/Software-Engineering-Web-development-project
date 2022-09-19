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
import { useEffect } from "react";



export default function Book_Checkout() {
    const [state, setState] = useState(<div></div>);
    const [Bname, setBname] = useState(null)

    function set() {
        setState(<div>{recordList()}</div>)

    }

    const [records, setRecords] = useState([]);

    // This method fetches the records from the database.
    useEffect(() => {
        async function getRecords() {
            const response = await fetch(`http://localhost:5000/library_books/`);

            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const records = await response.json();
            setRecords(records);
        }

        getRecords();

        return;
    }, [records.length]);


    function recordList() {
        var flag = 0;
        var i = 0;
        return records.map((record) => {
            i = i + 1;
            if (record.book.title.toLowerCase() === Bname.toLowerCase()) {
                flag = 1;
                return (
                    <div>
                        <Display
                            record={record}
                        />
                    </div>
                );
            }
            if (flag === 0 && i === records.length) {
                return (
                    <div><br />
                        No Book Found</div>
                )
            }
        });
    }

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

}
const Display = (props) => (
    <div style={{ marginTop: 30, width: 2000 }}>
        <Tab.Container id="list-group-tabs-example" >
            <Row>
                <Col sm={4}>
                    <ListGroup style={{ marginTop: 20 }}>
                        <ListGroup.Item>
                            <span>Book Name: {props.record.book.title} </span>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <span>Book Author: {props.record.book.author}</span>
                        </ListGroup.Item>

                        <ListGroup.Item >
                            <span>Book ID: {props.record._id}</span>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Tab.Container>
    </div>
)
