const Input = ({ setTodoData }) => {
  return <input type="text" onChange={(e) => setTodoData(e.target.value)} />;
};

export default Input;
