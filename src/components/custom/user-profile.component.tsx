import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SignOutButton, useUser } from "@clerk/nextjs";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { CreditCard, LogOut, Settings, User } from "lucide-react";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { toast } from "sonner";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

export function UserProfileComponent() {
  const pathName = usePathname();
  const { isSignedIn, user, isLoaded } = useUser();

  const handleCustomerPortalSession = async () => {
    try {
      const { data } = await axios.post(
        `/api/payments/create-customer-portal-session`,
        {
          userId: user?.id,
          email: user?.emailAddresses?.[0]?.emailAddress,
          return_url: pathName,
        }
      );

      console.log("data", data);
      if (data.url) {
        redirect(data.url);
      } else {
        console.error("Failed to create checkout session");
        toast("Failed to create checkout session");
        return;
      }
    } catch (error) {
      console.error("Error during checkout:", error);
      toast("Error during checkout");
      return;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="w-[2.25rem] h-[2.25rem]">
        <Avatar>
          <AvatarImage src={user?.imageUrl} alt="User Profile" />
          <AvatarFallback></AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href="/user-profile">
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
          </Link>
          <Link href="/dashboard/settings">
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
          </Link>
          <Link
            href=""
            onClick={(e) => {
              e.preventDefault();
              handleCustomerPortalSession();
            }}
          >
            <DropdownMenuItem>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <SignOutButton>
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </SignOutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
