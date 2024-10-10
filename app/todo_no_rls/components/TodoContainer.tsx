"use client";

import {
  createTodos,
  getTodos,
  getTodosById,
  getTodosBySearch,
} from "@/apis/todos-no-rls";
import React, { useEffect } from "react";

const TodoContainer = () => {
  useEffect(() => {
    // getTodos();
    // getTodosById(4);
    // getTodosBySearch("공부");
    createTodos("createTodos");
  }, []);

  return <div>TodoContainer</div>;
};

export default TodoContainer;
