"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export const Social = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="mb-6">or</div>
      <div className="flex items-center w-full gap-x-2">
        <Button
          size="lg"
          className="w-full"
          variant="outline"
          onClick={() => {}}
        >
          <FcGoogle className="h-5 w-5" />
        </Button>
        <Button
          size="lg"
          className="w-full"
          variant="outline"
          onClick={() => {}}
        >
          <FaGithub className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};
