import { Button } from "@/components/ui/button";
import UserButton from "@/features/auth/components/user-button";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-rose-500">
        Home
      </h1>

      <UserButton />

      <Button>
        Click Me
      </Button>
    </div>
  );
}