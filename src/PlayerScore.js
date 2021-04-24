import React from "react";

function PlayerScore(props) {
  let arrayOfScores = props.players.sort((a, b) => (a.s < b.s ? 1 : -1));
  return (
    <div>
      {arrayOfScores.map((player, index) => (
        <tr key={index}>
          <td>{player.n.toUpperCase()}</td>
          <td>{player.s}</td>
        </tr>
      ))}
    </div>
  );
}

export default PlayerScore;