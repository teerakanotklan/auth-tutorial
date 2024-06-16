import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen px-4 items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
