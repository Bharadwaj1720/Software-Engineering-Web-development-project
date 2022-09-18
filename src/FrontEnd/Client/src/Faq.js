import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';
import Layout from "./Layout";
import { ListGroup } from "react-bootstrap";
export default function FAQ() {
    return (
        <div>
            <Layout message="Welcome to FAQs page" />
            <div className="Book_Search" style={{ width: 500 }}>

                <ListGroup>
                    <ListGroup.Item disabled>Q) What is ERP</ListGroup.Item>
                    <ListGroup.Item disabled>ERP is a software for IITTP member through which people can do many things</ListGroup.Item>
                </ListGroup>
                <br />
                <ListGroup>
                    <ListGroup.Item disabled>Q) Who made ERP</ListGroup.Item>
                    <ListGroup.Item disabled>ERP is made by CS 2020 batch</ListGroup.Item>
                </ListGroup>


            </div>
        </div>
    )
}