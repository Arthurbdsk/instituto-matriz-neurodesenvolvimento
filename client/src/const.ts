export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

// This is a public website, no OAuth login needed
export const getLoginUrl = () => {
  return '/';
};
