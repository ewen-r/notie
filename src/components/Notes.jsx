/*
  © Copyright 2023-2023 E Reynolds, Inc. All rights reserved.

  This program is confidential and proprietary to E Reynolds, and
    may not be copied, reproduced, modified, disclosed to others, published or used,
    in whole or in part, without the express prior written permission.
*/

import React, { useState } from "react";
import { defaultNotes } from "./devComponents/defaultNotes";
import Note from "./Note";



/** Component to display and manage Notes.
  * @param {any} props Input properties.
  * @returns {jsx} JSX Element
*/
function Notes(props) {

  console.debug("Notes(): ", props);

  /** React state handler for notesData  */
  const [notesData, setNotesData] = useState(
    {
      newNote: {
        title: '',
        content: ''
      },
      // Initially populate with some dummy notes.
      notesArray: defaultNotes
    }
  );


  /** Handle input to the noteTitle form field.
   * @param {Event} event Input event from form onChange event.
 */
  function handleNoteTitleInput(event) {
    // event.target.name = name of the input field.
    // event.target.value = value in the input field.
    const { name, value } = event.target;
    console.debug("handleNoteTitleInput(): ", name, value);

    setNotesData(
      prevValue => {
        console.debug("pv=", prevValue);
        const ret = { ...prevValue };
        ret.newNote.title = value;
        console.debug("ret=", ret);
        return ret;
      }
    );
  }


  /** Handle input to the noteContent form field.
   * @param {Event} event Input event from form onChange event.
 */
  function handleNoteContentInput(event) {
    // event.target.name = name of the input field.
    // event.target.value = value in the input field.
    const { name, value } = event.target;
    console.debug("handleNoteContentInput(): ", name, value);

    setNotesData(
      prevValue => {
        console.debug("pv=", prevValue);
        const ret = { ...prevValue };
        ret.newNote.content = value;
        console.debug("ret=", ret);
        return ret;
      }
    );
  }


  /** Handle form submit.
   * @param {Event} event Input event from form submit button.
 */
  function onSubmit(event) {
    const title = event.target?.noteTitle?.value;
    const content = event.target?.noteContent?.value;

    console.log("onSubmit(): ", title, content);

    setNotesData(
      prevValue => {
        console.debug("pv=", prevValue);

        // Append a new note onto the current notes array.
        const notesArray = [
          ...prevValue.notesArray,
          {
            title: title,
            content: content
          }
        ];

        // Renumber the array to ensure we have unique keys.
        renumberNotes(notesArray);

        // Set new notesData.
        const ret = {
          // Clear the new note form values.
          newNote: {
            title: '',
            content: ''
          },
          // Set the new notesArray.
          notesArray: notesArray
        };
        console.debug("ret=", ret);

        return ret;
      }
    );

    // Prevent next default behaviour (which is to refresh the form and thus clearing out its content).
    event.preventDefault();
  }


  /** Renumber notes in array.
    * This ensures that each note has a unique key.
   * @param {notesArray} notes Array of note items.
 */
  function renumberNotes(notes) {
    let i = 0;

    notes.forEach(n => {
      n.key = i++;
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
        title={note.title}
        content={note.content}
      />
    );
  }


  /** Return the React element.
    * - A notesDiv which includes the entire Element.
    * - - A newNoteDiv which includes an area for adding a new note.
    * - - - A form to hold the new note inputs.
    * - - - - noteTitle input field.
    * - - - - noteContent textarea field.
    * - - - - submit button.
    * - - - A noteItemsDiv which includes all the note items.
    * - - - - Multiple Note items.
  */
  return (
    <div className="notesDiv">
      <div className="newNoteDiv justifyContentsCentre">
        <form onSubmit={onSubmit}>
          <input type="text" name="noteTitle" placeholder="New note title"
            className="inputWide"
            onChange={handleNoteTitleInput} value={notesData.newNote.title}>
          </input>

          <textarea type="text" name="noteContent" placeholder="New note content"
            className="inputTall inputWide"
            onChange={handleNoteContentInput} value={notesData.newNote.content}>
          </textarea>

          <div className="justifyContentsRight">
            <div>
              <button type="submit" disabled={!notesData.newNote.title}>create</button>
            </div>
          </div>
        </form>
      </div>

      <div className="noteItemsDiv">
        {notesData.notesArray.map(n => renderNote(n))}
      </div>
    </div>
  );
}



export default Notes;