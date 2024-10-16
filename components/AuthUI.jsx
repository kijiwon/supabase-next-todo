"use client";

import useHydrate from "@/hooks/useHydrate";
import { createSupabaseBrowserClient } from "@/lib/client/supabse";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const AuthUI = () => {
  const supabase = createSupabaseBrowserClient();
  const isMount = useHydrate();

  if (!isMount) return null;

  return (
    <section className=" w-full">
      <div className=" max-w-[500px] mx-auto">
        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
          }}
          onlyThirdPartyProviders // -> 이메일 로그인은 사용하지 않음
          providers={["google", "github"]}
        />
      </div>
    </section>
  );
};

export default AuthUI;
