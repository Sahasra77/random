// src/components/Events.js
import React,{useState, useEffect} from "react"
import './index.css'
import  createClient  from '../client.js'


const Events = () => {
    const [postData, setPost] = useState(null);

    useEffect(()=>{
        createClient
        .fetch(`*[_type == "post"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id, url
                },
                alt
            }
        }`)
        .then ((data)=>setPost(data))
        .catch(console.error)
    }, []);


    return (
        <section className="events">
            <h2>Upcoming Events</h2>

            {postData && postData.map((post, index)=>(
            <div className="event-cards">
                {/* Repeat this event card for more events */}
                <div className="event-card">
                    <img src={postData.mainImage.asset.url} alt={postData.mainImage.alt} />
                    <p>{postData.title}</p>
                    <span>Date</span>
                </div>
            </div>
        ))}

        </section>
    );
};

export default Events;
