"use client";

import useTodosController from "../hooks/useTodosController";
import TodoList from "@/components/ui/TodoList";

interface TodoContainerProps {
  shareUserFullName?: string;
  ownerUserId?: string;
}

const TodoContainer = ({
  shareUserFullName,
  ownerUserId,
}: TodoContainerProps) => {
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
        sharedUserFulName={shareUserFullName}
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
