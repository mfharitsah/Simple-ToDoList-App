import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import ToDoMain from './pages/ToDoMain.jsx';
import Welcome from './pages/Welcome.jsx';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Welcome />,
      },
      {
        path: "/to-do",
        element: <ToDoMain />
      }
    ]
  },
  {
    path: "/",
    element: <Navigate to="/home" />,
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
