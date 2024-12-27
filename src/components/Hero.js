import React from 'react';
import '../index.css';
const Hero = () => {
    return (
        <div className="hero-section">
            <div className="content text-center text-white">
                <h1 className="display-4 fw-bold">Welcome to Vaishnavi Website Creator</h1>
                <p className="lead mb-4">Crafting stunning websites for your business growth.</p>
                <a href="#projects" className="btn btn-primary px-4 py-2 me-2">View Portfolio</a>
                <a href="#contact" className="btn btn-secondary px-4 py-2">Hire Me</a>
            </div>
        </div>
    );
};

export default Hero;
