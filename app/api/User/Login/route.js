import { NextResponse } from "next/server";
import { API_ROUTES } from "@/utils/routes";
import { axiosInstanceBackend } from "@/lib/axios";

export async function POST(request) {
  const body = await request.json();
  const { email, password, LongOrShortToken } = body;
  try {
    // Make a POST request to the external authentication server
    const externalResponse = await axiosInstanceBackend.post(API_ROUTES.login, {
      email,
      password,
      LongOrShortToken,
    });

    // Check if the authentication was successful
    if (externalResponse.status === 200) {
      const token = externalResponse.data.value.token;

      const response = NextResponse.json({
        message: "Logged in successfully",
        status: 200,
      },{status:200});

      response.cookies.set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: LongOrShortToken ? 60 * 60 * 24 * 30 *6  :  60 * 60 * 24 * 30, // Long-term if client clicked on remember me
        path: "/",
      });

      return response;
    } else {
      // Return the external server's response status code and message
      return NextResponse.json(
        {
          message: externalResponse.data.message || "Authentication failed",
        },
        { status: externalResponse.status }
      );
    }
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
