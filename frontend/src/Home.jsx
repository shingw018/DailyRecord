import React, { Component } from "react";
import { Link } from "react-router-dom";

class MainPage extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="text-center m-3 text-secondary">Daily Record</h2>
        <div className="container my-3">
          <Link to="/food">
            <button type="button" className="btn btn-primary btn-lg w-100">
              Food
            </button>
          </Link>
        </div>
        <div className="container my-3">
          <Link to="/transport">
            <button type="button" className="btn btn-warning btn-lg w-100">
              Transport
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default MainPage;
