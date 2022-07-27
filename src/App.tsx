import React from "react";

import "./App.css";
import { Counter } from "theo-button-component";

 
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome</p>
        <Counter value={2}  />
      </header>
    </div>
  );
}

export default App;
