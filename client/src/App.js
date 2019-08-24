import React, { Component } from "react";
import "./App.css";
import NavTabs from "./components/NavTabs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home"
import Survey from "./pages/SavedBooks"
class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <NavTabs />
          {/* <Route exact path="/survey" component={Survey} /> */}
          <div className="jumbotron">
            <h1 className="display-4">Google Books Search</h1>
            <hr className="my-4" />
            <h4>Search for and save books you like</h4>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/SavedBooks" component={Survey} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
