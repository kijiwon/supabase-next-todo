"use client";

import useTodosController from "../hooks/useTodosController";
import TodoList from "@/components/ui/TodoList";

const TodoContainer = () => {
  const {
    loading,
    todos,
    onCreateEmptyTodos,
    onUpdateTodos,
    onSearchTodos,
    onDeleteTodos,
  } = useTodosController();

  return (
    <div>
      <TodoList
        sharedUserFulName="test user"
        ownerUserId="123"
        loading={loading}
        todoListData={todos}
        isReadOnly={false}
        onUpdate={onUpdateTodos}
        onCreate={onCreateEmptyTodos}
        onDelete={onDeleteTodos}
        onSearch={onSearchTodos}
      />
    </div>
  );
};

export default TodoContainer;
