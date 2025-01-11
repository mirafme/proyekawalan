"use client";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface PropsType {
  children: ReactNode;
}

const AuthProvide = ({ children }: PropsType) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvide;
