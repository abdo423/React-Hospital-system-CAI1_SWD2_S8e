import React from 'react';
import styles from './BlogCard.module.css';
import { Link } from 'react-router-dom';
const BlogsCard = ({ blog }) => {
    return (
        <div key={blog.id} className="col-lg-7 col-md-10 mb-4">
            <div className="card">
                <img
                    src={blog.imgSrc}
                    alt="Placeholder"
                    className="card-img-top"
                />
                <div className={`card-body ${styles.blogContent}`}>
                    <p className="card-text">By Admin {blog.date}</p>
                    <h4 className="card-title">{blog.title}</h4>
                    <p className="card-text">{blog.description}</p>
                    <hr />
                    <Link to={`/blog/${blog.id}`} className="btn btn-primary">
                        Read More &gt;&gt;
                    </Link>
                </div>
            </div>
        </div>
    );
};



export default BlogsCard;