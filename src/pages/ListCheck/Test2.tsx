import React from "react";
import Layout from "../../partials/Layout";
import { Component } from "react";



const handleClickRadioButton = () => {
  setInputStatus(!inputStatus)
}

<RadioBtn type = "radio" id="radio" />
<label htmlFor="radio"> Radio </label>


function Test2() {const [inputStatus, setInputStatus]=useState(false)
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