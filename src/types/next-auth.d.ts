import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      name?: string | null;
      email?: string | null;
      username?: string;
      role?: string;
    };
  }

  interface User {
    id: number;
    username?: string;
    role?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: number;
    username?: string;
    role?: string;
  }
}
