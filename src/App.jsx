import "./App.css";
import AddGoal from "./components/AddGoal";
import Goals from "./components/Goals";
import { useState } from "react";

function App() {
  const [showAddGoal, setShowAddGoal] = useState(false);
  return (
    <>
      <h1> My goals</h1>
      <button onClick={() => setShowAddGoal(!showAddGoal)}>Add new goal</button>
      {showAddGoal ? <AddGoal /> : null}

      <Goals />
    </>
  );
}

export default App;
