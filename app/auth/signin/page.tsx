import { Metadata } from "next";

import { SigninForm } from "@/components/auth/signin-form";

export const metadata: Metadata = {
  title: "Sign in - NL Development",
  description: "NL Development human resources management system",
};

const SigninPage = () => {
  return <SigninForm />;
};

export default SigninPage;
