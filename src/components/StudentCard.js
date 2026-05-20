import React from "react";

function StudentCard(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>

      <p>Course: {props.course}</p>

      <p>College: {props.college}</p>
    </div>
  );
}

export default StudentCard;