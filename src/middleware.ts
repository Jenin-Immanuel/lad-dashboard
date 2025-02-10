import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(["/restricted-domain", "/"]);

const isStudentRoute = createRouteMatcher(["/dashboard", "/courses"]);

const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware(async (auth, req, evt) => {
  if (isPublicRoute(req)) {
    return NextResponse.next();
  }

  // if (isAdminRoute(req)) {
  //   await auth.protect((has) => {

  //     return has({ role: "ADMIN" });
  //   });
  // }

  // if (isStudentRoute(req)) {
  //   await auth.protect((has) => {
  //     return has({ role: "STUDENT" });
  //   });
  // }

  if (req.nextUrl.pathname === "/sign-up") {
    const searchParams = req.nextUrl.searchParams;
    const email = searchParams.get("email");

    if (email && !email.endsWith("@kct.ac.in")) {
      return NextResponse.redirect(new URL("/restricted-domain", req.url));
    }
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
