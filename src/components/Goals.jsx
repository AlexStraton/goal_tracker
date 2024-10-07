const goals = [
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
];

export default function Goals() {
  return (
    <div>
      {goals.map((goal) => {
        return (
          <div className='goal'>
            <h1>{goal.title}</h1>
            <h2>{goal.description}</h2>
            <h3>Status: {goal.completed ? "Completed" : "In Progress"}</h3>
            <h3>Progress: {goal.progress} %</h3>
            <h3>Priority: {goal.priority}</h3>
          </div>
        );
      })}
    </div>
  );
}
