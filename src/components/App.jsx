import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import { dummyNotes } from "./devComponents/dummyNotes";


/** Creates a Note element from input note object.
  * @param {any} note Input note object.
 */
function createNote(note) {
  return (
    <Note
      title={note.title}
      content={note.content}
    />
  );
}


/** Main App. */
function App() {
  return (
    <div>
      <Header />
      { dummyNotes.map(n => createNote(n)) }
      <Footer />
    </div>
  );
}

// Export the app
export default App;
