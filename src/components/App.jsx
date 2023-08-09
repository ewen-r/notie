/*
  © Copyright 2023-2023 E Reynolds, Inc. All rights reserved.

  This program is confidential and proprietary to E Reynolds, and
    may not be copied, reproduced, modified, disclosed to others, published or used,
    in whole or in part, without the express prior written permission.
*/

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Notes from "./Notes";


/** Main App.
  * @param {any} props Input properties.
  * @returns {jsx} JSX Element
*/
function App(props) {
  return (
    <div>
      <Header />
      <Notes />
      <Footer />
    </div>
  );
}

// Export the app
export default App;
