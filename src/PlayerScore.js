import React from "react";
import "./PlayerScore.css";

function PlayerScore(props) {
  let arrayOfScores;

  if (props.isDescending) {
    arrayOfScores = props.players.sort((a, b) => (a.s < b.s ? 1 : -1));
  } else {
    arrayOfScores = props.players.sort((a, b) => (a.s > b.s ? 1 : -1));
  }

  return (
    <table className="table table-hover table-md text-center">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Player Name</th>
          <th scope="col">Total Score</th>
        </tr>
      </thead>
      {arrayOfScores.map((player, index) => (
        <tbody key={index}>
          <tr className="table-light">
            <td>{player.n.toUpperCase()}</td>
            <td>{player.s}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}

export default PlayerScore;