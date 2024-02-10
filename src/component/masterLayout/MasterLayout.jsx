import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'

export default class MasterLayout extends Component {
  render() {
    return (
 <div>
  
    <Navbar/>
    <Outlet/>
    <Footer/>

 </div>
    )
  }
}
