"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import View from "@/components/View";
import { button1 } from "@/constraints/button";
import { useCallback, useState } from "react";
export default function Home() {
  const [todoData, setTodoData] = useState("");
  const [todoData2, setTodoData2] = useState([]);

  const dataFromTodo = useCallback(() => {
    setTodoData2((prev) => [...prev, todoData]);
  }, [todoData]);
  const optional = "";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Input setTodoData={setTodoData} />
        <Button
          button1={button1}
          dataFromTodo={dataFromTodo}
          optional={optional}
        />
        <View todoarr={todoData2} />
      </div>
    </main>
  );
}
