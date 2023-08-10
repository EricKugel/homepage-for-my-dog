import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials.password) {
          throw new Error("Please enter a password");
        }

        const passwordMatch = await compare(
          credentials.password,
          process.env.JOURNAL_SECRET
        );

        if (!passwordMatch) {
          throw new Error("Incorrect Password");
        }

        return { authorized: true };
      },
    }),
  ],
};
const handler = NextAuth(authOptions);
export default handler;
