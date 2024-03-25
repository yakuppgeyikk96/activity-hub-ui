"use server";

import { cookies } from "next/headers";

export default async function setToken(token: string) {
  cookies().set("token", token, {
    path: "/",
    domain: "localhost",
    maxAge: 60 * 60,
    httpOnly: true,
    secure: false,
  });
}
