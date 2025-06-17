
const baseUrl = 'http://localhost'
const port = '3000';
  function getAccessToken() {
    const accessTokenKey = import.meta.env.VITE_ACCESS_TOKEN_KEY;
    const storedTokens = localStorage.getItem(accessTokenKey);
    const tokens = JSON.parse(storedTokens);
    return tokens.body.access_token
  }

  function getIdToken() {
    const idTokenKey = import.meta.env.VITE_ACCESS_ID_KEY;
    const storedToken = localStorage.getItem(idTokenKey);
    const token = JSON.parse(storedToken);
    return token.id_token;
  }

  export function getUserRolesFromIdToken() {
    const storedToken = getIdToken();
  
    if (!storedToken) return [];
  
    try {
      const payloadBase64Url = storedToken.split('.')[1];
      const payloadBase64 = payloadBase64Url
        .replace(/-/g, '+')
        .replace(/_/g, '/') 
        .padEnd(payloadBase64Url.length + (4 - payloadBase64Url.length % 4) % 4, '=');
  
      const decodedPayload = atob(payloadBase64);
      const payload = JSON.parse(decodedPayload);
  
      const roles = payload["https:/assets.com/roles"] || [];
      const name = payload["name"]      
      const meta_data = payload["https://assets.com/user_metadata"];
      return { roles, name, meta_data };
    } catch (err) {
      console.error("Error parsing ID token:", err);
      return [];
    }
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
      
      headers['Authorization'] = `Bearer ${token || getAccessToken()}`;
      headers['id-token'] = getIdToken();
    }
    //For local testing
    const response = await fetch(`${baseUrl}:${port}${endpoint}`, {
      // const response = await fetch(`${import.meta.env.VITE_BASE_URL}${endpoint}`, {
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
