import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Notes from "./Notes";


/** Main App.
  * @param {any} props Input properties.
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
