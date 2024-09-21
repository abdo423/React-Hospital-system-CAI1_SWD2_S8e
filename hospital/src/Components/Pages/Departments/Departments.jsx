import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';

const Departments = () => {
    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        // Fetch data from JSONPlaceholder API as a placeholder for departments
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setDepartments(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the departments!', error);
            });
    }, []);

    return (
        <Container>
            <Row>
                {departments.slice(0, 10).map(department => (
                    <Col key={department.id} sm={12} md={6} lg={4} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>{department.title}</Card.Title>
                                <Card.Text>{department.body}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Departments;
