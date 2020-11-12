// following the naming style of airbnb guide - jsx (js would suffice but jsx preferred)

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {/* <Note /> */}
      {notes.map(noteItem => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))} 
      {/* applied arrow function and maps */}
      <Footer />
    </div>
  );
}

export default App;
// NOTE:
// The classes should be applied to html elements like div/h1/p... than react elements like <Header/>....


