import React from "react";
import Layout from "../../partials/Layout";
//import { Link } from "react-router-dom";
//import $ from "jquery";
import { Component } from "react";

class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedOption: "rarely",
    };
  }
  render() {
    return {
      /*JSX code*/
    };
  }

  handleOptionChange = (changeEvent: any) => {
    this.setState({
      selectedOption: changeEvent.target.value,
    });
  };
}

handleFormSubmit = (formSubmitEvent: any) => {
  formSubmitEvent.preventDefault();

  console.log("You have submitted:", document.state.selectedOption);
};

export default App;

function TestCheck() {
  return (
    <Layout>
      <form onSubmit={this.handleFormSubmit}>
        <div className="main">
          <div className="questions">
            <label>
              <input
                type="radio"
                id="rarely"
                name="answer"
                value="rarely"
                checked={this.state.selectedOption === "rarely"}
                onChange={this.handleOptionChange}
              />
              극히 드물다 <br />{" "}
            </label>
          </div>
          <div className="questions">
            <input
              type="radio"
              name="answer"
              id="sometimes"
              value="sometimes"
              checked={this.state.selectedOption === "sometimes"}
            />{" "}
            가끔 <br />
          </div>
          <div className="questions">
            <input
              type="radio"
              name="answer"
              id="often"
              value="often"
              checked={this.state.selectedOption === "often"}
            />{" "}
            자주 <br />
          </div>
          <div className="questions">
            <input
              type="radio"
              name="answer"
              id="mostly"
              value="mostly"
              checked={this.state.selectedOption === "mostly"}
            />{" "}
            거의 대부분 <br />
          </div>
        </div>
      </form>
    </Layout>
  );
}

//$('input[name="answer"]').change)

//$(".sometimes").
