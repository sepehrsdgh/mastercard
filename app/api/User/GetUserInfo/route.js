import { NextResponse } from "next/server";
import { API_ROUTES } from "@/utils/routes";
import { axiosInstanceBackend } from "@/lib/axios";

export async function GET(request) {
  try {
    // Retrieve the Authorization header added by the middleware.
    const token = request.headers.get("Authorization");

    // Make the external request with the token in the Authorization header
    const response = await axiosInstanceBackend.get(API_ROUTES.getUserInfo, {
      headers: {
        Authorization: token, // Token already passed by middleware
      },
    });

    // Return the response data from the external server
    return NextResponse.json(response.data);
  } catch (error) {
    // Handle different types of errors
    if (error.response) {
      // Errors returned from the external server
      return NextResponse.json(
        {
          message: error.response.data.message || "Error from external server",
        },
        { status: error.response.status }
      );
    } else {
      // Handle other types of errors (e.g., network errors)
      return NextResponse.json(
        {
          message: "Internal Server Error",
          error: error.message,
        },
        { status: 500 }
      );
    }
  }
}
