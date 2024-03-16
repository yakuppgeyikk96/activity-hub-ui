"use server";

import { z } from "zod";
import { BASE_URL } from "../common/constants";
import { FormState } from "../common/types";
import { cookies } from "next/headers";

const LoginFieldSchema = z
  .object({
    email: z
      .string()
      .min(1, {
        message: "Email is required",
      })
      .email({
        message: "Email is not valid",
      }),
    password1: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." }),
    password2: z
      .string()
      .min(1, { message: "Password confirmation is required." }),
  })
  .refine((data) => data.password1 === data.password2, {
    message: "Passwords do not match.",
    path: ["password2"],
  });

export async function signup(
  prevState: FormState<{
    email: string;
    password1: string;
    password2: string;
  }>,
  formData: FormData
): Promise<
  FormState<{
    email: string;
    password1: string;
    password2: string;
  }>
> {
  const validatedFields = LoginFieldSchema.safeParse({
    email: formData.get("email") as string,
    password1: formData.get("password1") as string,
    password2: formData.get("password2") as string,
  });

  if (!validatedFields.success) {
    return {
      clientStatus: {
        errors: validatedFields.error.flatten().fieldErrors,
      },
    };
  }

  try {
    const response = await fetch(`${BASE_URL}/users/signup`, {
      method: "POST",
      body: JSON.stringify({
        email: validatedFields.data.email,
        password: validatedFields.data.password1,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();

    console.log("------------ 84 -----------");
    console.log(responseData.result);
    cookies().set("token", responseData.result, {
      path: "/",
      domain: "localhost",
      maxAge: 60 * 60,
      httpOnly: true,
      secure: false,
    });

    return {
      serverStatus: {
        status: 200,
        message: "Signup successful",
        result: null,
      },
    };
  } catch (error) {
    return {
      serverStatus: {
        status: 500,
        message: "An error occurred. Please try again.",
        result: null,
      },
    };
  }
}
