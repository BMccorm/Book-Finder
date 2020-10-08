import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/Books";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import SearchBooks from "./components/SearchBooks";
import SavedBooks from "./components/SavedBooks";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Jumbotron />
        <Switch>
          <Route exact path="/" component={SearchBooks} />
          <Route exact path="/savedbooks" component={SavedBooks} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
