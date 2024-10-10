// 웹 페이지 안에서 supabase의 REST API를 호출할 때 사용하는 함수
import { createBrowserClient } from "@supabase/ssr";
import { Database } from "@/database.types";

export const createSupabaseBrowserClient = () => {
  return createBrowserClient<Database>(
    // supabase url과 supabase anon key를 전달
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
};
