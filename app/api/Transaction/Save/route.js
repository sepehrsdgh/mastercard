import { NextResponse } from "next/server";
import { API_ROUTES } from "@/utils/routes";
import { axiosInstanceBackend } from "@/lib/axios";

export async function POST(request) {
  try {
    const body = await request.json();
    const token = request.headers.get("Authorization");

    const { destinationUserId, amount, currency, type, description, link } = body;

    // Make the external POST request with the body and Authorization header
    const response = await axiosInstanceBackend.post(
      API_ROUTES.saveTransaction, // Replace with your actual endpoint
      {
        destinationUserId,
        amount,
        currency,
        type,
        description,
        link,
      },
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
