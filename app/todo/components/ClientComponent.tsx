"use client";

import { getTodoAction } from "@/actions/todo/todo.action";

const ClientComponent = () => {
  const handleClick = async () => {
    const result = await getTodoAction();
    console.log(result);
  };

  return (
    <div>
      client component
      <button onClick={handleClick}>test server actions</button>
    </div>
  );
};

export default ClientComponent;
