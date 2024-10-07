import Priority from "./Priority";

export default function Goals({ goals }) {
  return (
    <div>
      {goals.map((goal) => {
        return (
          <div key={goal.id} className='goal'>
            <h1>{goal.title}</h1>
            <h2>{goal.description}</h2>
            <h3>Status: {goal.completed ? "Completed" : "In Progress"}</h3>
            <h3>Progress: {goal.progress} %</h3>
            <Priority />
          </div>
        );
      })}
    </div>
  );
}
