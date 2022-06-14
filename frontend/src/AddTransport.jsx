import React, { Component } from "react";
import API from "./api.jsx";

class AddTransport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: "",
      to: "",
      machine: "",
      fee: "",
      error: false,
      errorMessage: undefined,
      successMessage: undefined,
    };

    this.handleTransportSubmit = this.handleTransportSubmit.bind(this);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.handleMachineChange = this.handleMachineChange.bind(this);
    this.handleFeeChange = this.handleFeeChange.bind(this);
  }
  async handleTransportSubmit(e) {
    //send { foodName, foodEnergy, foodCarbohydrates, foodFat, foodProtein, foodSugar, foodFee }
    e.preventDefault();

    //Getting data from this.state
    const { from, to, machine, fee } = this.state;

    //Setting data to send
    const dataToSend = { from, to, machine, fee };

    console.log(dataToSend);

    try {
      //Send the data and create the vote via doing post request
      await API.post("api/transport", { data: dataToSend }, {});
      this.setState({ successMessage: "Done" });
    } catch (ex) {
      this.setState({ error: true, errorMessage: ex });
    }
  }

  handleFromChange(e) {
    this.setState({ from: e.target.value });
  }

  handleToChange(e) {
    this.setState({ to: e.target.value });
  }

  handleMachineChange(e) {
    this.setState({ machine: e.target.value });
  }

  handleFeeChange(e) {
    this.setState({ fee: e.target.value });
  }

  btnNoFocus(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <div className="container my-2">
          <span
            className="badge rounded-pill bg-light text-dark div-button mx-1"
            onClick={() => this.setState({ from: "Central", to: "Tuen Mun", machine: "Bus-962G", fee: 21.8 })}
          >
            Bus-Back
          </span>
          <span
            className="badge rounded-pill bg-light text-dark div-button mx-1"
            onClick={() => this.setState({ from: "Tuen Mun", to: "Central", machine: "MTR", fee: 26.7 })}
          >
            MTR-Go
          </span>
        </div>
        <div className="contianer">
          <form onSubmit={this.handleTransportSubmit} id="transportForm">
            <div className="form-group m-3">
              <label htmlFor="from" className="form-label me-1">
                From
              </label>
              <span
                className="badge rounded-pill bg-light text-dark div-button mx-1 border"
                onClick={() => this.setState({ from: "Central" })}
              >
                Central
              </span>
              <span
                className="badge rounded-pill bg-light text-dark div-button mx-1 border"
                onClick={() => this.setState({ from: "Tuen Mun" })}
              >
                Tuen Mun
              </span>
              <input
                type="text"
                className="form-control"
                id="from"
                placeholder="From"
                onChange={this.handleFromChange}
                value={this.state.from}
                spellCheck="false"
                required
              />
            </div>
            <div className="form-group m-3">
              <label htmlFor="to" className="form-label me-1">
                To
              </label>
              <span
                className="badge rounded-pill bg-light text-dark div-button mx-1 border"
                onClick={() => this.setState({ to: "Central" })}
              >
                Central
              </span>
              <span
                className="badge rounded-pill bg-light text-dark div-button mx-1 border"
                onClick={() => this.setState({ to: "Tuen Mun" })}
              >
                Tuen Mun
              </span>
              <span
                className="badge rounded-pill bg-light text-dark div-button mx-1 border"
                onClick={() => this.setState({ to: "Shatin" })}
              >
                Shatin
              </span>
              <input
                type="text"
                className="form-control"
                id="to"
                placeholder="To"
                onChange={this.handleToChange}
                value={this.state.to}
                spellCheck="false"
                required
              />
            </div>
            <div className="form-group m-3">
              <label htmlFor="machine" className="form-label me-1">
                Machine
              </label>
              <span
                className="badge rounded-pill bg-light text-dark div-button mx-1 border"
                onClick={() => this.setState({ machine: "Bus-962G" })}
              >
                Bus-962G
              </span>
              <span
                className="badge rounded-pill bg-light text-dark div-button mx-1 border"
                onClick={() => this.setState({ machine: "MTR" })}
              >
                MTR
              </span>
              <input
                type="text"
                className="form-control"
                id="machine"
                placeholder="Machine"
                onChange={this.handleMachineChange}
                value={this.state.machine}
                spellCheck="false"
                required
              />
            </div>
            <div className="form-group m-3">
              <label htmlFor="fee" className="form-label">
                Fee
              </label>
              <input
                type="text"
                className="form-control"
                id="fee"
                placeholder="Fee"
                onChange={this.handleFeeChange}
                value={this.state.fee}
                spellCheck="false"
                required
              />
            </div>
            <div className="container m-3">
              {this.state.error && <div className="text-danger">*{this.state.errorMessage}</div>}
            </div>
            <div className="container m-3">{this.state.successMessage}</div>
            <div className="container">
              <input
                className="btn btn-md btn-outline-primary btn-sm"
                type="submit"
                value="Submit"
                style={{ float: "right" }}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddTransport;
