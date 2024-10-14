import { createServerSideClient } from "@/lib/supabase";
import { NextResponse } from "next/server";

export const GET = async () => {
  // createServerSideClient를 호출
  const supabase = await createServerSideClient();
  const result = await supabase
    .from("todos_no_rls")
    .select("*")
    .is("deleted_at", null)
    // 내림차순으로 정렬
    .order("id", {
      ascending: false,
    });

  console.log(result);
  return NextResponse.json({ ...result });
};
