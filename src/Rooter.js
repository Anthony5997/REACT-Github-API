import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CardList from "./CardList";
import App from "./App";

export default function Rooter() {
  return (
    <Router>
      <div>
      <nav className="navbar">
            <h1> Github Search</h1>
          <ul>
            <li>
              <Link to="/"> 
              Home
              </Link>
            </li>
            <li>
              <Link to="/event">
                  Event List
              </Link>
            </li>
          </ul>
        </nav>
       
        <Switch>
          <Route path="/event">
            <CardList />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}