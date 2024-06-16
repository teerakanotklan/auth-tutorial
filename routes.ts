/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */

export const publicRoutes = ["/"];

/**
 * An array of routes that are used for authentication
 * These routes will redirect signed in users to /settings
 * @type {string[]}
 */
export const authRoutes = ["/auth/signin", "/auth/register"];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for api authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after signed in
 * @type {string}
 */
export const DEFAULT_SIGNIN_REDIRECT = "/settings";
