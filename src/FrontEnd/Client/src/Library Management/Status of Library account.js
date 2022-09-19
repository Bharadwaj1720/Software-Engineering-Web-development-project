import React from "react";
import '../Home.css';
import Layout from "../Layout";
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";
export default function Status() {
    const [state, setState] = useState(<div></div>);
    const [Roll, setRoll] = useState(null)

    function set() {
        setState(<div>{recordList()}</div>)

    }

    const [records, setRecords] = useState([]);

    // This method fetches the records from the database.
    useEffect(() => {
        async function getRecords() {
            const response = await fetch(`http://localhost:5000/library_accounts/`);

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
            if (record.ID.toLowerCase() === Roll.toLowerCase()) {
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
                        No Account Found</div>
                )
            }
        });
    }

    const Display = (props) => (
        <div style={{ marginTop: 30, width: 2000 }}>
            <Tab.Container id="list-group-tabs-example" >
                <Row>
                    <Col sm={4}>
                        <ListGroup style={{ marginTop: 20 }}>
                            <ListGroup.Item>
                                <span>Full Name: {props.record.name} </span>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <span>Roll Number: {props.record.ID}</span>
                            </ListGroup.Item>

                            <ListGroup.Item >
                                <span>Unique ID: {props.record._id}</span>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )




    return (
        <div>
            <Layout message="Library Status Module" />
            <div className="Book_Search" style={{ width: 400 }}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Institute Roll Number</Form.Label>
                        <Form.Control type="text" placeholder="Roll number" onChange={(val) => setRoll(val.target.value)} />
                    </Form.Group>
                    <Button variant="primary" onClick={set}>
                        Check status
                    </Button>
                </Form>
                <div>
                    {state}
                </div>
            </div>
        </div>

    )
}