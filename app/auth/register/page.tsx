import { Metadata } from "next";

import RegisterForm from "@/components/auth/register-form";

export const metadata: Metadata = {
  title: "Register - NL Development",
  description: "Create an account to access NL Development Human Resource",
};

const RegisterPage = () => {
  return <RegisterForm />;
};

export default RegisterPage;
