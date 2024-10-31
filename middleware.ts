import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)", "/"]);

async function protect(auth) {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }
}

export default clerkMiddleware((auth, req) => {
  if (!isPublicRoute(req)) {
    return protect(auth).catch(
      () => new Response("Unauthorized", { status: 401 })
    );
  }
});
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
