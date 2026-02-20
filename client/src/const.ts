export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

// Safe login URL generator that validates environment variables first
export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  
  // Return home if OAuth is not configured
  if (!oauthPortalUrl || !appId) {
    console.warn('[getLoginUrl] OAuth not configured, returning home');
    return '/';
  }
  
  try {
    // Build URL manually without new URL() to avoid parsing errors
    const redirectUri = `${window.location.origin}/api/oauth/callback`;
    const state = btoa(redirectUri);
    
    const params = new URLSearchParams();
    params.set("appId", appId);
    params.set("redirectUri", redirectUri);
    params.set("state", state);
    params.set("type", "signIn");
    
    return `${oauthPortalUrl}/app-auth?${params.toString()}`;
  } catch (error) {
    console.error('[getLoginUrl] Error building login URL:', error);
    return '/';
  }
};
