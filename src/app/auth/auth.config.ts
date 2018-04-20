import { ENV } from './../core/env.config';

interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
  NAMESPACE: string;
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: '1aS7JUXvd1ewR1HrFHhYtzS4Burw4Fmb',
  CLIENT_DOMAIN: 'alabaojo.eu.auth0.com', // e.g., you.auth0.com
  // AUDIENCE: 'http://localhost.com:8083/api/',  // e.g., http://localhost:8083/api/
  AUDIENCE: 'https://alabaojo.eu.auth0.com/api/v2/',
  REDIRECT: `${ENV.BASE_URI}/callback`,
  SCOPE: 'openid profile',
  NAMESPACE: 'http://myapp.com/roles',
};
