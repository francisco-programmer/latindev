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
import Talent from './components/dashboard/Talent';
import ErrorPage from './pages/ErrorPage';
import Companies from './components/dashboard/Companies';
import Jobs from './components/dashboard/Jobs';
import Profile from './components/dashboard/Profile';
import Setting from './components/dashboard/Setting';
import Help from './components/dashboard/Help';

const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
      {
        path: "dashboard",
        element: <Dashboard />,
        
        children:[
          { index: true, element: <Talent /> },
          {
            path: "talent",
            element: <Talent />
          },
          {
            path: "companies",
            element: <Companies />
          },
          {
            path: "jobs",
            element: <Jobs />
          },
          {
            path: "profile",
            element: <Profile />
          }, 
          {
            path: "setting",
            element: <Setting />
          },
          {
            path: "help",
            element: <Help />
          },
        ]
        
      },
     

    

  
  
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  
    <LangProvider>    
    <RouterProvider router={router} />
    </LangProvider>
    
    

  </React.StrictMode>
)
