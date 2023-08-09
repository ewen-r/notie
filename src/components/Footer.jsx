/*
  © Copyright 2023-2023 E Reynolds, Inc. All rights reserved.

  This program is confidential and proprietary to E Reynolds, and
    may not be copied, reproduced, modified, disclosed to others, published or used,
    in whole or in part, without the express prior written permission.
*/

import React from "react";


/** Component to display Footer.
  * @param {any} props Input properties.
  * @returns {jsx} JSX Element
*/
function Footer(props) {
  console.debug("Footer(): ", props);

  return (
    <footer>
      <p>Copyright © E Reynolds {new Date().getFullYear()}</p>
      <p className="buildInfo">DEPLOY_DATETIME: {process.env.DEPLOY_DATETIME || 'n/a'} RENDER_GIT_COMMIT: {process.env.RENDER_GIT_COMMIT || 'n/a'}</p>
    </footer>
  );
}


export default Footer;
