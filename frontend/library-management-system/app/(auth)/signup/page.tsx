"use client";

import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { useFormStatus, useFormState } from "react-dom";
import { Loader } from "lucide-react";
import { useState } from "react";

import { signupaction } from "@/app/actions/authactions";

const initialState = {
  errors: {},
};

const Submitbutton = () => {
  const { pending } = useFormStatus();
  return (
    <>
      <Button type="submit" className="w-full" disabled={pending}>
        {pending && <Loader className="mr-2 h-4 w-4 animate-spin" />}
        Create Account
      </Button>
    </>
  );
};

const Signup = () => {
  const [role, setRole] = useState(2);

  const [state, formAction] = useFormState(signupaction, initialState);

  return (
    <div className="flex items-center justify-center min-h-[100dvh] bg-background">
      <Card className="w-full max-w-md p-6 space-y-4 border-none shadow-lg">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Create New Account</h1>
          <p className="text-muted-foreground">(ADMIN ONLY)</p>
        </div>
        <form action={formAction} className="space-y-4">
          <input type="hidden" value={role} name="role" />
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstname"
                placeholder="John"
                required
              />
              {state?.errors?.firstname && (
                <div className="text-red-500 text-xs mt-1">
                  {state?.errors?.firstname}
                </div>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" name="lastname" placeholder="Doe" required />
              {state?.errors?.lastname && (
                <div className="text-red-500 text-xs mt-1">
                  {state?.errors?.lastname}
                </div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="username"
                name="username"
                placeholder="johndoe004"
                required
              />
              {state?.errors?.username && (
                <div className="text-red-500 text-xs mt-1">
                  {state?.errors?.username}
                </div>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Contact</Label>
              <Input
                id="contact"
                type="contact"
                name="contact"
                placeholder="+91 9879527456"
                required
              />
              {state?.errors?.username && (
                <div className="text-red-500 text-xs mt-1">
                  {state?.errors?.username}
                </div>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Textarea
              id="address"
              name="address"
              placeholder="2732 Jackson Street, New Kaden, North Carolina - 380015, India"
              required
            />
            {state?.errors?.address && (
              <div className="text-red-500 text-xs mt-1">
                {state?.errors?.address}
              </div>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="john@example.com"
              required
            />
            {state?.errors?.email && (
              <div className="text-red-500 text-xs mt-1">
                {state?.errors?.email}
              </div>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" required />
            {state?.errors?.password && (
              <div className="text-red-500 text-xs mt-1">
                {state?.errors?.password}
              </div>
            )}
          </div>
          <RadioGroup
            defaultValue={role.toString()}
            onValueChange={(value) => setRole(Number(value))}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="2" id="user" />
              <Label htmlFor="option-one">User</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="1" id="lib" />
              <Label htmlFor="option-two">Librarian</Label>
            </div>
          </RadioGroup>
          <Submitbutton />
        </form>
      </Card>
    </div>
  );
};

export default Signup;
