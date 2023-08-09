/*
  © Copyright 2023-2023 E Reynolds, Inc. All rights reserved.

  This program is confidential and proprietary to E Reynolds, and
    may not be copied, reproduced, modified, disclosed to others, published or used,
    in whole or in part, without the express prior written permission.
*/

import React, { useState } from "react";


/** Component to display Note.
  * @param {any} props Input properties.
  * @returns {jsx} JSX Element
*/
function Note(props) {

  console.log("Note():", props);


  /** React state handler for completed */
  const [completed, setCompleted] = useState(false);

  /** Toggle completed status of note.
    * @param {Event} event click event.
  */
  function toggleCompleted(event) {
    console.log("toggleCompleted():", event);
    setCompleted(
      prev => { return !prev; }
    );
  }


  /** Handle delete note event.
    * - Call parent method to delete the note.
  */
  function onDelete() {
    console.log("onDelete():");
    props.deleteNote(props.id);
  }


  /** Return the React element.
    * - A noteDiv which includes the entire Element.
    * - - A <h1> with the note title.
    * - - - The header can be clicked to mark the note completed.
    * - - A <p> with the note content.
  */
  return (
    <div className="noteDiv">
      <h1 className={completed ? "strikeThrough" : null} onClick={toggleCompleted}>{props.title || 'Untitled note'}</h1>

      <p className={completed ? "strikeThrough" : null} >{props.content || ''}</p>

      <div className="justifyContentsRight">
        <div>
          <button className="deleteButton" onClick={onDelete} disabled={!completed}>delete</button>
        </div>
      </div>
    </div>
  );
}


export default Note;
