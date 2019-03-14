import React from "react";
import "./PrevAnswers.css";

export default function Feedback(props) {
  console.log(props.guesses);
  const guesses = props.guesses.map((guess, index) => (
    <li key={index}>{guess}</li>
  ));

  return (
    <div className="guessSectionPrevAnswers">
      <ul className="prevAnswers">{guesses}</ul>
    </div>
  );
}
