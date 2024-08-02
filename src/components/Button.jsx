const Button = ({ button1, dataFromTodo, optional }) => {
  const { label, styleing } = button1;

  return (
    <button onClick={() => dataFromTodo(optional)} className={`${styleing}`}>
      {label}
    </button>
  );
};

export default Button;
