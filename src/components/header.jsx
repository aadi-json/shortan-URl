import React from "react";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LinkIcon, LogOutIcon } from "lucide-react";

function Header() {
  const navigate = useNavigate();
  const user = true;
  return (
    <main className="flex justify-between items-center p-3 sm:p-5 lg:p-6">
      <div className="flex items-center space-x-4">
        <Link to="/">
          <img
            src="/logo.png"
            className="h-[70px] sm:h-[80px] lg:h-[90px]"
            alt="Logo"
          />
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        {/* For smaller screens, stack the login button vertically */}
        {!user ? (
          <Button
            onClick={() => navigate("/auth")}
            className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded md:hidden"
          >
            Login
          </Button>
        ) : (
          <div className="cursor-pointer">
            <DropdownMenu>
              <DropdownMenuTrigger className="cursor-pointer rounded-full overflow-hidden">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    className="h-[30px] sm:h-[40px] lg:h-[50px]"
                  />
                  <AvatarFallback>Aditya Gawande</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-2">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>
                  <LinkIcon className="text-green-500" />
                  <span>My Links</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOutIcon className="text-red-600" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}

        {/* Show the login button for larger screens */}
        {!user && (
          <Button
            onClick={() => navigate("/auth")}
            className="hidden md:block px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded"
          >
            Login
          </Button>
        )}
      </div>
    </main>
  );
}

export default Header;
