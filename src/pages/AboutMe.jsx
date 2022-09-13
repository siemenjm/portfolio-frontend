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
                <div className="content">
                    <p>{about.bio}</p>
                    <button className='nav-link accent-link'>{about.email}</button>
                </div>
                <img src={headShot} alt="Jared Siemen headshot" />
            </div>
        );
    }

    return about ? loaded() : <h1>Loading...</h1>;
  }
  
export default AboutMe;