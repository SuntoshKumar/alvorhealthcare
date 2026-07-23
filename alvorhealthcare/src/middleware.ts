import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  response.headers.set("X-DNS-Prefetch-Control", "on");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "origin-when-cross-origin");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");

  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const csp = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com https://www.googletagmanager.com`,
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "img-src 'self' data: https:",
    "font-src 'self' https://fonts.gstatic.com",
    "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com",
    "frame-src 'self' https://www.google.com https://www.youtube.com",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests",
  ].join("; ");

  response.headers.set("Content-Security-Policy", csp);

  if (request.nextUrl.pathname.startsWith("/api/")) {
    response.headers.set("Access-Control-Allow-Origin", "https://alvorhealthcare.com");
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  }

  return response;
}

export const config = {
  matcher: [
    "/:path*",
  ],
};