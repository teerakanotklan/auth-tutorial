import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SigninButton } from "@/components/auth/signin-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-4xl text-primary font-semibold drop-shadow-md",
            font.className
          )}
        >
          Authentication
        </h1>
        <p className="text-lg text-primary">Simple Authentication</p>
        <div>
          <SigninButton>
            <Button variant="outline" size="lg">
              Sign in
            </Button>
          </SigninButton>
        </div>
      </div>
    </main>
  );
}
