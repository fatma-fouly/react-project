import React, { Component } from 'react'
import Navbar from './component/Navbar/Navbar'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MasterLayout from './component/masterLayout/MasterLayout'
import Start from './component/Start/Start'
import About from './component/About/About'
import Portfolio from './component/portofolio/Portfolio'
import Contact from './component/Contact/Contact'
import Notfound from './component/NotFound/Notfound'

const routr = createBrowserRouter([
  {   path:'' , element:<MasterLayout/>, children: [
    {path:'' ,element:<Start/>},
    {path:'start' , element:<Start/>},
    {path:'about', element:<About/>},
    {path:'portfolio' , element:<Portfolio/>},
    {path:'contact' ,element: <Contact/>},
    ] 
    , errorElement:<Notfound/> }
])

 

export default class App extends Component {
  render() {
    return (
      <div>
    <RouterProvider router={routr} />
      </div>
    )
  }
}
