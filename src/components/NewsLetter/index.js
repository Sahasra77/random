import React from 'react'
import './index.css'

const NewsletterFooter = () => {
    return (
        <div className="newsletter-footer">
            <section className="newsletter">
                <h2>Newsletter</h2>
                <p>Stay Updated with ISS</p>
                <form className="newsletter-form">
                    <input type="email" placeholder="Your email" />
                    <button type="submit">Subscribe</button>
                </form>
            </section>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src="logo.png" alt="Footer Logo" className="footer-logo-img" />
                        <span>ISS Club</span>
                    </div>
                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Title</h4>
                            <span>Link 1</span>
                            <span>Link 2</span>
                            <span>Link 3</span>
                        </div>
                        <div className="footer-column">
                            <h4>Title</h4>
                            <span>Link 1</span>
                            <span>Link 2</span>
                            <span>Link 3</span>
                        </div>
                        <div className="footer-column">
                            <h4>Title</h4>
                            <span>Link 1</span>
                            <span>Link 2</span>
                            <span>Link 3</span>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <span>&copy; 2024 ISS Club. All rights reserved.</span>
                        <div className="footer-bottom-links">
                            <span>Privacy &amp; Policy</span>
                            <span>Terms &amp; Conditions</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default NewsletterFooter;
