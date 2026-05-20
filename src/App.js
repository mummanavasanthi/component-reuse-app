import React from "react";
import "./App.css";

import StudentCard from "./components/StudentCard";

function App() {
  return (
    <div className="container">
      <h1>Component Reuse Example</h1>

      <StudentCard
        name="Vasanthi"
        course="Computer Science"
        college="ABC College"
      />

      <StudentCard
        name="Rahul"
        course="Electronics"
        college="XYZ College"
      />

      <StudentCard
        name="Priya"
        course="Mechanical"
        college="PQR College"
      />
    </div>
  );
}

export default App;
