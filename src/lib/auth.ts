import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const auth = betterAuth({
  url: process.env.BETTER_AUTH_URL, // Used to build callback URLs & cookies
  secret: process.env.BETTER_AUTH_SECRET,
  // basePath: "/api/auth",
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  // Enable simple email+password to start. (We'll add OAuth/Passkeys later.)
  emailAndPassword: { enabled: true },
  trustedOrigins: ['http://localhost:3000'],
});