import { getProfileById } from "@/actions/auth/user.action";
import { permanentRedirect } from "next/navigation";

interface SharePageProps {
  params: { user_id: string };
  searchParams: {};
}

const page = async (props: SharePageProps) => {
  const userId = props?.params?.user_id;
  const profile = await getProfileById({ serverComponent: true, userId });
  console.log(">>profile", profile);
  // 존재하지 않는 profile인 경우 홈으로 영구리다이렉트
  if (!profile) permanentRedirect("/");
  return <div>share page</div>;
};

export default page;
