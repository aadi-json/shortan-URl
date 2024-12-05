import React from "react";
import { useSearchParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Signup from "@/components/signup";

import Login from "@/components/login";

const Auth = () => {
  const [searchParams] = useSearchParams();

  return (
    <div className="flex justify-center flex-col gap-8 items-center ">
      <h1 className="text-3xl font-semibold">
        {searchParams.get("createNew")
          ? "Hold up! Let's login first.."
          : "Login / Signup"}
      </h1>
      <Tabs
        defaultValue="account"
        className="w-[400px] block justify-center items-center mb-[100px]"
      >
        <TabsList className="grid w-full grid-cols-2 gap-4">
          <TabsTrigger value="account">Signup</TabsTrigger>
          <TabsTrigger value="password">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Signup />
        </TabsContent>
        <TabsContent value="password">
          <Login />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Auth;
