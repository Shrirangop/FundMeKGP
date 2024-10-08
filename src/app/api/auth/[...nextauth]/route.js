import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect  from "../../../lib/db";
import UserModel from "@/app/models/UserModel";
import bcrypt from "bcrypt";



export const authOptions = {
    providers: [
        CredentialsProvider({
          name: "credentials",
          credentials: {},

          async authorize(credentials) {
            const { email, password } = credentials;
    
            try {
              await dbConnect();
              const user = await UserModel.findOne({ email });
    
              if (!user) {
                return null;
              }
    
              const passwordsMatch = await bcrypt.compare(password, user.password);
    
              if (!passwordsMatch) {
                return null;
              }
    
              return user;
            } catch (error) {
              console.log("Error: ", error);
            }
          },
        }),
      ],
      session: {
        strategy: "jwt",
      },
      secret: process.env.NEXTAUTH_SECRET,
      pages: {
        signIn: "/signin",
      },
    };
    
    const handler = NextAuth(authOptions);
    
    export { handler as GET, handler as POST };
