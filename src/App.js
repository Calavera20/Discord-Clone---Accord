import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Components/Main";
import "./Styles/App.css";
import Login from "./Components/Login";
import AuthenticationPage from "./Components/AuthenticationPage";
import Register from "./Components/Register";
import About from "./Components/About";
import UserSettings from "./Components/UserSettings";

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
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/settings">
            <UserSettings />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
