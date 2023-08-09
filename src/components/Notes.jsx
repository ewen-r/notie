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



/** Component to display and manage Notes.
  * @param {any} props Input properties.
  * @returns {jsx} JSX Element
*/
function Notes(props) {

  console.debug("Notes(): ", props);

  /** React state handler for notesArray  */
  const [notesArray, setNotesArray] = useState(
    defaultNotes
  );


  /** Renumber notes in array.
    * This ensures that each note has a unique ID.
   * @param {notesArray} notes Array of note items.
 */
  function renumberNotes(notes) {
    let i = 0;

    notes.forEach(n => {
      n.key = i++;
      n.id = n.key;
    });
  }


  /** Creates a "Show Note" Element from input note object.
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
        deleteNote={deleteNote}
      />
    );
  }


  /** Creates a new note and appends it to the current list.
    * @param {any} note Input note object.
  */
  function createNote(note) {
    console.log("createNote():", note);

    // Append new note onto the current notes array.
    const notes = [
      ...notesArray,
      note
    ];

    // Renumber the array to ensure we have unique IDs.
    renumberNotes(notes);

    // Set notes array.
    setNotesArray(notes);
  }


  /** Deletes a note.
    * @param {number} id ID of note to be deleted.
  */
  function deleteNote(id) {
    console.log("deleteNote(): ", id);

    setNotesArray(
      prevValue => {
        console.debug("pv=", prevValue);
        const ret = { ...prevValue };

        // Filter out the specified note from the current notes array.
        const notesArray = prevValue.filter(
          n => n.id !== id
        );

        // Renumber the array to ensure we have unique IDs.
        renumberNotes(notesArray);

        // Set notes array.
        console.debug("ret=", notesArray);
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
          <h3> ⚫ Click the note title to mark a note as complete.</h3>
          <h3> ⚫ Click delete to permanently remove a completed note.</h3>
        </div>

        {notesArray.map(n => renderNote(n))}
      </div>
    </div>
  );
}



export default Notes;