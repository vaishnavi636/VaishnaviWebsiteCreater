import React from 'react';

const Services = () => {
    return (
        <div className="container my-5" id="services">
            <h2 className="text-center mb-4">My Services</h2>
            <div className="row g-4">
                <div className="col-md-4 text-center">
                    <div className="card shadow-sm border-0">
                        <div className="card-body">
                            <h5 className="card-title">Website Design</h5>
                            <p className="card-text text-muted">Creative designs tailored to your brand identity.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-center">
                    <div className="card shadow-sm border-0">
                        <div className="card-body">
                            <h5 className="card-title">E-Commerce Solutions</h5>
                            <p className="card-text text-muted">Robust online stores for your business growth.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-center">
                    <div className="card shadow-sm border-0">
                        <div className="card-body">
                            <h5 className="card-title">Portfolio Creation</h5>
                            <p className="card-text text-muted">Showcase your work with stunning portfolios.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
