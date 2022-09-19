import React from "react";
import '../Home.css';
import Layout from "../Layout";
import ListGroup from 'react-bootstrap/ListGroup';
export default function Lost_Book() {
    return (
        <div>
            <Layout message="Lost Book Module" />
            <div className="Book_Search">
                <div><h2>List of Lost Books</h2></div>
                <ListGroup>
                    <ListGroup.Item variant="dark">System Software(ISBN: 0-9226-9090-1)</ListGroup.Item>
                    <ListGroup.Item variant="dark">Probability Random Processes(ISBN: 0-8258-3707-3)</ListGroup.Item>
                    <ListGroup.Item variant="dark">Artificial Intelligence(ISBN: 0-3640-5108-6)</ListGroup.Item>
                    <ListGroup.Item variant="dark">Reversing(ISBN: 0-8045-5342-4)</ListGroup.Item>
                    <ListGroup.Item variant="dark">Furious Hours(ISBN: 0-3931-6316-4)</ListGroup.Item>
                    <ListGroup.Item variant="dark">The Splendid and the Vile(ISBN: 0-5286-8591-0)</ListGroup.Item>
                    <ListGroup.Item variant="dark">Cloud Computing(ISBN: 0-2848-6781-0)</ListGroup.Item>

                </ListGroup>
            </div>
        </div>

    )
}