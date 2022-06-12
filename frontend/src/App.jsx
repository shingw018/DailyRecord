import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./Home.jsx";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage />}></Route>
        </Routes>
      </Router>
    );
  }
}

export default App;
