import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const accessToken =
    request.cookies.get('sb-access-token')?.value ||
    request.cookies.get('sb-access-token.0')?.value ||
    request.cookies.get('supabase-auth-token')?.value;

  const isAuthPage =
    pathname === '/login' ||
    pathname === '/signup';

  const isProtectedPage =
    pathname.startsWith('/dashboard');

  // Not logged in -> dashboard blocked
  if (!accessToken && isProtectedPage) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Already logged in -> prevent login/signup again
  if (accessToken && isAuthPage) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/login',
    '/signup',
  ],
};


// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//   const token =
//     request.cookies.get('sb-access-token') ||
//     request.cookies.get('supabase-auth-token');

//   const isAuthPage =
//     request.nextUrl.pathname === '/login' ||
//     request.nextUrl.pathname === '/signup';

//   const isDashboard =
//     request.nextUrl.pathname.startsWith('/dashboard');

//   // If not logged in and trying dashboard
//   if (!token && isDashboard) {
//     return NextResponse.redirect(new URL('/login', request.url));
//   }

//   // If logged in and trying login/signup
//   if (token && isAuthPage) {
//     return NextResponse.redirect(new URL('/dashboard', request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/dashboard/:path*', '/login', '/signup'],
// };