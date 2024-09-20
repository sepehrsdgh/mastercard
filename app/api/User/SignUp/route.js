import { NextResponse } from "next/server";
import { API_ROUTES } from "@/utils/routes";
import { axiosInstanceBackend } from "@/lib/axios";

export async function POST(request) {
  // Parse the incoming request body
  const body = await request.json();
  const { name, lastName, email, password } = body;

  try {
    // Make a POST request to the external signup server
    const externalResponse = await axiosInstanceBackend.post(API_ROUTES.signup, {
      name,
      lastName,
      email,
      password,
    });

    // Check if the signup was successful
    if (externalResponse.status === 201) {
        console.log(externalResponse.data)
      const token = externalResponse.data.value.token;

      // Create a response and set the authentication cookie
      const response = NextResponse.json({
        message: "Signup successful",
        status: 201,
      },{status:201});

      response.cookies.set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 30, // Set cookie for long-term (30 days)
        path: "/",
      });

      return response;
    } else {
      // Return the external server's response status code and message
      return NextResponse.json(
        {
          message: externalResponse.data.message || "Signup failed",
        },
        { status: externalResponse.status }
      );
    }
  } catch (error) {
    // Handle different types of errors
    if (error.response) {
      // Errors returned from the external server
      console.log("External server error", error.response?.data);
      return NextResponse.json(
        {
          message: error.response.data.message || "Error from external server",
        },
        { status: error.response.status }
      );
    } else {
      // Handle other types of errors (e.g., network errors)
      console.error("Internal server error:", error.message);
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