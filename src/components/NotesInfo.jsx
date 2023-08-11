/*
  © Copyright 2023-2023 E Reynolds, Inc. All rights reserved.

  This program is confidential and proprietary to E Reynolds, and
    may not be copied, reproduced, modified, disclosed to others, published or used,
    in whole or in part, without the express prior written permission.
*/

import React from "react";
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';


/** Component to display and manage Notes.
  * @param {any} props Input properties.
  * @returns {jsx} JSX Element
*/
function NotesInfo(props) {

  return (
    <div className="noteInfoDiv">
      <h2 className="underlined"> <LightbulbOutlinedIcon />Tips</h2>
      <ul>
        <li> To add a new note, use the panel on the left.</li>
        <li> Enter a title and some content then click the "add" button.</li>
        <li> You cannot save your note until it has a title.</li>
        <li> Notes are sorted and displayed according to their title.</li>
        <li> Click the "done" button mark a note as completed.</li>
        <li> Click the "done" button again to mark a note as incomplete.</li>
        <li> Once a note is marked as "completed", it can be permanently deleted by clicking the "delete" button.</li>
        <li> Uncompleted notes cannot be deleted.</li>
      </ul>
    </div>
  );
}

export default NotesInfo;