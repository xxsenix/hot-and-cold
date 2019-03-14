import React, { Component } from "react";

import Header from "./Header";
import GuessSection from "./GuessSection";

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correctAnswer: Math.floor(Math.random() * 100) + 1,
      guesses: [],
      feedback: "Make your Guess!"
    };
  }

  restartGame() {
    this.setState({
      correctAnswer: Math.floor(Math.random() * 100) + 1,
      guesses: [],
      feedback: "Make your Guess!"
    });
  }

  makeGuess(guess) {
    guess = parseInt(guess, 10);
    if (isNaN(guess)) {
      this.setState({ feedback: "Please enter a valid number" });
      return;
    }
    const difference = Math.abs(guess - this.state.correctAnswer);

    let feedback;
    if (difference >= 50) {
      feedback = `You're ice cold...`;
    } else if (difference >= 30) {
      feedback = `You're cold...`;
    } else if (difference >= 10) {
      feedback = `You're warm...`;
    } else if (difference >= 1) {
      feedback = `You're hot!`;
    } else {
      feedback = `Nailed it!`;
    }

    this.setState({
      feedback,
      guesses: [...this.state.guesses, guess]
    });
  }

  render() {
    const { feedback, guesses } = this.state;
    const guessCount = guesses.length;

    return (
      <div className="container">
        <Header onRestartGame={() => this.restartGame()} />
        <GuessSection
          feedback={feedback}
          guessCount={guessCount}
          guesses={guesses}
          onMakeGuess={guess => this.makeGuess(guess)}
        />
      </div>
    );
  }
}
