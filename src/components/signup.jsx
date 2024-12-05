import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function Signup() {
  return (
    <div>
      <Card className="p-5">
        <CardHeader>
          <CardTitle>Sign-Up</CardTitle>
          <CardDescription>if you dont' have an account</CardDescription>
        </CardHeader>
        <CardContent>
          <Input type="email" placeholder="please enter your email" />
        </CardContent>
        <CardFooter>
          <Input type="password" placeholder="please enter your password" />
        </CardFooter>
        <Button className=" bg-blue-700 hover:bg-blue-800 text-white font-semibold w-2/4 ml-5 mb-2">
          Sign-Up
        </Button>
      </Card>
    </div>
  );
}

export default Signup;
