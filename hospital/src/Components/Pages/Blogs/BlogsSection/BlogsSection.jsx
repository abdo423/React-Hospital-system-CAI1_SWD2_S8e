import React from "react";
import styles from "./BlogsSection.module.css";
import BlogsCard from "./BlogsCard";
const blogs = [
  {
    id: 1,
    imgSrc: "https://dummyimage.com/600x400/cccccc/000000&text=Placeholder",
    date: "March 24, 2021",
    title: "Uompe Qrear High Ecent Nche Without Some Prinlc Uomp",
    description:
      "Rapidiously qntegrate distrbuted supply chains throuih marke position bestn practices chain marke positonn bestin practicer iaretcive fashion and sound quorces for.",

  },
  {
    id: 2,
    imgSrc: "https://dummyimage.com/600x400/cccccc/000000&text=Placeholder",
    date: "March 24, 2021",
    title: "Uompe Qrear High Ecent Nche Without Some Prinlc Uomp",
    description:
      "Rapidiously qntegrate distrbuted supply chains throuih marke position bestn practices chain marke positonn bestin practicer iaretcive fashion and sound quorces for.",

  },
  {
    id: 3,
    imgSrc: "https://dummyimage.com/600x400/cccccc/000000&text=Placeholder",
    date: "March 24, 2021",
    title: "Uompe Qrear High Ecent Nche Without Some Prinlc Uomp",
    description:
      "Rapidiously qntegrate distrbuted supply chains throuih marke position bestn practices chain marke positonn bestin practicer iaretcive fashion and sound quorces for.",
   
  },
];

const BlogsSection = () => {
  return (
    <section id={styles.BlogsSection} className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          {blogs.map((blog) => (
           <BlogsCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
