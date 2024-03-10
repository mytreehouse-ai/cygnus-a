import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/listings",
    "/listings/(.*)",
    "/valuation",
    "/contact",
    "/ai/chat",
  ],
  // ignoredRoutes: ["/", "/listings/(.*)", "/valuation", "/contact"],
});

export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/auth-middleware
  // for more information about configuring your Middleware
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
