import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { Auth0Provider } from '@auth0/auth0-react'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Auth0Provider
    domain={import.meta.env.VITE_DOMAIN_URL}
    clientId={import.meta.env.VITE_CLIENT_ID}
    authorizationParams={{
      audience: import.meta.env.VITE_AUDIENCE,
      redirect_uri: window.location.origin
    }}
  > 
    <App />
    </Auth0Provider>
    </StrictMode>
)
