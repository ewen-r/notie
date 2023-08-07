import React from "react";


/** Component to display Note.
  * @param {any} props Input properties.
*/
function Note(props) {

  return (
    <div className="note">
      <h1>{props.title || 'Untitled note'}</h1>
      <p>{props.content || ''}</p>
    </div>
  );
}


export default Note;
