import React from 'react';
import '../index.css';
const Projects = () => {
    return (
        <div className="container my-5" id="projects">
            <h2 className="text-center mb-4">My Projects</h2>
            <div className="row g-4">
                <div className="col-md-4">
                    <div className="card shadow-sm">
                        <img src="project1.jpg" className="card-img-top" alt="Project 1" />
                        <div className="card-body">
                            <h5 className="card-title">Project 1</h5>
                            <p className="card-text text-muted">A responsive portfolio website for a freelancer.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow-sm">
                        <img src="project2.jpg" className="card-img-top" alt="Project 2" />
                        <div className="card-body">
                            <h5 className="card-title">Project 2</h5>
                            <p className="card-text text-muted">An e-commerce platform for a small business.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow-sm">
                        <img src="project3.jpg" className="card-img-top" alt="Project 3" />
                        <div className="card-body">
                            <h5 className="card-title">Project 3</h5>
                            <p className="card-text text-muted">A modern blog platform with dynamic features.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
