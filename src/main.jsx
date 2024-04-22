import React from 'react'

import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Auth0Provider } from '@auth0/auth0-react';

import Home from "./routes/Home.jsx";
import ErrorPage from "./error-page";
import './index.css'
import Auth from './routes/Auth.jsx';
import Blog from './routes/Blog.jsx';
import Filter from './routes/Filter.jsx';
import Signup from './routes/Signup.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/blog",
    element: <Blog />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/filter",
    element: <Filter />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth",
    element: <Auth />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-56eofp2t8ujgwtap.us.auth0.com"
    clientId="xS8HISOik8QFx4zNDqdp7cmwIBkjzFdI"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >

   <RouterProvider router={router} />
  </  Auth0Provider>
  </React.StrictMode>,
)
