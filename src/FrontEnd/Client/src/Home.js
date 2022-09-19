import React from "react"
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Home.css';
import Layout from "./Layout";
import ListGroup from 'react-bootstrap/ListGroup';
export default function Home() {
    return (
        <div className="body_Home">
            <Layout message="Welcome to IIT Tirupati ERP Portal" />
            <div className="Qselec">Important Announcements</div>
            <ListGroup variant="flush">
                <ListGroup.Item>Last date for clearing the fine is 31/09/2022</ListGroup.Item>
                <ListGroup.Item>Please collect the no due slip from library</ListGroup.Item>
                <ListGroup.Item>Please fill the form regarding the health center by 21/09/2022</ListGroup.Item>
                <ListGroup.Item>Your booked vehicle is ready</ListGroup.Item>
                <ListGroup.Item>You have been alloted a room in guest house</ListGroup.Item>
                <ListGroup.Item>Don't share your personal information with drivers</ListGroup.Item>
                <ListGroup.Item>Please pay for lost books</ListGroup.Item>

            </ListGroup>


        </div>



    )

}