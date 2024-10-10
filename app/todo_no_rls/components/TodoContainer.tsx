"use client";

import {
  createTodos,
  getTodos,
  getTodosById,
  getTodosBySearch,
  updateTodos,
} from "@/apis/todos-no-rls";
import React, { useEffect } from "react";

const TodoContainer = () => {
  useEffect(() => {
    // getTodos();
    // getTodosById(4);
    // getTodosBySearch("공부");
    // createTodos("createTodos");
    updateTodos(5, "todos 업데이트!");
  }, []);

  return <div>TodoContainer</div>;
};

export default TodoContainer;
