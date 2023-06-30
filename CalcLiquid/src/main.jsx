import React from 'react'
import ReactDOM from 'react-dom/client'


import{   RouterProvider } from 'react-router-dom'
import { MainRoute } from './assets/MainRoute/MainRoute'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={MainRoute} />
  </React.StrictMode>,
)
