import React, { useState } from "react";

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(e) {
        const {name, value} = e.target
        note[name] = value;
        setNote({...note})

        
    };

    // setNote(() => ({ ...note, [name: value] }))

    function handleClick(e) {

        let fieldCompelet = false;

        note.title !== "" && note.content !== "" && (fieldCompelet = true)

        if (fieldCompelet) {
            props.addOn(note);
            setNote({
                title: "",
                content: ""
            }) 
        }
        

        e.preventDefault();
    }

    return (
        <div>
            <form>
                <input name="title" onChange={handleChange} value={note.title} placeholder="Title"  required/>
                <textarea
                    onChange={handleChange}
                    name="content" 
                    value={note.content} 
                    placeholder="Take a note..." 
                    rows="3" 
                    required
                />
                <button onClick={handleClick}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
