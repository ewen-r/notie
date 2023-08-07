import React from "react";

/** Component to display Footer. */
function Footer() {
  // Get current year to include dynamically in copyright.
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright © E Reynolds {year}</p>
    </footer>
  );
}


export default Footer;
