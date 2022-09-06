import { useEffect, useState } from "react";
import HomeLayout from "./HomeLayout";

function FetchSkills() {
    const [data, setData] = useState();

    useEffect(() => {
        fetch('https://autumn-delicate-wilderness.glitch.me/v1/content/skills', {
            method: 'GET'
        })

        .then(response => response.json())
        .then(response => {setData(response)})
        .catch(error => console.log(error))
        
    }, []);

    return (
        <div>
            <HomeLayout />

            <h2>Home page</h2>
            <div className="skills-container">
                { data && data.map((skill) => {
                    return (
                        <div className="skill" key={skill.id}>
                            <p>{skill.title}</p>
                            <p>{skill.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FetchSkills;