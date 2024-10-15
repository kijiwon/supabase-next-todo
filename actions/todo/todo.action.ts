"use server";

import { createServerSideClient } from "@/lib/supabase";

export const getTodoAction = async () => {
  const supabase = await createServerSideClient();
  const result = await supabase
    .from("todos_no_rls")
    .select("*")
    .is("deleted_at", null)
    // 내림차순으로 정렬
    .order("id", {
      ascending: false,
    });

  console.log("todo GET API income", result);
  return result.data;
};
