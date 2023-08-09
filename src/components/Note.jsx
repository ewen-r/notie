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

  /** React state handler for completed */
  const [completed, setCompleted] = useState(false);

  /** Toggle completed status of note.
    * @param {Event} event click event.
  */
  function toggleCompleted(event) {
    console.debug("toggleCompleted(): ", event);
    setCompleted(
      prev => { return !prev; }
    );
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
    </div>
  );
}


export default Note;
