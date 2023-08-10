/*
  © Copyright 2023-2023 E Reynolds, Inc. All rights reserved.

  This program is confidential and proprietary to E Reynolds, and
    may not be copied, reproduced, modified, disclosed to others, published or used,
    in whole or in part, without the express prior written permission.
*/

import React, { useState } from "react";


/** Component to provide functionality for creating a new note.
  * @param {any} props Input properties.
  * @returns {jsx} JSX Element
*/
function NoteCreate(props) {
  console.debug("NoteCreate(): ", props);

  /** React state handler for newNote  */
  const [newNote, setNewNote] = useState(
    {
      title: '',
      content: ''
    }
  );


  /** Handle input to the noteTitle form field.
   * @param {Event} event Input event from form onChange event.
 */
  function handleNoteTitleInput(event) {
    // event.target.value = value in the input field.
    const { value } = event.target;

    setNewNote(
      prevValue => {
        const ret = { ...prevValue };
        ret.title = value;
        return ret;
      }
    );
  }


  /** Handle input to the noteContent form field.
   * @param {Event} event Input event from form onChange event.
 */
  function handleNoteContentInput(event) {
    // event.target.value = value in the input field.
    const { value } = event.target;

    setNewNote(
      prevValue => {
        const ret = { ...prevValue };
        ret.content = value;
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

    // Call parent to create a new note.
    props.createNote({
      title: title,
      content: content
    });

    // Clear form fields.
    setNewNote({
      title: '',
      content: ''
    });

    // Prevent next default behaviour (which is to refresh the form and thus clearing out its content).
    event.preventDefault();
  }


  /** Return the React element.
    * - A newNoteDiv which includes...
    * - - A form to hold the new note inputs.
    * - - - noteTitle input field.
    * - - - noteContent textarea field.
    * - - - submit button.
  */
  return (
    <div className="newNoteDiv justifyContentsCentre">
      <form onSubmit={onSubmit}>
        <input type="text" name="noteTitle" placeholder="✏️New note title"
          className="inputWide"
          onChange={handleNoteTitleInput} value={newNote.title}>
        </input>

        <textarea type="text" name="noteContent" placeholder="✏️New note content"
          className="inputTall inputWide"
          onChange={handleNoteContentInput} value={newNote.content}>
        </textarea>

        <div className="justifyContentsRight">
          <div>
            <button className="createButton" type="submit" disabled={!newNote.title}>create</button>
          </div>
        </div>
      </form>
    </div>
  );
}


export default NoteCreate;