import React, { Component } from "react";
import { Link } from "react-router-dom";

class MainPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="container my-3">
          <Link to="/food">
            <button type="button" className="btn btn-primary btn-lg btn-block">
              Food
            </button>
          </Link>
        </div>
        <div className="container my-3">
          <Link to="/transport">
            <button type="button" className="btn btn-warning btn-lg btn-block">
              Transport
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default MainPage;
