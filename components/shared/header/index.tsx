import { ShoppingCart, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";

const Header = () => {
  return (
    <header className="w-full border-b bg-background">
      <div className="wrapper flex-between">
        <Link href="/" className="flex-start">
          <Image
            src="/images/logo.svg"
            alt={`${APP_NAME} Logo`}
            width={48}
            height={48}
            priority={true}
          />
          <span className="hidden md:block font-bold text-2xl ml-3">
            {APP_NAME}
          </span>
        </Link>
        <div className="space-x-2">
          <Button asChild variant="ghost">
            <Link href="/cart">
              <ShoppingCart className="h-4 w-4" /> Cart
            </Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/login">
              <UserIcon className="h-4 w-4" /> Sign in
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
