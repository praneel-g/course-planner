// Where the nu-courses API is deployed. Set NEXT_PUBLIC_NU_COURSES_API_URL to
// the new deployment; nu-courses.deno.dev stopped working when Deno Deploy
// Classic shut down (July 2026).
export const NU_COURSES_API_URL = process.env.NEXT_PUBLIC_NU_COURSES_API_URL ?? "https://nu-courses.deno.dev";
