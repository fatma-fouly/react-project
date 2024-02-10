import React, { Component } from 'react'
import style from "./footer.module.css" 
export default class Footer extends Component {
  render() {
    return (
      <div className={style.decor}>
       <div className="container">
        <div className="row py-5">
            <div className="col-md-4">
                <div className="sec text-center my-4">
                    <h3 className='py-2'>LOCATION</h3>
                    <h6 className='py-2'>2215 John Daniel Drive</h6>
                    <p>Clark, MO 65243</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="sec text-center my-4">
                    <h3 className='py-2'>AROUND THE WEB</h3>
                    <ul className={style.sociaLink} >
                        <li><i class="fa-brands fa-facebook"></i></li>
                        <li><i class="fa-brands fa-twitter"></i></li>
                        <li><i class="fa-brands fa-linkedin"></i></li>
                        <li><i class="fa-solid fa-globe"></i></li>
                    </ul>
                </div>
            </div>
            <div className="col-md-4">
                <div className="sec text-center my-4">
                    <h3 className='py-2'>ABOUT FREELANCER</h3>
                    
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
            </div>
        </div>
       </div>
       <div className={style.copyRight}>
       <p className='text-center py-4'>Copyright © Your Website 2021</p>
       </div>
      </div>
    )
  }
}
