/*
  © Copyright 2023-2023 E Reynolds, Inc. All rights reserved.

  This program is confidential and proprietary to E Reynolds, and
    may not be copied, reproduced, modified, disclosed to others, published or used,
    in whole or in part, without the express prior written permission.
*/

import React from "react";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';


/** Component to display Note.
  * @param {any} props Input properties.
  * @returns {jsx} JSX Element
*/
function Note(props) {
  console.debug("Note(): ", props);


  /** Handle toggle note completed event.
    * - Call parent method to toggle the complete state.
  */
  function onCompleted() {
    console.log("toggleComplete(): ", props.id);
    props.toggleCompleted(props.id);
  }


  /** Handle delete note event.
    * - Call parent method to delete the note.
  */
  function onDelete() {
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
      <div>
        <h1 className={props.completed ? "strikeThrough" : null} >
          {props.title || 'Untitled note'}
        </h1>
      </div>

      <div>
        <p className={props.completed ? "strikeThrough" : null} >{props.content || ''}</p>
      </div>

      <div className="justifyContentsRight alignContentsEnd">
        <button
          className={
            `matIconButton buttonHoverZoom buttonAccept ${props.completed && "buttonFade"}`}
          onClick={onCompleted} >
          <DoneOutlinedIcon fontSize="inherit" />
        </button>

        <button className="matIconButton buttonDelete buttonHoverZoom" disabled={!props.completed} onClick={onDelete} >
          <DeleteForeverOutlinedIcon fontSize="inherit" /></button>
      </div>
    </div >
  );
}


export default Note;
