import React, { Component } from 'react'
import {Link}  from 'react-router-dom'
import style from "./Navbar.module.css"
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className={`navbar navbar-expand-lg navbar-light  py-4 ${style.bgColor}`} >
          <div className="container">
      
            <Link className="navbar-brand text-light fs-3 fw-bold" to="start">START FRAMEWORK</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className=" navbar-nav ms-auto mt-2 mt-lg-0 text-light me-5 fw-bold">
               <li className={`${style.navItem}`}>
                  <Link className="nav-link text-light" to="about">ABOUT</Link>
               </li>
               <li className={style.navItem}>
                  <Link className="nav-link text-light " to="portfolio">PORTOFOLIO</Link>
               </li>
               <li className={style.navItem}>
                  <Link className="nav-link text-light " to="contact">CONTACT</Link>
               </li>
              </ul>
            
            </div>
          </div>
        </nav>
        
      </div>
    )
  }
}
