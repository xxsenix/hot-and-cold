import React from "react";
import "./Feedback.css";

export default function Feedback(props) {
  return (
    <div className="feedback">
      <h2>{props.feedback}</h2>
    </div>
  );
}
