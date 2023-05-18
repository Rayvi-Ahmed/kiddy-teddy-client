import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {

  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routers/Router.jsx';
import AuthProvider from './AuthProvider/AuthProvider';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>,
    <Toaster></Toaster>
  </AuthProvider>
)
