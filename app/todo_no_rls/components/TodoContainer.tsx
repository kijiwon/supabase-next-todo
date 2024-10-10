"use client";

import { getTodos, getTodosById } from "@/apis/todos-no-rls";
import React, { useEffect } from "react";

const TodoContainer = () => {
  useEffect(() => {
    // getTodos();
    getTodosById(4);
  }, []);

  return <div>TodoContainer</div>;
};

export default TodoContainer;
