import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {
    const [isExpanded, setIsExpanded] = useState(false);
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
    };

    function expand(){
        setIsExpanded(true)
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded && (
                    <input 
                        name="title" 
                        onChange={handleChange} 
                        value={note.title} 
                        placeholder="Title" 
                        required
                    />
                )}

                <textarea
                    onClick={expand}
                    onChange={handleChange}
                    name="content" 
                    value={note.content} 
                    placeholder="Take a note..." 
                    rows={isExpanded ? 3 : 1} 
                    required
                />
                <Zoom in={isExpanded}>
                    <Fab onClick={handleClick}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
