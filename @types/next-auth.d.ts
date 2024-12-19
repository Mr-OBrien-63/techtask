// types/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id: string; // Customize user fields if needed
    email: string;
  }

  interface Session {
    user: User;
  }

  interface JWT {
    id: string;
  }
}
