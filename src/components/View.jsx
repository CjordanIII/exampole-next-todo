import { useState } from "react";
import { button2 } from "../constraints/button";
import Button from "./Button";

const View = ({ todoarr }) => {
  const [data, setdata] = useState(todoarr);
  const handleDelete = (i) => {
    if (i === 0) todoarr.pop();
    let d = todoarr.splice(1, i);

    setdata((prev) => [...prev, d]);
  };
  return (
    <>
      {todoarr.map((todo, i) => {
        return (
          <div key={i}>
            <p>{todo}</p>
            <Button
              button1={button2}
              optional={i}
              dataFromTodo={handleDelete}
            />
          </div>
        );
      })}
    </>
  );
};

export default View;
