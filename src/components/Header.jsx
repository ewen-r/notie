import React from "react";


/** Component to display Header.
  * @param {any} props Input properties.
*/
function Header(props) {
  const appTitle = 'Keeper';

  return (
    <header>
      <h1>{appTitle}</h1>
    </header>
  );
}


export default Header;
