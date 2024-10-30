// src/components/About.js
import React from "react";
import './index.css';

const About = () => {
    return (
        <section className="about">
            <h2>About Us</h2>
            <div className="about-content">
                <img src="about-image.png" alt="About" className="about-image" />
                <p>Lorem ipsum dolor sit amet consectetur. Etiam ac aliquet risus, non mollis erat.</p>
            </div>
        </section>
    );
};

export default About;
