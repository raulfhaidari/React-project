import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";



function App() {

    const [notes, setNotes] = useState([])

    function addNote(newNote){
        setNotes([ ...notes, newNote])
    }

    function deleteNote(id){
        setNotes( oldNotes => {
            return oldNotes.filter((newNote, index) => {
                return index !== id;
            });
        })
}

    return (
    <>
        <Header />
        <CreateArea addOn={addNote}/>
        {notes.map((noteItem, index) => {
            return (
                <Note 
                    key={index}
                    id={index}
                    title={noteItem.title}
                    content={noteItem.content}
                    onDelete={deleteNote}
                />
            ) 
        })}
        <Footer />
    </>
    )    
}

export default App;