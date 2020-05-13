import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Components/Main";
import "./Styles/App.css";
import Login from "./Components/Login";
import AuthenticationPage from "./Components/AuthenticationPage";
import Register from "./Components/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/login">
            <AuthenticationPage>
              <Login />
            </AuthenticationPage>
          </Route>
          <Route exact path="/register">
            <AuthenticationPage>
              <Register />
            </AuthenticationPage>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
