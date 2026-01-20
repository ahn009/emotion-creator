
// Middleware function to handle authentication and other request logic
export default function middleware(request: any) {
  // Add your middleware logic here
  // For now, just pass through the request
  return undefined;
}

export const config = {
  matcher: ['/dashboard/:path*', '/create/:path*'],
};
