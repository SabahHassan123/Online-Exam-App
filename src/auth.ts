import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { JSON_HEADER } from "./lib/constants/api.contants";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/signin",
  },
  providers: [
    Credentials({
      // name is optional when using more than one backend endpoints
      name: "Credentials",

      // credentials that would be sent in the login form
      credentials: {
        email: {},
        password: {},
      },

      // the function that works when logging in, and we pass credentials that we have created above and this function must contains a return statement or throwing an error
      authorize: async (credentials) => {
        const response = await fetch(`${process.env.API}/auth/signin`, {
          method: "POST",
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
          headers: { ...JSON_HEADER },
        });

        const payload: APIResponse<AuthResponse> = await response.json();

        if ("code" in payload) {
          throw new Error(payload.message);
        }

        return {
          //id is required from nextauth
          id: payload.user._id,
          token: payload.token,
          user: payload.user,
        };
      },
    }),
  ],
  callbacks: {
    //after returning the payload, data should be encoded. And this is the what jwt does. token and user is the most important params.
    jwt: ({ token, user }) => {
      if (user) {
        token.token = user.token;
        token.user = user.user;
      }

      // And as the token will be encoded and be in the cookie so we return it.
      return token;
    },

    // *after encoding the payload using jwt, you may need some data from this payload so session function decode these data.
    // But you shouldn't decode sensitive data unless what is the purpose of Next.js!!
    session: ({ session, token }) => {
      session.user = token.user;
      // session.token = token.token;
      // You should not save the token in the session, that will expose it in the client-side if useSession / getSession was used.

      return session;
    },
  },
};
