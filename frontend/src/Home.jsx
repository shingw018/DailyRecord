import React, { Component } from "react";
import AddFood from "./AddFood";
import AddTransport from "./AddTransport";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Mode: "",
      Target: "",
    };
  }
  render() {
    return (
      <div className="container">
        <h2 className="text-center m-3 text-dark">Daily Record</h2>
        <div className="container row g-0 my-2 p-2 text-center bg-secondary text-light border border-secondary rounded">
          <div className="div-button col border-light border-end" onClick={() => this.setState({ Mode: "View" })}>
            View
          </div>
          <div className="div-button col" onClick={() => this.setState({ Mode: "Add" })}>
            Add
          </div>
        </div>
        <div className="container row g-0 my-2 p-2 text-center bg-secondary text-light border border-secondary rounded">
          <div className="div-button col border-light border-end" onClick={() => this.setState({ Target: "Food" })}>
            Food
          </div>
          <div className="div-button col border-light border-end" onClick={() => this.setState({ Target: "Trans" })}>
            Trans
          </div>
          <div className="div-button col border-light border-end" onClick={() => this.setState({ Target: "Activity" })}>
            Activity
          </div>
          <div className="div-button col" onClick={() => this.setState({ Target: "Diary" })}>
            Diary
          </div>
        </div>
        <div className="container">
          {this.state.Mode === "View" && this.state.Target === "Food" && <>View Food</>}
          {this.state.Mode === "Add" && this.state.Target === "Food" && <AddFood />}
          {this.state.Mode === "View" && this.state.Target === "Trans" && <>View Transportation</>}
          {this.state.Mode === "Add" && this.state.Target === "Trans" && <AddTransport />}
          {this.state.Mode === "View" && this.state.Target === "Activity" && <>View Activity</>}
          {this.state.Mode === "Add" && this.state.Target === "Activity" && <>Add Activity</>}
          {this.state.Mode === "View" && this.state.Target === "Diary" && <>View Diary</>}
          {this.state.Mode === "Add" && this.state.Target === "Diary" && <>Add Diary</>}
          {(this.state.Mode === "" || this.state.Target === "") && <>Select a target</>}
        </div>
      </div>
    );
  }
}

export default MainPage;
