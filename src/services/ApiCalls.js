const baseUrl = 'http://localhost';
const port = '3000';

  function getAccessToken() {
    const accessTokenKey = '@@auth0spajs@@::uezGiGVAcfwgJZllm1Xd2fTq3cOO0RTA::https://dev-r3vhddtfi6bcxq12.us.auth0.com/api/v2/::openid profile email offline_access read:users';
    const storedTokens = localStorage.getItem(accessTokenKey);
    const tokens = JSON.parse(storedTokens);
    return tokens.body.access_token
  }

function getRefreshToken() {
  const refreshTokenKey = '@@auth0spajs@@::uezGiGVAcfwgJZllm1Xd2fTq3cOO0RTA::https://dev-r3vhddtfi6bcxq12.us.auth0.com/api/v2/::openid profile email offline_access read:users';
  const storedTokens = localStorage.getItem(refreshTokenKey);
  const tokens = JSON.parse(storedTokens);
  return tokens.body.refresh_token;
}

function storeTokens({ access_token, refresh_token }) {
  if (access_token) localStorage.setItem('access_token', access_token);
  if (refresh_token) localStorage.setItem('refresh_token', refresh_token);
}

export async function apiRequest({
  endpoint,
  method = 'GET',
  token = null,
  body = null,
  customHeaders = {},
}) {
  try {
    const headers = {
      'Content-Type': 'application/json',
      ...customHeaders,
    };

    if (token || getAccessToken()) {
      console.log(token);
      
      headers['Authorization'] = `Bearer ${token || getAccessToken()}`;
    }
    const response = await fetch(`${baseUrl}:${port}${endpoint}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : null,
      cache: 'no-cache',
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return await response.json();
  } catch (err) {
    console.error(`🔴 Request error: ${err.message}`);
    throw err;
  }
}
