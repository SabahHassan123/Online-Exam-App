import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export default async function decodeToken() {
  const isCookieSecured = process.env.NEXTAUTH_URL?.startsWith("https://") ?? !!process.env.VERCEL;
  const cookieName = isCookieSecured ? "__Secure-next-auth.session-token" : "next-auth.session-token";
  const tokenCookie = cookies().get(cookieName)?.value;

  try {
    const JWT = await decode({
      token: tokenCookie,
      secret: process.env.NEXTAUTH_SECRET!,
    });

    return JWT;
  } catch (error) {
    void error; // Silence un-used error warning
    return null;
  }
}
