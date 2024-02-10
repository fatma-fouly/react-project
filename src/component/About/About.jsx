import React, { Component } from 'react'
import style from "./About.module.css"
export default class About extends Component {
  render() {
    return (
      <div>
        <div className={`text-center py-5 ${style.background} text-white`}>
          <h1 className="fw-bold pt-5">ABOUT COMPONENT</h1>
          <div className="star d-flex text-white my-3 justify-content-center pb-3">
          <div className={style.line}> </div>
          <i class="fa-solid fa-star"></i>
          <div className={style.line}> </div>
        </div>
      <div className={style.container}>
      <div className="row py-5">
          <div className="col-md-6">
            <div className="sec">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="sec">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
    )
  }
}
