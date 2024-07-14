import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import getSession from "./app/utils/getSession";
import getuserdetails from "./app/utils/getUserDetails";

const isProtected = (path: string) => {
  if (["/login", "/"].includes(path) || path.startsWith("/search")) {
    return false;
  }
  return true;
};

export async function middleware(request: NextRequest) {
  const sessionData = getSession();
  const userdetails = await getuserdetails();

  if (userdetails?.role === 0 && ['/'].includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/admin-dashboard", request.url));
  }
  if (userdetails?.role === 1 && ['/signup','/'].includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/admin-dashboard", request.url));
  }
  if (isProtected(request.nextUrl.pathname) && !userdetails) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (["/login"].includes(request.nextUrl.pathname) && userdetails) {
    return NextResponse.redirect(new URL("/", request.url));
  }

//   if (
//     request.nextUrl.pathname === "/" &&
//     userdetails &&
//     userdetails.role === 0
//   ) {
//     return NextResponse.redirect(new URL("/admin-dashboard", request.url));
//   }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
