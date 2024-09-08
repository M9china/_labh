import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { AdapterUser } from "next-auth/adapters";
import { db } from "./database";

export declare type Roles="ADMIN"|"USER";
 
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: Roles;
      gender: "MALE" | "FEMALE";
    } & AdapterUser;
  }
}
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google
  ],
  theme: {
    logo: "/labh (18).jpeg",
  },
  callbacks: {
    redirect: () => {
      return "/collection";
    },
    session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.role = token.role as any;
        session.user.gender = token.gender as any;
      }
      return session;
    },
    jwt({ token, user, session }) {
      if (user) {
        token.id = user.id;
        token.role = "USER";
        session = token;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
  adapter: PrismaAdapter(db) as any,
}) as any;
