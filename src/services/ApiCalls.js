const baseUrl = 'http://localhost';
const port = '3000';

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

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
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
    console.error(`🔴 Request error: ${err}`);
    throw err;
  }
}
