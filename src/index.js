import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "router";
import AppBar from "components/appBar";
import { CurrentUserProvider } from 'contexts/currentUser'

const App = () => {
  return (
      <CurrentUserProvider>
        <Router>
          <AppBar />
          <Routes />
        </Router>
      </CurrentUserProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
