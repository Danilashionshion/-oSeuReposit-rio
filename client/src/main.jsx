import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './Login.jsx'
import './index.css'
import ErrorMen from './Error.jsx'
import CreateAccount from "./CreateAccount.jsx"
import Doeagora from './doeagora.jsx'
//configuration
import{ createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorMen />
  },
  {
    path: "/Login",
    element: <Login />
  },
  {
    path: "/Account-Create",
    element: <CreateAccount />
  },
  {
    path: "/Doe-agora",
    element: <Doeagora />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
