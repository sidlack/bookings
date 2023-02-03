import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'

import Bookings from './screens/account/Bookings'
import Details from './screens/account/Details'
import Flights from './screens/Flights'
import Hotels from './screens/Hotels'

const router = createBrowserRouter([
  { path: "/", element: <App />, },
  { path: "/flights", element: <Flights />, },
  { path: "/hotels", element: <Hotels />, },
  { path: "/account/details", element: <Details />, },
  { path: "/account/bookings", element: <Bookings />, },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)