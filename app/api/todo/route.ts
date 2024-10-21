import { getTodos } from "@/actions/todo/todo.action";
import { NextResponse } from "next/server";

export const GET = async () => {
  // getTodoAction 호출
  const result = await getTodos();

  console.log(result);
  return NextResponse.json({ ...result });
};
