import { getProfileById } from "@/actions/auth/user.action";
import { permanentRedirect } from "next/navigation";
import TodoContainer from "./components/TodoContainer";

interface SharePageProps {
  params: { user_id: string };
  searchParams: {};
}

const page = async (props: SharePageProps) => {
  const userId = props?.params?.user_id;
  const profile = await getProfileById({ serverComponent: true, userId });
  const userName = profile?.full_name;

  // 존재하지 않는 profile인 경우 홈으로 영구리다이렉트
  if (!profile) permanentRedirect("/");
  return (
    <div>
      <TodoContainer shareUserFullName={userName ?? ""} ownerUserId={userId} />
    </div>
  );
};

export default page;
