export default function Priority({ setPriority }) {
  return (
    <select onChange={(e) => setPriority(e.target.value)}>
      <option value='low'>Low</option>
      <option value='medium'>Medium</option>
      <option value='high'>High</option>
    </select>
  );
}
