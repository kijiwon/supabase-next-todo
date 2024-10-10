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

// todoList 가져오기 + by Id
export const getTodosById = async (id: number) => {
  const supabase = createSupabaseBrowserClient();
  const result = await supabase
    .from("todos_no_rls")
    .select("*")
    .is("deleted_at", null)
    // 동일한 id만 가져오기
    .eq("id", id);

  return result.data;
};

// todoList 가져오기 + search
export const getTodosBySearch = async (terms: string) => {
  const supabase = createSupabaseBrowserClient();
  const result = await supabase
    .from("todos_no_rls")
    .select("*")
    .is("deleted_at", null)
    // 검색어가 포함된 content 가져오기
    // ilike -> terms의 대소문자 구분하지 않음
    .ilike("content", `%${terms}%`)
    .order("id", { ascending: false })
    // 데이터 수 제한
    .limit(500);

  return result.data;
};

// todoList 생성하기
export const createTodos = async (content: string) => {
  const supabase = createSupabaseBrowserClient();
  const result = await supabase
    .from("todos_no_rls")
    .insert({
      content,
    })
    .select();

  return result.data;
};

// todoList 업데이트하기
export const updateTodos = async (id: number, content: string) => {
  const supabase = createSupabaseBrowserClient();
  const result = await supabase
    .from("todos_no_rls")
    .update({
      content,
      // updated_at 필드도 업데이트
      updated_at: new Date().toISOString(),
    })
    // id가 동일한 데이터를 업데이트
    .eq("id", id)
    // 가져오기
    .select();

  return result.data;
};

// todoList 삭제하기
// soft delete
export const deleteTodosSoft = async (id: number) => {
  const supabase = createSupabaseBrowserClient();
  const result = await supabase
    .from("todos_no_rls")
    .update({
      deleted_at: new Date().toISOString(),
      // 삭제 -> 업데이트(선택사항)
      updated_at: new Date().toISOString(),
    })
    // id가 동일한 데이터를 업데이트
    .eq("id", id)
    // 가져오기
    .select();

  return result.data;
};

// hard delete
export const deleteTodosHard = async (id: number) => {
  const supabase = createSupabaseBrowserClient();
  const result = await supabase
    .from("todos_no_rls")
    .delete()
    // id가 동일한 데이터를 삭제
    .eq("id", id);

  return result.data;
};
