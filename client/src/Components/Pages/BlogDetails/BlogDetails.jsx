import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./BlogDetails.module.css";
import { fetchPostById } from "../../../APIs/BlogPostApi";

function BlogDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  // Fix the selector path and destructuring
  const { post, status, error } = useSelector((state) => state.blogsSlice);

  useEffect(() => {
    if (id) {
      dispatch(fetchPostById(id));
    }
  }, [dispatch, id]); // Add id to dependency array

  if (status === 'loading') {
    return <div className="text-center p-4">Loading...</div>;
  }

  if (status === 'failed') {
    return <div className="text-center p-4 text-danger">Error: {error}</div>;
  }

  if (!post) {
    return <div className="text-center p-4">Post not found</div>;
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <section id="blogs-section" className={styles.blogSection}>
      <div className={`container mx-auto row gap-3 align-items-center justify-content-center ${styles.blogs}`}>
        <div className="blog-card col-lg-7">
          <div className={`card ${styles.card}`}>
            <div className={styles.imageContainer}>
              <img
                src={process.env.REACT_APP_API_BASE_URL + '/' + post.image}
                alt={post.title}
                className="img-fluid card-img-top"
              />
            </div>
            <div className={`p-2 ${styles.blogContent}`}>
              <p className="text-primary">
                By {post.author || 'Admin'} - {formattedDate}
              </p>
              <h4>
                <strong>{post.title}</strong>
              </h4>
              <div className="text-secondary">
                {post.content.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogDetails;