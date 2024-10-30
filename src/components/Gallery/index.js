// src/components/Gallery.js
import React from "react"
import './index.css'



const Gallery = () => {
    return (
        <section className="gallery">
            <h2>Gallery</h2>
            <div className="gallery-grid">
                <img src="gallery1.png" alt="Gallery 1" />
                <img src="gallery2.png" alt="Gallery 2" />
                <img src="gallery3.png" alt="Gallery 3" />
                {/* Add more images as needed */}
            </div>
        </section>
    );
};

export default Gallery;
