import "./App.css";
import AddGoal from "./components/AddGoal";
import Goals from "./components/Goals";
import { useState } from "react";

function App() {
  const [showAddGoal, setShowAddGoal] = useState(false);
  const [newGoal, setnewGoal] = useState({
    title: "",
    description: "",
    completed: false,
    progress: 0,
    priority: "",
  });
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: "Learn JavaScript",
      description:
        "Complete an online JavaScript course and build a small project.",
      completed: false,
      progress: 50,
      priority: "High",
    },
    {
      id: 2,
      title: "Read 12 Books",
      description: "Finish reading 12 books by the end of the year.",
      completed: false,
      progress: 75,
      priority: "Medium",
    },
    {
      id: 3,
      title: "Lose 10 Pounds",
      description:
        "Follow a healthy diet and exercise routine to lose 10 pounds.",
      completed: false,
      progress: 30,
      priority: "High",
    },
  ]);
  const [priority, setPriority] = useState("Low");

  return (
    <>
      <h1> My goals</h1>
      <button onClick={() => setShowAddGoal(!showAddGoal)}>
        {showAddGoal ? "cancel" : "Add new goal"}
      </button>
      {showAddGoal ? (
        <AddGoal
          goals={goals}
          setGoals={setGoals}
          newGoal={newGoal}
          setnewGoal={setnewGoal}
          setPriority={setPriority}
        />
      ) : null}
      <Goals goals={goals} setnewGoal={setnewGoal} setPriority={setPriority} />
    </>
  );
}

export default App;
