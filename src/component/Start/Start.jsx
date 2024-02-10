import React, { Component } from 'react'
import style from "./Start.module.css"
import image from '../../assets/images/avataaars.svg'
export default class Start extends Component {
  render() {
    return (
      <div className={style.background}>
       <div className={`${style.background} container text-center py-3`}>
       <div className="imag w-50 m-auto">
        <img className="w-50" src={image} alt='Logo Image'/>
      
        <h1 className="text-white">START FRAMEWORK</h1>

        <div className="star d-flex text-white my-3 justify-content-center">
          <div className={style.line}> </div>
          <i class="fa-solid fa-star"></i>
          <div className={style.line}> </div>
        </div>

        <p className="text-white py-2"> Graphic Artist - Web Designer - Illustrator</p>
        </div>
       </div>
        </div>
    )
  }
}

 