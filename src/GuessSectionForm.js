import React from "react";
import "./GuessSectionForm.css";

export default class GuessSectionForm extends React.Component {
  onSubmit(event) {
    event.preventDefault();

    if (this.props.onMakeGuess) {
      const value = this.input.value;
      this.props.onMakeGuess(value);
    }
    this.input.value = "";
    this.input.focus();
  }

  render() {
    return (
      <div className="guessSectionForm">
        <form onSubmit={e => this.onSubmit(e)}>
          <input
            type="number"
            name="userGuess"
            id="userGuess"
            className="text"
            min="1"
            max="100"
            autoComplete="off"
            placeholder="Enter your Guess"
            ref={input => (this.input = input)}
            required
          />
          <button
            type="submit"
            name="submit"
            id="guessButton"
            className="button"
          >
            Guess
          </button>
          <h3>
            Guess # <span className="guessNum">{this.props.guessCount}</span>!
          </h3>
        </form>
      </div>
    );
  }
}
