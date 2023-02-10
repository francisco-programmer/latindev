import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { LangProvider } from './components/context/LanguageContext';
import Dashboard from './pages/Dashboard';

const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LangProvider>
    <RouterProvider router={router} />
    </LangProvider>
  </React.StrictMode>,
)
