import React from 'react';
import '../index.css';
const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-3">
            <p>&copy; 2024 Vaishnavi Website Creator. All Rights Reserved.</p>
            <p>
                <a href="#about" className="text-white text-decoration-none">About</a> |
                <a href="#projects" className="text-white text-decoration-none"> Portfolio</a> |
                <a href="#contact" className="text-white text-decoration-none"> Contact</a>
            </p>
        </footer>
    );
};

export default Footer;
