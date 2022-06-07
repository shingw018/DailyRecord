import React, { Component } from "react";
import API from "./api.jsx";

class Food extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodName: undefined,
      foodEnergy: undefined,
      foodCarbohydrates: undefined,
      foodFat: undefined,
      foodProtein: undefined,
      foodSugar: undefined,
      foodFee: undefined,
      error: false,
      errorMessage: undefined,
      successMessage: undefined,
    };

    this.handleFoodSubmit = this.handleFoodSubmit.bind(this);
    this.handleFoodNameChange = this.handleFoodNameChange.bind(this);
    this.handleFoodEnergyChange = this.handleFoodEnergyChange.bind(this);
    this.handleFoodProteinChange = this.handleFoodProteinChange.bind(this);
    this.handleFoodSugarChange = this.handleFoodSugarChange.bind(this);
    this.handleFoodFatChange = this.handleFoodFatChange.bind(this);
    this.handleFoodCarbohydratesChange = this.handleFoodCarbohydratesChange.bind(this);
    this.handleFoodFeeChange = this.handleFoodFeeChange.bind(this);
  }
  async handleFoodSubmit(e) {
    //send { foodName, foodEnergy, foodCarbohydrates, foodFat, foodProtein, foodSugar, foodFee }
    e.preventDefault();

    //Getting data from this.state
    const { foodName, foodEnergy, foodCarbohydrates, foodFat, foodProtein, foodSugar, foodFee } = this.state;
    const name = foodName;
    const energy = foodEnergy;
    const carbohydrates = foodCarbohydrates;
    const protein = foodProtein;
    const fat = foodFat;
    const sugar = foodSugar;
    const fee = foodFee;

    //Setting data to send
    const dataToSend = { name, energy, carbohydrates, fat, protein, sugar, fee };

    console.log(dataToSend);

    try {
      //Send the data and create the vote via doing post request
      await API.post("api/food", { data: dataToSend }, {});
      this.setState({ successMessage: "Done" });
    } catch (ex) {
      this.setState({ error: true, errorMessage: ex });
    }
  }

  handleFoodNameChange(e) {
    this.setState({ foodName: e.target.value });
  }

  handleFoodEnergyChange(e) {
    this.setState({ foodEnergy: e.target.value });
  }

  handleFoodProteinChange(e) {
    this.setState({ foodProtein: e.target.value });
  }

  handleFoodSugarChange(e) {
    this.setState({ foodSugar: e.target.value });
  }

  handleFoodFatChange(e) {
    this.setState({ foodFat: e.target.value });
  }

  handleFoodCarbohydratesChange(e) {
    this.setState({ foodCarbohydrates: e.target.value });
  }

  handleFoodFeeChange(e) {
    this.setState({ foodFee: e.target.value });
  }

  render() {
    return (
      <div className="container">
        <div className="container">
          <h2 className="text-center m-2">Food Record</h2>
        </div>
        <div className="contianer">
          <form onSubmit={this.handleFoodSubmit} id="foodForm">
            <div className="form-group m-3">
              <label htmlFor="foodName" className="form-label">
                Food Name
              </label>
              <input
                type="text"
                className="form-control"
                id="foodName"
                placeholder="food name"
                onChange={this.handleFoodNameChange}
                spellCheck="false"
                required
              />
            </div>
            <div className="form-group m-3">
              <label htmlFor="foodEnergy" className="form-label">
                Food Energy
              </label>
              <input
                type="text"
                className="form-control"
                id="foodEnergy"
                placeholder="food energy"
                onChange={this.handleFoodEnergyChange}
                spellCheck="false"
                required
              />
            </div>
            <div className="form-group m-3">
              <label htmlFor="foodProtein" className="form-label">
                Food Protein
              </label>
              <input
                type="text"
                className="form-control"
                id="foodProtein"
                placeholder="food protein"
                onChange={this.handleFoodProteinChange}
                spellCheck="false"
                required
              />
            </div>
            <div className="form-group m-3">
              <label htmlFor="foodFat" className="form-label">
                Food Fat
              </label>
              <input
                type="text"
                className="form-control"
                id="foodFat"
                placeholder="food fat"
                onChange={this.handleFoodFatChange}
                spellCheck="false"
                required
              />
            </div>
            <div className="form-group m-3">
              <label htmlFor="foodSugar" className="form-label">
                Food Sugar
              </label>
              <input
                type="text"
                className="form-control"
                id="foodSugar"
                placeholder="food sugar"
                onChange={this.handleFoodSugarChange}
                spellCheck="false"
                required
              />
            </div>
            <div className="form-group m-3">
              <label htmlFor="foodCarbohydrates" className="form-label">
                Food Carbohydrates
              </label>
              <input
                type="text"
                className="form-control"
                id="foodCarbohydrates"
                placeholder="food carbohydrates"
                onChange={this.handleFoodCarbohydratesChange}
                spellCheck="false"
                required
              />
            </div>
            <div className="form-group m-3">
              <label htmlFor="foodFee" className="form-label">
                Food Fee
              </label>
              <input
                type="text"
                className="form-control"
                id="foodFee"
                placeholder="food fee"
                onChange={this.handleFoodFeeChange}
                spellCheck="false"
                required
              />
            </div>
            <div className="container m-3">
              {this.state.error && <div className="text-danger">*{this.state.errorMessage}</div>}
            </div>
            <div className="container m-3">{this.state.successMessage}</div>
            <div className="container">
              <input className="btn btn-md btn-primary" type="submit" value="Food Submit" style={{ float: "right" }} />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Food;
