import React from "react";
import scores from "./scores";
import PlayerScore from "./PlayerScore";

function HighScoreTable() {
  let finalScores = scores.sort((a, b) => (a.name > b.name ? 1 : -1));
  return (
    <div>
      {finalScores.map((score, index) => (
        <div className="container">
          <h4 key={index} className="heading">
            HIGH SCORES: {score.name}
          </h4>
          <PlayerScore players={score.scores} />
        </div>
      ))}
    </div>
  );
}

export default HighScoreTable;