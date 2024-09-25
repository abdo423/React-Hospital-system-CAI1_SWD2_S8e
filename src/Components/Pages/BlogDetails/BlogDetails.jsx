import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';

const BlogDetails = () => {
    const { id } = useParams(); // Get the id from the URL
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch the blog data by its id from JSONPlaceholder
        const fetchBlogDetails = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
                if (response.data) {
                    setBlog(response.data); // Set the blog data
                } else {
                    setLoading(false);
                    setError('Blog not found!');
                }
                setLoading(false);
            } catch (error) {
                setError('Error fetching blog data!');
                setLoading(false);
            }
        };

        fetchBlogDetails();
    }, [id]); // Fetch the blog when the component mounts and when id changes

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!blog) return <div>Blog not found</div>;

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="8">
                    <Card>
                        <Card.Body>
                            <Card.Title>{blog.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Blog ID: {blog.id}</Card.Subtitle>
                            <Card.Text>{blog.body}</Card.Text> {/* JSONPlaceholder uses 'body' for content */}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default BlogDetails;
