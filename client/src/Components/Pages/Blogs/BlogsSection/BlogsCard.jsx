import React from "react";
import styles from "./BlogCard.module.css";
import { Link } from "react-router-dom";

const BlogsCard = ({ blog }) => {
  // Encode the image path to handle spaces and special characters

  // Format the date
  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div key={blog.id} className="col-lg-7 col-md-10 mb-4">
      <div className="card">
        <img
          src={process.env.REACT_APP_API_BASE_URL + "/" + blog.image} // Use the encoded URL
          alt={blog.title}
          className="card-img-top"
        />
        <div className={`card-body ${styles.blogContent}`}>
          <p className="card-text">
            By {blog.author} {formattedDate}
          </p>
          <h4 className="card-title">{blog.title}</h4>
          <p className="card-text">{blog.content}</p>
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
