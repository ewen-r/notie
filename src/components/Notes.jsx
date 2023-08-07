import React from "react";
import { dummyNotes } from "./devComponents/dummyNotes";
import Note from "./Note";


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


/** Component to display Notes.
  * @param {any} props Input properties.
*/
function Notes(props) {

  return (
    <div className="notes">
      <div>
        {dummyNotes.map(n => createNote(n))}
      </div>
    </div>
  );

}

export default Notes;