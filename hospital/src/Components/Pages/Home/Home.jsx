import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <div className="container">
            <div className="jumbotron mt-5">
                <h1 className="display-4">Welcome to DEPI Hospital</h1>
                <p className="lead">We provide the best healthcare services.</p>
                <hr className="my-4" />
                <p>Explore our services and facilities to know more about us.</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </div>
        </div>
    );
}

export default Home;