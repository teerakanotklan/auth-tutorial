import { Button } from "@/components/ui/button";
import { SigninButton } from "@/components/auth/signin-button";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <div className="space-y-6 text-center">
        <h1 className="text-4xl text-primary font-semibold drop-shadow-md">
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
