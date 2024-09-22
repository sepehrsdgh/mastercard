import { NextResponse } from "next/server";
import { API_ROUTES } from "@/utils/routes";
import { axiosInstanceBackend } from "@/lib/axios";

export async function GET(request) {
  try {
    console.log("sdsdasdfasdfasdfsdf");
    const { searchParams } = new URL(request.url);
    const q = decodeURIComponent(searchParams.get("q"));
    console.log("parammmmmmmmmmmmm", q);
    // Make a GET request to the external authentication server
    const externalResponse = await axiosInstanceBackend.get(
      `${API_ROUTES.changePassword}/${q}`
    );
    console.log("sdsdsdssdsd", externalResponse.status);

    if (externalResponse.status === 200) {
      const response = NextResponse.json(
        {
          message: "Password changed successfully",
          status: 200,
        },
        { status: 200 }
      );

      return response;
    } else {
      // Return the external server's response status code and message
      return NextResponse.json(
        {
          message: externalResponse.data.message || "Operation failed",
        },
        { status: externalResponse.status }
      );
    }
  } catch (error) {
    // Handle different types of errors
    if (error.response) {
      console.log("external server error", error.response?.data);
      // Errors returned from the external server
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
