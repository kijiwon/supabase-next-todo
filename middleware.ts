import { NextRequest, NextResponse } from "next/server";

const COOKIE_COUNTER = "cookie-counter";

export function middleware(requset: NextRequest) {
  const response = NextResponse.next();
  if (requset.cookies.get(COOKIE_COUNTER)?.value) {
    const prev = requset.cookies.get(COOKIE_COUNTER)?.value;
    // value는 문자열이므로 숫자로 변환 후 다시 문자열로 전달
    response.cookies.set(COOKIE_COUNTER, `${Number(prev) + 1}`);
  } else {
    // cookie-counter가 없는 경우 생성. 초기값은 1
    response.cookies.set(COOKIE_COUNTER, "1");
  }
  return response;
}

export const config = {
  matcher: ["/", "/todo-no-rls", "/api/:path*"], // path* -> 모든 경로
};
