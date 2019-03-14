import React from "react";

import GuessSectionForm from "./GuessSectionForm";
import "./GuessSection.css";
import Feedback from "./Feedback";
import PrevAnswers from "./PrevAnswers";

export default function GuessSection(props) {
  const { feedback, guessCount, guesses } = props;
  return (
    <div className="guessSection">
      <Feedback feedback={feedback} />
      <GuessSectionForm
        guessCount={guessCount}
        onMakeGuess={guess => props.onMakeGuess(guess)}
      />
      <PrevAnswers guesses={guesses} />
    </div>
  );
}
