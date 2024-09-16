import NextAuth, {
  AuthError,
  CredentialsSignin,
  DefaultSession,
  NextAuthConfig,
  User,
} from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = {
          id: "1",
          name: "J Smith",
          email: "jsmith@example.com",
          perfil: "fotografo",
          credentials: { id: 1, perfil: "fotografo" },
          galeria: 1,
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
});
