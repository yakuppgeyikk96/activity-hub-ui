"use server";

import { IApiResponse } from "@/app/_models/common/IApiResponse";
import { BASE_URL } from "../common/constants";
import { IActivity } from "@/app/_models/activities/IActivity";
import { revalidatePath } from "next/cache";

export async function get(): Promise<IApiResponse<IActivity[]>> {
  try {
    const response = await fetch(`${BASE_URL}/activities`);
    const activities: IApiResponse<IActivity[]> = await response.json();

    if (activities && activities.result && activities.result.length === 0) {
      return {
        status: 404,
        success: false,
        message: "No activities found",
        result: null,
      };
    }
    revalidatePath("/activities");

    return activities;
  } catch (error: any) {
    return {
      status: 500,
      success: false,
      message: error.message,
      result: null,
    };
  }
}
