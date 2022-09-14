import '../styles/AboutMe.css';
import headShot from './images/Headshot.jpeg';
import { useState, useEffect } from "react";

function AboutMe(props) {
    const [about, setAbout] = useState(null);

    async function getAboutData() {
        const response = await fetch(props.URL + 'about');
        const data = await response.json();
        setAbout(data);
    }

    useEffect(() => {
        getAboutData();
    }, []);

    function loaded() {
        return (
            <div className="about-me">
                <div className="about-content">
                    <p>{about.bio}</p>
                    <a href="mailto:contact@jaredsiemen.com" className='nav-link accent-link'>{about.email}</a>
                </div>
                <div className="about-image">
                    <img src={headShot} alt="Jared Siemen headshot" />
                </div>
            </div>
        );
    }

    return about ? loaded() : <h1>Loading...</h1>;
  }
  
export default AboutMe;