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

export default function Open_Project() {
    const [state, setState] = useState(<div></div>);

    function set() {
        setState(<div>{recordList()}</div>)

    }

    const [records, setRecords] = useState([]);

    // This method fetches the records from the database.
    useEffect(() => {
        async function getRecords() {
            const response = await fetch(`http://localhost:5000/open_projects/`);

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
        return records.map((record) => {
            return (
                <div>
                    <Display
                        record={record}
                    />
                </div>
            );
        });
    }
    return (
        <div>
            <Layout message="Open Projects Notifications" />
            <div className="Book_Search" style={{ width: 1000 }}>
                <div><h2>List of Notifications</h2></div>
            </div>
            <div style={{ marginTop: 200, width: 2000, marginLeft: 100 }}>
                {recordList()}
            </div>
        </div>

    )
}
const Display = (props) => (
    <div>
        <Tab.Container id="list-group-tabs-example" >
            <Row>
                <Col sm={4}>
                    <ListGroup>
                        <ListGroup.Item >
                            <span>Project Name: {props.record.project_name}</span>
                            <br />
                            <span>Project discipline: {props.record.discipline}</span>
                            <br />
                            <span>Project duration: {props.record.project_duration}</span>
                        </ListGroup.Item>
                        <br />
                    </ListGroup>
                </Col>
            </Row>
        </Tab.Container>
    </div >
)