"use client";

import useTodosController from "../hooks/useTodosController";
import TodoList from "@/components/ui/TodoList";

interface TodoContainerProps {
  ownerUserId?: string;
}

const TodoContainer = ({ ownerUserId }: TodoContainerProps) => {
  const {
    loading,
    todos,
    onCreateEmptyTodos,
    onUpdateTodos,
    onSearchTodos,
    onDeleteTodos,
  } = useTodosController(ownerUserId);

  return (
    <div>
      <TodoList
        ownerUserId={ownerUserId}
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
