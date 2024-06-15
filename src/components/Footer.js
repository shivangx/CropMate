import React from 'react';
// Import your CSS file for styling if needed

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Contact Us</h5>
                        <ul className="list-unstyled">
                            <li>123 Main St, City</li>
                            <li>contact@example.com</li>
                            <li>(123) 456-7890</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <hr />
                        <p className="text-center">© 2024 Your Company. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
