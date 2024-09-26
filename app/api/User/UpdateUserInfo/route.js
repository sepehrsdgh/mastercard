import { NextResponse } from "next/server";
import { API_ROUTES } from "@/utils/routes";
import { axiosInstanceBackend } from "@/lib/axios";

export async function PUT(request) {
  try {
    // Parse the request body
    const body = await request.json();
    const token = request.headers.get("Authorization");
    const { name, lastName, email } = body;

    // Make the external request with the token in the Authorization header
    const response = await axiosInstanceBackend.put(
      API_ROUTES.UpdateUserInfo,
      { name, lastName, email },
      {
        headers: {
          Authorization: token, // Token passed in the Authorization header
        },
      }
    );

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
