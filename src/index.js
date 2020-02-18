import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "router";
import AppBar from "components/appBar";

const App = () => {
  return (
    <Router>
      <AppBar />
      <Routes />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
