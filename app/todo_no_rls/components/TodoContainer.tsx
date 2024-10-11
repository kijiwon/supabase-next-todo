"use client";

import useTodosController from "../hooks/useTodosController";
import TodoList from "@/components/ui/TodoList";

const TodoContainer = () => {
  const { loading, todos } = useTodosController();

  return (
    <div>
      <TodoList
        sharedUserFulName="test user"
        ownerUserId="123"
        loading={loading}
        todoListData={todos}
      />
    </div>
  );
};

export default TodoContainer;
