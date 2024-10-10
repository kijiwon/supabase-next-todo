"use client";

import { createSupabaseBrowserClient } from "@/lib/client/supabse";

// todoList 가져오기
export const getTodos = async () => {
  const supabase = createSupabaseBrowserClient();
  const result = await supabase
    .from("todos_no_rls")
    .select("*")
    .is("deleted_at", null)
    // 내림차순으로 정렬
    .order("id", {
      ascending: false,
    });

  return result.data;
};
