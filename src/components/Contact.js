import React from 'react';
import '../index.css';
const Contact = () => {
    return (
        <div className="container my-5" id="contact">
            <h2 className="text-center mb-4">Contact Me</h2>
            <form>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label for="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" required />
                    </div>
                    <div className="col-md-6">
                        <label for="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" required />
                    </div>
                </div>
                <div className="mb-3">
                    <label for="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" rows="3" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
