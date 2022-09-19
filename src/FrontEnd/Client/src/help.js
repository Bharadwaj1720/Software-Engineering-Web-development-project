import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';
import { ListGroup } from "react-bootstrap";
import Layout from "./Layout";
export default function Help() {
    return (
        <div>
            <Layout message="Welcome to Help section" />
            <div className="Book_Search" style={{ width: 500 }}>

                <ListGroup>
                    <ListGroup.Item disabled>Technical officer IITT</ListGroup.Item>
                    <ListGroup.Item disabled>Contact: 6485125932</ListGroup.Item>
                    <ListGroup.Item disabled>Email: TechOff@iittp.ac.in</ListGroup.Item>
                </ListGroup>
                <br />
                <ListGroup>
                    <ListGroup.Item disabled>Asst Technical officer IITT</ListGroup.Item>
                    <ListGroup.Item disabled>Contact: 6485125932</ListGroup.Item>
                    <ListGroup.Item disabled>Email: assTechOff@iittp.ac.in</ListGroup.Item>
                </ListGroup>


            </div>
        </div>

    )
}