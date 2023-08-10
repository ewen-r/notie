/*
  © Copyright 2023-2023 E Reynolds, Inc. All rights reserved.

  This program is confidential and proprietary to E Reynolds, and
    may not be copied, reproduced, modified, disclosed to others, published or used,
    in whole or in part, without the express prior written permission.
*/

import React, { useState } from "react";
import { defaultNotes } from "./devComponents/defaultNotes";
import Note from "./Note";
import NoteCreate from "./NoteCreate";
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';



/** Component to display and manage Notes.
  * @param {any} props Input properties.
  * @returns {jsx} JSX Element
*/
function Notes(props) {
  console.debug("Notes(): ", props);

  // Set some starter notes.
  let starterNotes = [...defaultNotes];
  sortAndIndexNotes(starterNotes);

  /** React state handler for notesArray  */
  const [notesArray, setNotesArray] = useState(
    starterNotes
  );


  /** Sort notes by title and then re-index to ensure each note has a unique ID
   * @param {notesArray} notes Array of note items.
 */
  function sortAndIndexNotes(notes) {

    // Sort by title.
    notes.sort(
      function (a, b) {
        return ('' + a.title).localeCompare(b.title);
      }
    );

    // Re-index.
    let i = 0;
    notes.forEach(n => {
      n.key = i++;
      n.id = n.key;
    });
  }


  /** Creates a "Note" Element from input note object.
    * @param {any} note Input note object.
    * @returns {jsx} JSX Element
  */
  function renderNote(note) {
    return (
      <Note
        key={note.key}
        id={note.key}
        title={note.title}
        content={note.content}
        completed={note.completed || false}
        deleteNote={deleteNote}
        toggleCompleted={toggleCompleted}
      />
    );
  }


  /** Creates a new note and appends it to the current list.
    * @param {any} note Input note object.
  */
  function createNote(note) {
    // Append new note onto the current notes array.
    const notes = [
      ...notesArray,
      note
    ];

    // Sort and re-index the notes to ensure we have unique IDs.
    sortAndIndexNotes(notes);

    // Set notes array.
    setNotesArray(notes);
  }


  /** Deletes a note.
    * @param {number} id ID of note to be deleted.
  */
  function deleteNote(id) {
    setNotesArray(
      prevValue => {
        // Filter out the specified note from the current notes array.
        const notesArray = prevValue.filter(
          n => n.id !== id
        );

        // Sort and re-index the notes to ensure we have unique IDs.
        sortAndIndexNotes(notesArray);

        // Set notes array.
        return notesArray;
      }
    );
  }


  /** Toggles completed state on a note.
    * @param {number} id ID of note to be updated.
  */
  function toggleCompleted(id) {
    setNotesArray(
      prevValue => {
        const ret = [...prevValue];

        // Find the required note in the current notes array.
        const noteIndex = ret.findIndex(
          n => n.id === id
        );

        if (noteIndex !== -1) {
          ret[noteIndex].completed = !ret[noteIndex].completed;
        }

        // Set notes array.
        return ret;
      }
    );
  }


  /** Return the React element.
    * - A notesDiv which includes the entire Element.
    * - - A NoteCreate Element which includes an area for adding a new note.
    * - - A noteItemsDiv which includes...
    * - - - A infoDiv with some helpful hints.
    * - - - Multiple Note items.
  */
  return (
    <div className="notesDiv">
        <NoteCreate createNote={createNote} />

        <div className="noteItemsDiv">
          <div className="infoDiv">
            <h3> <LightbulbOutlinedIcon /> Use the panel to enter a new note.</h3>
            <h3> <LightbulbOutlinedIcon /> Click the checkbox or title to mark/unmark a note as completed.</h3>
            <h3> <LightbulbOutlinedIcon /> Click delete to permanently remove a completed note.</h3>
          </div>

        {notesArray.map(n => renderNote(n))}
      </div>
    </div>
  );
}



export default Notes;