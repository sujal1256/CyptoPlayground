import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Body from './components/Body'
import Navbar from './components/Navbar'
import Prices from './components/Prices'
import React from 'react'
import ReactDOM from 'react-dom/client'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'

function App() {
  return <>
    <Navbar />
    <Outlet />
  </>
}

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <Error />,
    children :[
      {
      path:"/",
      element:<Body/>,
      },
      {
        path: "/prices",
        element: <Prices />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      }
    ]
  },
  
])

let r= ReactDOM.createRoot(document.getElementById("root"))

r.render(<RouterProvider router={approuter}/>)
export default App
