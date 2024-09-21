import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Blogs = () => {
    const blogPosts = [
        {
            id: 1,
            title: 'Understanding React Hooks',
            content: 'React Hooks are functions that let you use state and other React features without writing a class...',
            author: 'John Doe',
            date: '2023-10-01'
        },
        {
            id: 2,
            title: 'A Guide to Bootstrap in React',
            content: 'Bootstrap is a popular CSS framework that can be easily integrated with React to build responsive web applications...',
            author: 'Jane Smith',
            date: '2023-10-05'
        },
        {
            id: 3,
            title: 'Managing State in React',
            content: 'State management is a crucial aspect of React development. This article explores various state management techniques...',
            author: 'Alice Johnson',
            date: '2023-10-10'
        }
    ];

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Blogs</h1>
            {blogPosts.map(post => (
                <div key={post.id} className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">By {post.author} on {post.date}</h6>
                        <p className="card-text">{post.content}</p>
                        <Link to={`/blogs/${post.id}`} className="btn btn-primary">
                            Read More
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Blogs;
