import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";



function App() {
    return (
    <>
        <Header />
        {notes.map(newContent => (
            <Note
                key={newContent.key}
                title={newContent.title}
                content={newContent.content}   
            />
        ))}
        <Footer />
    </>
    )    
}

export default App;