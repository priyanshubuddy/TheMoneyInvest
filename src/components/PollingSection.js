import React, { useState } from "react";
import { ProgressBar } from "react-bootstrap";

export default function PollingSection() {
  const [positiveVotes, setPositiveVotes] = useState(0);
  const [negativeVotes, setNegativeVotes] = useState(0);
  const totalVotes = positiveVotes + negativeVotes;
  const positivePercentage = totalVotes
    ? ((positiveVotes / totalVotes) * 100).toFixed(2)
    : 0;
  const negativePercentage = totalVotes
    ? ((negativeVotes / totalVotes) * 100).toFixed(2)
    : 0;

  const handleVote = (option) => {
    if (option === "positive") {
      setPositiveVotes(positiveVotes + 1);
    } else {
      setNegativeVotes(negativeVotes + 1);
    }
  };

  return (
    <div>
      <h3>Market Status Polling</h3>
      <div className="d-flex flex-row align-items-center justify-content-between">
        <div className="d-flex flex-column align-items-center">
          <button onClick={() => handleVote("positive")}>Positive</button>
          <span>
            {positiveVotes} votes ({positivePercentage}%)
          </span>
        </div>
        <div className="d-flex flex-column align-items-center">
          <button onClick={() => handleVote("negative")}>Negative</button>
          <span>
            {negativeVotes} votes ({negativePercentage}%)
          </span>
        </div>
      </div>
      <ProgressBar
        now={positivePercentage}
        label={`${positivePercentage}% Positive`}
      />
      <ProgressBar
        now={negativePercentage}
        label={`${negativePercentage}% Negative`}
      />
    </div>
  );
}
