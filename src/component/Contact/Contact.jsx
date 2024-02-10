import React, { Component } from 'react'
import style from "./contact.module.css"
export default class Contact extends Component {
  render() {
    return (
      <div>
       <div className={style.title}>
       <h2 className='text-center pt-5 py-3'>CONATCT SECTION</h2>
        <div className="star d-flex my-3 justify-content-center">
          <div className={style.line}> </div>
          <i class="fa-solid fa-star"></i>
          <div className={style.line}> </div>
        </div>
       </div>

        <div className={`${style.container} `}>
            <form className='text-center d-flex flex-column pb-5 '>
              <input className={`py-2 ps-2 my-3 ${style.bordr}`} placeholder='userName' type='text' />
              <input  className={`py-2 ps-2 my-3 ${style.bordr}`} placeholder='userAge' type="number" />
              <input className={`py-2 ps-2 my-3 ${style.bordr}`} placeholder='userEmail' type="email"/>
              <input className={`py-2 ps-2 my-3 ${style.bordr}`} placeholder='userPassword' type="password" />
            </form>
        </div>
      </div>
    )
  }
}
