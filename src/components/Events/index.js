// src/components/Events.js
import React from "react"
import './index.css'


const Events = () => {
    return (
        <section className="events">
            <h2>Upcoming Events</h2>
            <div className="event-cards">
                {/* Repeat this event card for more events */}
                <div className="event-card">
                    <img src="event-image.png" alt="Event" />
                    <p>Event Title</p>
                    <span>Date</span>
                </div>
            </div>
        </section>
    );
};

export default Events;
