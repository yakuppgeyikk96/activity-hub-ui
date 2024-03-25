"use server";

import { z } from "zod";
import { BASE_URL } from "../common/constants";
import { FormState } from "../common/types";
import setToken from "../common/set-token";

const LoginFieldSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email({
      message: "Email is not valid",
    }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});

export async function login(
  prevState: FormState<{
    email: string;
    password: string;
  }>,
  formData: FormData
): Promise<
  FormState<{
    email: string;
    password: string;
  }>
> {
  const validatedFields = LoginFieldSchema.safeParse({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });

  if (!validatedFields.success) {
    return {
      clientStatus: {
        errors: validatedFields.error.flatten().fieldErrors,
      },
    };
  }

  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      body: JSON.stringify({
        email: validatedFields.data.email,
        password: validatedFields.data.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();

    if (responseData.success) {
      setToken(responseData.result);
    }

    return {
      serverStatus: {
        status: responseData.status,
        message: responseData.message,
        result: responseData.result,
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
