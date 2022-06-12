import React, { Component } from "react";
import API from "./api.jsx";

class AddFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodName: "",
      foodEnergy: "",
      foodCarbohydrates: "",
      foodFat: "",
      foodProtein: "",
      foodSugar: "",
      foodFee: "",
      error: false,
      errorMessage: "",
      successMessage: "",
    };

    this.handleFoodSubmit = this.handleFoodSubmit.bind(this);
    this.handleFoodNameChange = this.handleFoodNameChange.bind(this);
    this.handleFoodEnergyChange = this.handleFoodEnergyChange.bind(this);
    this.handleFoodProteinChange = this.handleFoodProteinChange.bind(this);
    this.handleFoodSugarChange = this.handleFoodSugarChange.bind(this);
    this.handleFoodFatChange = this.handleFoodFatChange.bind(this);
    this.handleFoodCarbohydratesChange = this.handleFoodCarbohydratesChange.bind(this);
    this.handleFoodFeeChange = this.handleFoodFeeChange.bind(this);
    this.setAllNutriZero = this.setAllNutriZero.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.saveFood = this.saveFood.bind(this);
    this.btnNoFocus = this.btnNoFocus.bind(this);
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
      this.setState({
        successMessage: "Done",
        foodName: "",
        foodEnergy: "",
        foodCarbohydrates: "",
        foodFat: "",
        foodProtein: "",
        foodSugar: "",
        foodFee: "",
      });
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

  setAllNutriZero(e) {
    this.setState({ foodEnergy: 0, foodProtein: 0, foodFat: 0, foodSugar: 0, foodCarbohydrates: 0 });
  }

  resetForm(e) {
    this.setState({
      foodName: "",
      foodEnergy: "",
      foodCarbohydrates: "",
      foodFat: "",
      foodProtein: "",
      foodSugar: "",
      foodFee: "",
      error: false,
      errorMessage: "",
      successMessage: "",
    });
  }

  saveFood(e) {}

  btnNoFocus(e) {
    e.preventDefault();
  }

  render() {
    const templateStyle = {
      margin: "20px",
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      fontSize: "12px",
      lineHeight: "20px",
      textAlign: "center",
      background: "#808080",
      color: "#fff",
    };

    return (
      <div className="container">
        <div className="container">
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm"
            onClick={this.setAllNutriZero}
            onMouseDown={this.btnNoFocus}
          >
            Set Zero
          </button>
          <button
            type="button"
            className="btn btn-outline-info btn-sm float-end"
            onClick={this.saveFood}
            onMouseDown={this.btnNoFocus}
          >
            Save Template
          </button>
        </div>
        <div className="container m-2">
          <div style={templateStyle}>1</div>
        </div>
        <div className="contianer">
          <form onSubmit={this.handleFoodSubmit} id="foodForm" autoComplete="off" className="m-4">
            <div className="form-group m-3">
              <label htmlFor="foodName" className="form-label">
                Food Name
              </label>
              <input
                type="text"
                className="form-control"
                id="foodName"
                placeholder="Food Name"
                onChange={this.handleFoodNameChange}
                value={this.state.foodName}
                spellCheck="false"
                required
              />
            </div>
            <div className="form-group m-3">
              <label htmlFor="foodEnergy" className="form-label">
                Food Energy
              </label>
              <span
                className="badge rounded-pill bg-light text-dark float-end"
                onClick={() => this.setState({ foodEnergy: 0 })}
              >
                0
              </span>
              <input
                type="text"
                className="form-control"
                id="foodEnergy"
                placeholder="Food Energy"
                onChange={this.handleFoodEnergyChange}
                value={this.state.foodEnergy}
                spellCheck="false"
                required
              />
            </div>
            <div className="form-group m-3">
              <label htmlFor="foodProtein" className="form-label">
                Food Protein
              </label>
              <span
                className="badge rounded-pill bg-light text-dark float-end"
                onClick={() => this.setState({ foodProtein: 0 })}
              >
                0
              </span>
              <input
                type="text"
                className="form-control"
                id="foodProtein"
                placeholder="Food Protein"
                onChange={this.handleFoodProteinChange}
                value={this.state.foodProtein}
                spellCheck="false"
                required
              />
            </div>
            <div className="form-group m-3">
              <label htmlFor="foodFat" className="form-label">
                Food Fat
              </label>
              <span
                className="badge rounded-pill bg-light text-dark float-end"
                onClick={() => this.setState({ foodFat: 0 })}
              >
                0
              </span>
              <input
                type="text"
                className="form-control"
                id="foodFat"
                placeholder="Food Fat"
                onChange={this.handleFoodFatChange}
                value={this.state.foodFat}
                spellCheck="false"
                required
              />
            </div>
            <div className="form-group m-3">
              <label htmlFor="foodSugar" className="form-label">
                Food Sugar
              </label>
              <span
                className="badge rounded-pill bg-light text-dark float-end"
                onClick={() => this.setState({ foodSugar: 0 })}
              >
                0
              </span>
              <input
                type="text"
                className="form-control"
                id="foodSugar"
                placeholder="Food Sugar"
                onChange={this.handleFoodSugarChange}
                value={this.state.foodSugar}
                spellCheck="false"
                required
              />
            </div>
            <div className="form-group m-3">
              <label htmlFor="foodCarbohydrates" className="form-label">
                Food Carbohydrates
              </label>
              <span
                className="badge rounded-pill bg-light text-dark float-end"
                onClick={() => this.setState({ foodCarbohydrates: 0 })}
              >
                0
              </span>
              <input
                type="text"
                className="form-control"
                id="foodCarbohydrates"
                placeholder="Food Carbohydrates"
                onChange={this.handleFoodCarbohydratesChange}
                value={this.state.foodCarbohydrates}
                spellCheck="false"
                required
              />
            </div>
            <div className="form-group m-3">
              <label htmlFor="foodFee" className="form-label">
                Food Fee
              </label>
              <span
                className="badge rounded-pill bg-light text-dark float-end"
                onClick={() => this.setState({ foodFee: 0 })}
              >
                0
              </span>
              <input
                type="text"
                className="form-control"
                id="foodFee"
                placeholder="Food Fee"
                onChange={this.handleFoodFeeChange}
                value={this.state.foodFee}
                spellCheck="false"
                required
              />
            </div>
            <div className="container m-3">
              {this.state.error && <div className="text-danger">*{this.state.errorMessage}</div>}
            </div>
            <div className="container m-3">{this.state.successMessage}</div>
            <div className="container">
              <button className="btn btn-md btn-outline-warning btn-sm" onClick={this.resetForm}>
                Reset
              </button>
              <input className="btn btn-md btn-outline-primary float-end btn-sm" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddFood;
