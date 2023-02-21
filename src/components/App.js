import React, { Component, useState } from "react";
import "./../styles/App.css";
// import paragraph from "./paragraph.js";
import "./App.css";
// import Paragraph from "./Paragraph";

function App() {
  const [isHidden, setIsHidden] = useState(false);
  function showText() {
    setIsHidden(true);
  }
  return (
    <div id="main">
      <h1>Hello</h1>
      {isHidden === true ? (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
        // <Paragraph />
      ) : (
        <p></p>
      )}

      <button id="click" onClick={showText}>
        Click
      </button>
    </div>
  );
}

export default App;
