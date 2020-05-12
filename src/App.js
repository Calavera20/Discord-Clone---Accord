import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Components/Main";
import "./Styles/App.css";

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
