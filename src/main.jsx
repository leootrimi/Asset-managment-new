import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain='dev-r3vhddtfi6bcxq12.us.auth0.com'
    clientId='uezGiGVAcfwgJZllm1Xd2fTq3cOO0RTA'
    authorizationParams={{
      audience: `https://dev-r3vhddtfi6bcxq12.us.auth0.com/api/v2/`,
      redirect_uri: window.location.origin
    }}
  > 
    <App />
    </Auth0Provider>
)
