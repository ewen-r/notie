/*
  © Copyright 2023-2023 E Reynolds, Inc. All rights reserved.

  This program is confidential and proprietary to E Reynolds, and
    may not be copied, reproduced, modified, disclosed to others, published or used,
    in whole or in part, without the express prior written permission.
*/

import React from "react";


/** Component to display Header.
  * @param {any} props Input properties.
  * @returns {jsx} JSX Element
*/
function Header(props) {
  console.debug("Header(): ", props);

  const appTitle = 'Keeper';

  return (
    <header>
      <h1>{appTitle}</h1>
    </header>
  );
}


export default Header;
