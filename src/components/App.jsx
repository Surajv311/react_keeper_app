// following naming style of airbnb guide - jsx (js would also suffice but jsx preferred)

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
function App() {
  return (
    <div>
      <Header />
      <Note />
      <Footer />
    </div>
  );
}

export default App;
// NOTE:
// The classes should be applied to html elements like div/h1/p... than react elements like <Header/>....
