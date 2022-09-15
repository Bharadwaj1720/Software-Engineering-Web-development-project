import React from "react";
import '../Home.css';
import Layout from "../Layout";
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
export default function Status() {
    return (
        <div>
            <Layout message="Library Status Module" />
            <div className="Book_Search" >
                <h2>List of Books Issued</h2>
                <ListGroup variant="flush">
                    <ListGroup.Item>Sipsers book</ListGroup.Item>
                    <ListGroup.Item>Harry potter</ListGroup.Item>
                    <ListGroup.Item>The theory of everything</ListGroup.Item>
                    <ListGroup.Item>Dragon book</ListGroup.Item>
                </ListGroup>
                <hr />
                <h2>List of Books with are overdue</h2>
                <ListGroup variant="flush">
                    <ListGroup.Item>CLRS</ListGroup.Item>
                    <ListGroup.Item>Data structures in C++</ListGroup.Item>
                </ListGroup>
            </div>
        </div>

    )
}