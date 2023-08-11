/*
  © Copyright 2023-2023 E Reynolds, Inc. All rights reserved.

  This program is confidential and proprietary to E Reynolds, and
    may not be copied, reproduced, modified, disclosed to others, published or used,
    in whole or in part, without the express prior written permission.
*/

import React from "react";
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';


/** Component to display Header.
  * @param {any} props Input properties.
  * @returns {jsx} JSX Element
*/
function Header(props) {
  console.debug("Header(): ", props);

  return (
    <header>
      <h1 className="matIconWithText">
        <AddTaskOutlinedIcon fontSize="inherit" />
        <span>Keeper</span>
      </h1>
    </header>
  );
}


export default Header;
