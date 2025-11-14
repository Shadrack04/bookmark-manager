import { NextRequest, NextResponse } from "next/server";
import { COOKIE_NAME } from "./constants";

export default function middleware(req: NextRequest) {
  const session = req.cookies.get(COOKIE_NAME)?.value;
  const path = req.nextUrl.pathname;
  const isAuthPage = path.startsWith("/auth");
  const isProtectedRoute = path === "/" || path.startsWith("/bookmark");

  if (!session && isProtectedRoute) {
    return NextResponse.redirect(new URL("/auth/sign-in", req.url));
  }

  if (session && isAuthPage) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/bookmark", "/auth"],
};
