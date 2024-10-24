import React, { useEffect } from "react";
import styles from "./BlogsSection.module.css";
import BlogsCard from "./BlogsCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../../../APIs/BlogPostApi";

const BlogsSection = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.blogsSlice.posts);
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <section id={styles.BlogsSection} className="py-5">
    <div className="container">
      <div className="row justify-content-center">
        {posts.map((blog) => (
         <BlogsCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  </section>
  );
};

export default BlogsSection;
