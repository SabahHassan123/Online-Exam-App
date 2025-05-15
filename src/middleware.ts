import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const authPages = ["/signin", "/signup", "/forgot-password", "/set-new-password", "/verify-code"];

export default async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  const pathname = req.nextUrl.pathname;
  const origin = req.nextUrl.origin;

  // User is attempting to access a protected route
  if (!authPages.includes(pathname)) {
    // Proceed if logged in
    if (token) return NextResponse.next();

    // Redirect to login page
    const redirectUrl = new URL("/signin", origin);
    return NextResponse.redirect(redirectUrl);
  }

  // User is accessing an auth page, proceed if not logged in
  if (!token) return NextResponse.next();

  // Otherwise they are logged in, user should be redirected to dashboard
  const redirectUrl = new URL("/dashboard", origin);
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
