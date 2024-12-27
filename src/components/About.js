import React from 'react';
import '../index.css';
const About = () => {
    return (
        <div className="container my-5" id="about">
            <h2 className="text-center mb-4">About Me</h2>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <img src="about-me.jpg" alt="About Me" className="img-fluid rounded shadow" />
                </div>
                <div className="col-md-6">
                    <p className="text-muted">
                        I'm a passionate software developer dedicated to helping small businesses establish their online presence. From portfolios to e-commerce, I've worked on a variety of projects to bring ideas to life.
                    </p>
                    <a href="resume.pdf" className="btn btn-outline-primary">Download Resume</a>
                </div>
            </div>
        </div>
    );
};

export default About;
