import React from "react";
import '../Home.css';
import Layout from "../Layout";
import ListGroup from 'react-bootstrap/ListGroup';
export default function Lost_Book() {
    return (
        <div>
            <Layout message="Lost Book Module" />
            <div className="Book_Search" style={{ width: 400 }}>
                <div><h2>List of Lost Books</h2></div>
                <ListGroup>
                    <ListGroup.Item variant="dark">Danger</ListGroup.Item>
                    <ListGroup.Item variant="dark">Danger</ListGroup.Item>
                    <ListGroup.Item variant="dark">Danger</ListGroup.Item>
                    <ListGroup.Item variant="dark">Danger</ListGroup.Item>
                    <ListGroup.Item variant="dark">Danger</ListGroup.Item>
                    <ListGroup.Item variant="dark">Danger</ListGroup.Item>
                    <ListGroup.Item variant="dark">Danger</ListGroup.Item>
                    <ListGroup.Item variant="dark">Danger</ListGroup.Item>
                    <ListGroup.Item variant="dark">Danger</ListGroup.Item>

                </ListGroup>
            </div>
        </div>

    )
}