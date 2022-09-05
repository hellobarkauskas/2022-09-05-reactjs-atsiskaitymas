import { useEffect, useState } from "react";

function FetchSkills() {
    const [data, setData] = useState();

    useEffect(() => {
        fetch('https://autumn-delicate-wilderness.glitch.me/v1/content/skills', {
            method: 'GET'
        })

        .then(response => response.json())
        .then(response => {setData(response)})
        .catch(error => console.log(error));
        
    }, []);

    return (
       
        <div className="skills-container">
            { data && data.map((skill) => {
                 return (
                    <div className="skill" key={skill.id}>
                        <p>Home</p>
                        <p>{skill.title}</p>
                        <p>{skill.description}</p>
                    </div>
                    )
                })}
        </div> 
    )


}

export default FetchSkills;