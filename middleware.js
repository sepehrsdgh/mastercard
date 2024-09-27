import { NextResponse } from "next/server";

// Middleware logic to check for token in cookies and authorize requests
function handleRequestWithCookieCheck(request) {
  const cookies = request.cookies;
  // Retrieve the 'token' from the cookies
  const token = cookies.get("token")?.value;

  // If no token is found, return a 401 Unauthorized response
  if (!token) {
    return NextResponse.json(
      { message: "Unauthorized request" },
      { status: 401 }
    );
  }

  // If token exists, modify the request by adding the Authorization header
  const modifiedHeaders = new Headers(request.headers);
  modifiedHeaders.set("Authorization", token);

  // Continue with the modified request (including the Authorization header)
  return NextResponse.next({
    request: {
      headers: modifiedHeaders,
    },
  });
}

export function middleware(request) {
  const url = request.nextUrl.pathname;
  // Apply the middleware for specific routes
  if (url.startsWith("/api/User/") || url.startsWith("/api/Transaction/")) {
    if (url.startsWith("/api/User/Login") || url.startsWith("/api/User/SignUp"))
      return NextResponse.next();
    return handleRequestWithCookieCheck(request);
  }

  // For other routes, continue without any modification
  return NextResponse.next();
}

// Apply middleware to specific API paths
export const config = {
  matcher: ["/api/User/:path*", "/api/Transaction/:path*"],
};
