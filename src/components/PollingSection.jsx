/* eslint-disable @next/next/no-img-element */
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
    <div className="PollSection">
      <h3>Quiz </h3>
      <div className="VoteContainer ">
        <div className="VoteDiv ">
          <h6 className="buttonText">Positive</h6>
          <button
            className="PositiveButton pollbuttons"
            onClick={() => handleVote("positive")}
          ></button>

          <ProgressBar
            className="PositiveBar"
            now={positivePercentage}
            label={`${positivePercentage}% Positive`}
          />
        </div>

        <div className=" VoteDiv ">
          <h6 className="buttonText">Negative</h6>
          <button
            className="NegativeButton pollbuttons"
            onClick={() => handleVote("negative")}
          ></button>
          <ProgressBar
            className="NegativeBar"
            now={negativePercentage}
            label={`${negativePercentage}% Negative`}
          />
        </div>
      </div>
    </div>
  );
}
