import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./Home.jsx";
import Transport from "./Transport.jsx";
import Food from "./Food.jsx";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage />}></Route>
          <Route exact path="/transport" element={<Transport />}></Route>
          <Route exact path="/food" element={<Food />}></Route>
        </Routes>
      </Router>
    );
  }
}

export default App;
