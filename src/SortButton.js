import React from "react";
import "./SortButton.css";

const SortButton = (props) => {
  return (
    <button onClick={props.changeOrder} className="bg-primary" type="submit">
      Grand Total Scores
    </button>
  );
};

export default SortButton;