import { NextResponse } from "next/server";
import { API_ROUTES } from "@/utils/routes";
import { axiosInstanceBackend } from "@/lib/axios";

export async function PUT(request) {
  try {
    const body = await request.json();
    const cookies = request.cookies;

    // Retrieve the 'token' from the cookies
    const token = cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json(
        { message: "Unauthorized request" },
        { status: 401 }
      );
    }
    const { name, lastName, email } = body;
    // Set the token in the Authorization header for the external request
    const response = await axiosInstanceBackend.put(
      API_ROUTES.UpdateUserInfo,
      { name, lastName, email },
      {
        headers: {
          Authorization: token, // Pass token in Authorization header
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
