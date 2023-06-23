import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';
import { UserProvider } from './contexts/user_context.jsx';
import { ProductsProvider } from './contexts/products_context.jsx'
import { FilterProductsProvider } from './contexts/filter_products_context.jsx'
import { CartProvider } from './contexts/cart_context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-j2w0wi8c8r4r8ppm.us.auth0.com"
    clientId="lZrZeXCsu2BEqcOeinlMaSBez02JvIH7"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    cacheLocation='localstorage'
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProductsProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
  </React.StrictMode>,
)
