"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { Loader } from "lucide-react";
import { useSearchParams } from "next/navigation";

// import { loginaction } from "@/app/actions/authactions";

import Link from "next/link";

import { useFormStatus, useFormState } from "react-dom";

const initialState = {
  errors: {},
};

const Submitbutton = () => {
  const { pending } = useFormStatus();
  return (
    <>
      <Button type="submit" className="w-full" disabled={pending}>
        {pending && <Loader className="mr-2 h-4 w-4 animate-spin" />}
        Sign in
      </Button>
    </>
  );
};

const LoginPage = () => {
  const params = useSearchParams();
  // const [state,formAction] = useFormState(loginaction,initialState)
  const state = { hello: "hi" };
  return (
    <>
      <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md p-6 space-y-4 border-none shadow-lg">
          <div className="mx-auto max-w-md w-full space-y-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight text-foreground">
                Welcome Back
              </h1>
              <p className="mt-2 text-muted-foreground">
                Enter your username and password to access your account.
              </p>
            </div>
            {/* <form action={formAction} className="space-y-4"> */}
            {!(params.get("username") === "true") && (
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full"
                  required
                />
                {state?.errors?.email && (
                  <div className="text-red-500 text-xs mt-1">
                    {state?.errors?.email}
                  </div>
                )}
              </div>
            )}
            {params.get("username") === "true" && (
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  name="username"
                  type="username"
                  placeholder="johndoe004"
                  className="w-full"
                  required
                />
                {state?.errors?.username && (
                  <div className="text-red-500 text-xs mt-1">
                    {state?.errors?.username}
                  </div>
                )}
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                className="w-full"
                required
              />
              {state?.errors?.password && (
                <div className="text-red-500 text-xs mt-1">
                  {state?.errors?.password}
                </div>
              )}
            </div>
            <Submitbutton />
            {/* </form> */}
            <div className="text-center text-sm text-muted-foreground">
              <Link
                href={
                  params.get("username") === "true"
                    ? "/login"
                    : "/login?username=true"
                }
                className="underline underline-offset-4"
                prefetch={false}
              >
                {params.get("username") === "true"
                  ? "Login using email"
                  : "Login using username"}
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default LoginPage;
