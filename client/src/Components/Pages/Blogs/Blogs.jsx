import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PagesHeroSection from '../../Shared/PagesHeroSection/PagesHeroSection';
import BlogsSection from './BlogsSection/BlogsSection';
import PaginationSection from './PaginationSection/PaginationSection';

const Blogs = () => {
 

    return (
        <>
        <PagesHeroSection title="From Our Blog" subTitle="Blogs" />
         <BlogsSection/>
         <PaginationSection/>
        </>
       
    );
};

export default Blogs;
