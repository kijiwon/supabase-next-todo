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

// {
//   "iss": "https://accounts.google.com",
//   "sub": "113472117377339222984",
//   "name": "기지원",
//   "email": "kiji1313@gmail.com",
//   "picture": "https://lh3.googleusercontent.com/a/ACg8ocJf8lGIr9tRWXbE_kAJpMu-leQt8OwquGbZ9iNKA-gsn-SX-roYTA=s96-c",
//   "full_name": "기지원",
//   "user_name": "kijiwon",
//   "avatar_url": "https://lh3.googleusercontent.com/a/ACg8ocJf8lGIr9tRWXbE_kAJpMu-leQt8OwquGbZ9iNKA-gsn-SX-roYTA=s96-c",
//   "provider_id": "113472117377339222984",
//   "email_verified": true,
//   "phone_verified": false,
//   "preferred_username": "kijiwon"
// }
