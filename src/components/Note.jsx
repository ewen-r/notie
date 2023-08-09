/*
  © Copyright 2023-2023 E Reynolds, Inc. All rights reserved.

  This program is confidential and proprietary to E Reynolds, and
    may not be copied, reproduced, modified, disclosed to others, published or used,
    in whole or in part, without the express prior written permission.
*/

import React from "react";


/** Component to display Note.
  * @param {any} props Input properties.
  * @returns {jsx} JSX Element
*/
function Note(props) {
  return (
    <div className="noteDiv">
      <h1>{props.title || 'Untitled note'}</h1>
      <p>{props.content || ''}</p>
    </div>
  );
}


export default Note;
