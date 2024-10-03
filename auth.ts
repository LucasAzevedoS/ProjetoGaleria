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
      id_usuario: number;
      name: string;
      usuario: string;
      nm_grupo: string;
      id_grupo: number;
      // qtfoto: number;
    } & DefaultSession["user"];
  }

  interface User {
    id_usuario: number;
    id_grupo: number;
    nm_grupo: string;
    usuario: string;
    // qtfoto: number;
  }
}

declare module "@auth/core/jwt" {
  interface JWT {
    identifier: string;
    id_usuario: number;
    email: string;
    name: string;
    usuario: string;
    nm_grupo: string;
    id_grupo: number;
    // qtfoto: number;
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
        token.nm_grupo = user.nm_grupo;
        token.id_usuario = user.id_usuario;
        token.usuario = user.usuario;
        token.id_grupo = user.id_grupo;
        // token.qtfoto = user.qtfoto;
      }
      return token;
    },
    session({ session, token }) {
      /* Step 2: update the session.user based on the token object */
      if (token && session.user) {
        session.user.nm_grupo = token.nm_grupo;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.id_usuario = token.id_usuario;
        session.user.usuario = token.usuario;
        session.user.id_grupo = token.id_grupo;

        // session.user.qtfoto = token.qtfoto;
      }
      return session;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
const axios = require("axios");
export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username", type: "string" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        // --- começo do login via axios ---
        // try {
        //   const res = await axios.post(
        //     "https://localhost:7124/api/User/usuario-in",
        //     {
        //       username: credentials.username,
        //       password: credentials.password,
        //     },
        //     {
        //       httpsAgent: new (require("https").Agent)({
        //         rejectUnauthorized: false,
        //       }),
        //     }
        //   );
        //   console.log(res);

        //   const user = res.data;

        //   if (res.status === 200 && user) {
        //     return user; // Login bem-sucedido
        //   }
        //   throw new Error("Credenciais inválidas");
        // } catch (error) {
        //   console.error("Erro ao autenticar:", error);
        //   throw new Error("Erro na autenticação");
        // }

        // --- fim da autenticação via axios ----

        // --- Inicio da autenticação via fetch ----
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
        const res = await fetch("https://localhost:7124/api/User/usuario-in", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: credentials.username,
            password: credentials.password,
          }),
        });
        console.log(res);
        const user = await res.json();
        console.log(user);

        if (!user) {
          throw new Error("User not found.");
        }
        return user;
        // --- fim da autenticação via axios ----
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
  secret: "ypCeNemhoOahJOq95VUaHDXdl+TZhDSnoWmh+fMuqd0=",
});
