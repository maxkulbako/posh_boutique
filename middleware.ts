import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // Check for session cart cookie
  if (!req.cookies.get('sessionCartId')) {
    // Generate new session cart id cookie
    const sessionCartId = crypto.randomUUID();

    // Clone the req headers
    const newRequestHeaders = new Headers(req.headers);

    //Create the response and add the new headers
    const response = NextResponse.next({
      request: {
        headers: newRequestHeaders,
      },
    });

    // Set newly generated sessionCartId in the response cookies
    response.cookies.set('sessionCartId', sessionCartId);

    return response;
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: '/:path*',
};
