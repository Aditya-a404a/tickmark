import { handleAuth } from '@auth0/nextjs-auth0';
// this is handling the routes to the auth0 api
export const GET = handleAuth();