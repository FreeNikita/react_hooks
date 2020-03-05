import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./router";
import AppBar from "./components/appBar";
import { CurrentUserProvider } from './contexts/currentUser'
import CurrentUserChecker from './components/currentUserChecker'

const App = () => {
  return (
      <CurrentUserProvider>
          <CurrentUserChecker>
            <Router>
              <AppBar />
              <Routes />
            </Router>
          </CurrentUserChecker>
      </CurrentUserProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

