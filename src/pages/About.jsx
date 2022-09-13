import { useState, useEffect } from "react";

function About(props) {
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
            <div>
                <h2>{about.name}</h2>
                <h3>{about.email}</h3>
                <p>{about.bio}</p>
            </div>
        );
    }

    return about ? loaded() : <h1>Loading...</h1>;
  }
  
export default About;