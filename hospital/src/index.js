import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import AboutUs from "./Components/Pages/AboutUs/AboutUs";
import Services from "./Components/Pages/Services/Services";
import ContactUs from "./Components/Pages/ContactUs/ContactUs";
import Departments from "./Components/Pages/Departments/Departments";
import Doctors from "./Components/Pages/Doctors/Doctors";
import BlogDetails from "./Components/Pages/BlogDetails/BlogDetails";
import Blogs from "./Components/Pages/Blogs/Blogs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/departments",
        element: <Departments />,
      },
      {
        path: "/doctors",
        element: <Doctors />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />, // Pass blogPosts as props
      }
  
    ],
    // errorElement: <ErrorPage />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
