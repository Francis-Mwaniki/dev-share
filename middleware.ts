import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();


/* publicRoutes: [ '/', '/(api|trpc)(.*)' ], */
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};