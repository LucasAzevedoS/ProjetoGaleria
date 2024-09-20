import NextAuth, {
  AuthError,
  CredentialsSignin,
  DefaultSession,
  NextAuthConfig,
  User,
} from "next-auth";
import Credentials from "next-auth/providers/credentials";

declare module "@auth/core/types" {
  interface Session {
    user: {
      cod: string;
      name: string;
      perfil: string;
    } & DefaultSession["user"];
  }

  interface User {
    cod: string;
    perfil: string;
  }
}

declare module "@auth/core/jwt" {
  interface JWT {
    identifier: string;
    cod: string;
    email: string;
    name: string;
    perfil: string;
  }
}

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl, url } }) {
      const isLoggedIn = !!auth?.user;
      const isOnLoginPage = url.includes("login");
      const isOnRedefinirSenha = nextUrl.href.includes("redefinir");
      const isOnRootUrl = nextUrl.pathname.endsWith("/");
      if (isOnRedefinirSenha) {
        return true;
      } else if (isLoggedIn) {
        if (isOnLoginPage || isOnRootUrl) {
          return Response.redirect(new URL("/home", nextUrl));
        }
        return true;
        // Redirect unauthenticated users to login page
      } else {
        return false;
      }
    },
    async jwt({ token, user }) {
      /* Step 1: update the token based on the user object */
      if (user) {
        token.perfil = user.perfil;
        token.cod = user.cod;
      }
      return token;
    },
    session({ session, token }) {
      /* Step 2: update the session.user based on the token object */
      if (token && session.user) {
        session.user.perfil = token.perfil;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.cod = token.cod;
      }
      return session;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const user = {
          cod: "1",
          name: "J Smith",
          email: "jsmith@example.com",
          perfil: "fotografo",
        };

        if (!user) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          throw new Error("User not found.");
        }

        // return user object with their profile data
        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 1200,
  },
  logger: {
    error(code, ...message) {
      console.error(code, message);
    },
    warn(code, ...message) {
      console.warn(code, message);
    },
    debug(code, ...message) {
      console.debug(code, message);
    },
  },
  secret: "PIK4Cipg/L0Ul/WHHqLhXl9IreNzckcIzRVNQ4r2GyI=",
});
