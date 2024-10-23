import { createServerSideClient } from "@/lib/supabase";

// serverComponent 인자로 받기
// 서버 액션의 경우 서버 사이드 랜더링 도중 호출될 수 있음 -> 서버는 쿠키 조작이 불가능
// 이러한 환경을 분기처리하기 위해 serverComponent 변수를 추가
export const getUser = async ({ serverComponent = false }) => {
  const supabase = await createServerSideClient(serverComponent);
  const user = await supabase.auth.getUser();
  return user?.data?.user;
};

// user profile 가져오기
export const getProfileById = async ({
  serverComponent = false,
  userId = "",
}) => {
  const supabase = await createServerSideClient(serverComponent);
  const profile = await supabase.from("profiles").select("*").eq("id", userId);

  return profile?.data?.[0];
};
