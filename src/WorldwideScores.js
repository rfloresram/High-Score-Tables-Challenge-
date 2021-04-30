import React from "react";
import "./WorldwideScores.css";

function WorldwideScores(props) {
  let allScores = [];

  props.scores.forEach((country) => {
    country.scores.forEach((score) => {
      allScores.push(score);
    });
  });

  let bestPlayers = allScores.sort((a, b) => (a.s < b.s ? 1 : -1));

  return (
    <section>
      <h4 className="heading bg-success" >Worldwide Scores - Player Scores</h4>
      <table className="table table-hover table-md text-center">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Player</th>
            <th scope="col">Scores</th>
          </tr>
        </thead>
        {bestPlayers.map((score, index) => (
          <tbody key={index}>
            <tr className="table-light">
              <td>{score.n.toUpperCase()}</td>
              <td>{score.s}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </section>
  );
}

export default WorldwideScores;