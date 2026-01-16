import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "habblanka@gmail.com";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "habbSuperAdmin10$^@";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/signin",
  },
  secret: process.env.NEXTAUTH_SECRET || process.env.SECRET || "dev-nextauth-secret",
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email || "";
        const password = credentials?.password || "";

        if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
          return {
            id: "admin",
            email: ADMIN_EMAIL,
            name: "HABB Admin",
            role: "admin",
          } as any;
        }

        return null;
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    jwt: async (payload: any) => {
      const { token } = payload;
      const user = payload.user;

      if (user) {
        return {
          ...token,
          id: user.id,
          role: (user as any).role || token.role,
        };
      }
      return token;
    },

    session: async ({ session, token }) => {
      if (session?.user) {
        return {
          ...session,
          user: {
            ...session.user,
            id: token?.id,
            role: (token as any).role,
          },
        };
      }
      return session;
    },
  },
};
