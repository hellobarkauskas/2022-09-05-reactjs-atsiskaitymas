import { useState } from "react";

function PostSkills() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState();

    const addSkill = (event) => {
        event.preventDefault();
        fetch('https://autumn-delicate-wilderness.glitch.me/v1/content/skills', {
            method: 'POST',
            headers: {
                'Acccept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                description: description
            })
        })

        .then(response => response.json())
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    return (
        <div>
            <form>
                <label for='title'>Title</label>
                <input type="text" name="title" id="title" value={title} onChange={event => setTitle(event.target.value)} />
                <label for='description'>Description</label>
                <input type="text" name="description" id="description" value={description} onChange={event => setDescription(event.target.value)} />
                <button type="submit" onClick={event => addSkill(event)}>Add Skill</button>
            </form>
        </div>
    )

}

export default PostSkills;

    