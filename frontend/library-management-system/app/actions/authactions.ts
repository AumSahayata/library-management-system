"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import { z } from "zod";
import getSession from "../utils/getSession";

const MAX_AGE = 60 * 60 * 24 * 7;

export const signupaction = async (prevState: any, formdata: FormData) => {
  const authToken = getSession()?.value;
  const signupobject = z.object({
    first_name: z.string({ message: "First Name has to be characters only" }),
    last_name: z.string({ message: "Last Name has to be characters only" }),
    address: z.string({ message: "Address is required" }),
    phone_number: z.string().min(10, { message: "Enter 10 digit number" }),
    username: z.string({ message: "Enter a username" }),
    role: z.number({ message: "required" }),
    email: z.string().email({ message: "Enter valid email" }),
    password: z
      .string()
      .min(8, { message: "Password needs to be longer than length 8" }),
  });

  const validatedFields = signupobject.safeParse({
    first_name: formdata.get("firstname")?.toString(),
    last_name: formdata.get("lastname")?.toString(),
    email: formdata.get("email")?.toString(),
    password: formdata.get("password")?.toString(),
    role: Number(formdata.get("role")),
    username: formdata.get("username")?.toString(),
    address: formdata.get("address")?.toString(),
    phone_number: formdata.get("contact")?.toString(),
  });

  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors };
  }

  console.log(validatedFields.data);

  try {
    await fetch(`${process.env.BASE_URL}/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(validatedFields.data),
    });
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
  redirect("/admin-dashboard");
};

export const loginaction = async (prevState: any, formdata: FormData) => {
  let validatedFields = null;
  let withEmail = false;
  if (formdata.get("email")) {
    withEmail = true;
    console.log("with email");
  }
  if (withEmail) {
    const loginobject = z.object({
      email: z.string().email({ message: "Enter valid email" }),
      password: z
        .string()
        .min(6, { message: "Password needs to be longer than length 6" }),
    });

    validatedFields = loginobject.safeParse({
      email: formdata.get("email")?.toString(),
      password: formdata.get("password")?.toString(),
    });

    if (!validatedFields.success) {
      return { errors: validatedFields.error.flatten().fieldErrors };
    }
  } else {
    const loginobject = z.object({
      username: z.string({ message: "Enter valid username" }),
      password: z
        .string()
        .min(6, { message: "Password needs to be longer than length 6" }),
    });

    validatedFields = loginobject.safeParse({
      username: formdata.get("username")?.toString(),
      password: formdata.get("password")?.toString(),
    });

    if (!validatedFields.success) {
      return { errors: validatedFields.error.flatten().fieldErrors };
    }
  }
  const url = withEmail ? "/api/auth/login/email" : "/api/auth/login";

  let redirectUrl = "";
  try {
    const response = await fetch(`${process.env.BASE_URL}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validatedFields.data),
    });
    const data = await response.json();
    switch (data.role) {
      case 0:
        redirectUrl = "/admin-dashboard";
        break;
      case 1:
        redirectUrl = "/librarian";
        break;
      case 2:
        redirectUrl = "/";
        break;
      default:
        redirectUrl = "/";
        break;
    }

    console.log(data);
    if (data && data?.detail) {
      return { errors: { password: data.detail } };
    }
    cookies().set("session", data?.access_token, {
      httpOnly: true,
      maxAge: MAX_AGE,
    });
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
  console.log("redirect");
  console.log(redirectUrl);
  redirect(redirectUrl);
};

export const logoutaction = () => {
  cookies().delete("session");
  redirect("/login");
};
