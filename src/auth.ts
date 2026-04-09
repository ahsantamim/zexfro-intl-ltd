import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import bcrypt from "bcryptjs";

// Fallback credentials for development (while database issues are resolved)
const FALLBACK_ADMIN = {
  id: "zexfro-admin-001",
  name: "zexfro-admin",
  email: "admin@zexfro.com",
  role: "admin",
  // Password: zexfro12341234
  passwordHash: "$2b$10$YixZaYV8fNMfzU8Z.HXlrOHnM6K4VzTZJSevJ4n.R5w1uLjAKs6tG",
};

export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,
  secret:
    process.env.AUTH_SECRET || "FpUXYnvm6XWpT4ul6Q2g9Lfhax7GuZtwvfNIKaxM6Ww=",
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          return null;
        }

        try {
          // Check if it's the fallback admin user
          if (
            (credentials.username === FALLBACK_ADMIN.name ||
              credentials.username === FALLBACK_ADMIN.email) &&
            credentials.password === "zexfro12341234"
          ) {
            return {
              id: FALLBACK_ADMIN.id,
              name: FALLBACK_ADMIN.name,
              email: FALLBACK_ADMIN.email,
              role: FALLBACK_ADMIN.role as "user" | "admin",
            };
          }

          // Try to connect to database if available
          let user = null;
          try {
            const { PrismaClient } = await import("@prisma/client");
            const prisma = new PrismaClient({
              errorFormat: "minimal",
            });

            user = await prisma.user.findFirst({
              where: {
                OR: [
                  { name: credentials.username },
                  { email: credentials.username },
                ],
              },
            });

            await prisma.$disconnect();
          } catch (dbError) {
            console.warn(
              "Database connection failed, using fallback only:",
              dbError,
            );
            // Continue with fallback user only
          }

          if (!user) {
            return null;
          }

          // Compare password with hashed password in database
          const passwordMatch = await bcrypt.compare(
            credentials.password as string,
            user.password,
          );

          if (!passwordMatch) {
            return null;
          }

          // Return user object for session
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role as "user" | "admin",
          };
        } catch (error) {
          console.error("Auth error:", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
});

export interface Session {
  userId: string;
  email: string;
  name: string;
  role: "user" | "admin";
}

export async function getSession(): Promise<Session | null> {
  const session = await auth();

  if (!session?.user) {
    return null;
  }

  return {
    userId: session.user.id || "",
    email: session.user.email || "",
    name: session.user.name || "",
    role: (session.user as any).role || "user",
  };
}
