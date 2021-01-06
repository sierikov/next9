const { parsed } = require("dotenv").config();
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { env: parsed }) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  return {
    distDir: 'dist',
    env: {
      REDIRECT_URI: isDev
        ? "http://localhost:3000/api/callback"
        : "https://text.com/api/callback",
      POST_LOGOUT_REDIRECT_URI: isDev
        ? "http://localhost:3000/secret"
        : "http://text.com/secret",
      AUTH0_SCOPE: "openid profile",
      SERVER_URI: isDev
        ? "http://localhost:3000/"
        : "http://text.com/"
    }
  }
}
