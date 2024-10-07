export default function AddGoal() {
  return (
    <>
      <button>Add new goal</button>
      <form className='form'>
        <label>Title</label>
        <input type='text' />
        <label>Description</label>
        <input type='text' />
        <label>Completed</label>
        <input type='text' />
        <label>Progress</label>
        <input type='text' />
        <label>Priority</label>
        <input type='text' />
      </form>
    </>
  );
}

// title: "Lose 10 Pounds",
// description:
//   "Follow a healthy diet and exercise routine to lose 10 pounds.",
// completed: false,
// progress: 30,
// priority: "High",
