import { createServerSideClient } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const overrideOrigin = process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO_HOME;
  const { searchParams, origin } = new URL(request.url);

  console.log(">>searchParams", searchParams);
  console.log(">>origin", origin);

  // searchParams에서 code와 next를 가져옴
  const code = searchParams.get("code");
  const next = searchParams.get("next");

  console.log(">>code", code);
  console.log(">>next", next);

  if (code) {
    // code가 존재하면 로그인(토큰 교환)을 진행
    const supabase = await createServerSideClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    // exchangeCodeForSession -> 토큰을 교환해주는 함수
    if (error) {
      // 에러가 발생한 경우 원래 경로로 리다이렉트
      return NextResponse.redirect(`${overrideOrigin}`);
    }
    // next에 해당하는 경로로 리다이렉트
    return NextResponse.redirect(`${overrideOrigin}${next}`);
  }
  return NextResponse.redirect(`${overrideOrigin}`);
}
