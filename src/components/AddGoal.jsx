export default function AddGoal({ newGoal, setnewGoal, goals, setGoals }) {
  function handleChange(e) {
    const { name, value } = e.target;
    setnewGoal({ ...newGoal, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newGoalItem = {
      id: goals.length + 1,
      ...newGoal,
    };

    setGoals([newGoalItem, ...goals]);
    setnewGoal({
      title: "",
      description: "",
      completed: "",
      progress: 0,
      priority: "",
    });
  }

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          name='title'
          value={newGoal.title}
          type='text'
          onChange={handleChange}
        />
        <label>Description</label>
        <input
          name='description'
          value={newGoal.description}
          type='text'
          onChange={handleChange}
        />
        <label>Completed</label>
        <input
          name='completed'
          value={newGoal.completed}
          type='text'
          onChange={handleChange}
        />
        <label>Progress</label>
        <input
          name='progress'
          value={newGoal.progress}
          type='text'
          onChange={handleChange}
        />
        <label>Priority</label>
        <input
          name='priority'
          value={newGoal.priority}
          type='text'
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </>
  );
}
