"use client";

import { getTodos, getTodosById, getTodosBySearch } from "@/apis/todos-no-rls";
import React, { useEffect } from "react";

const TodoContainer = () => {
  useEffect(() => {
    // getTodos();
    // getTodosById(4);
    getTodosBySearch("공부");
  }, []);

  return <div>TodoContainer</div>;
};

export default TodoContainer;
