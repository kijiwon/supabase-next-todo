"use client";

import useHydrate from "@/hooks/useHydrate";
import { createSupabaseBrowserClient } from "@/lib/client/supabse";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useEffect, useState } from "react";

const AuthUI = () => {
  const [user, setUser] = useState();
  const supabase = createSupabaseBrowserClient();
  const isMount = useHydrate();

  const getUserInfo = async () => {
    const result = await supabase.auth.getUser();
    if (result?.data?.user) setUser(result?.data?.user);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    // 동작이 완료되면 새로고침
    window.location.reload();
  };

  // ui를 사용하지 않고 로그인 동작하기
  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO,
      },
    });
  };

  const handleGithubLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO,
      },
    });
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  if (!isMount) return null;

  return (
    <section className=" w-full p-10">
      <div>{user ? `로그인 됨 ${user.email}` : "로그아웃 됨"}</div>
      <>
        {user && (
          <button onClick={handleLogout} className=" border-2 border-black ">
            로그아웃
          </button>
        )}
      </>
      <div className=" max-w-[500px] mx-auto">
        {/* <Auth
          redirectTo={process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO}
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
          }}
          onlyThirdPartyProviders // -> 이메일 로그인은 사용하지 않음
          providers={["google", "github"]}
        /> */}
        <div>
          <button onClick={handleGoogleLogin}>Google Login</button>
          <button onClick={handleGithubLogin}>Github Login</button>
        </div>
      </div>
    </section>
  );
};

export default AuthUI;
