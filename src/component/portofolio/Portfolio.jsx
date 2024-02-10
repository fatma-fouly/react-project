import React, { useState } from 'react';
import style from "./portfolio.module.css";
import img1 from "../../assets/images/poert1.png";
import img2 from "../../assets/images/port2.png";
import img3 from"../../assets/images/port3.png" ;
import img4 from "../../assets/images/poert1.png";
import img5 from "../../assets/images/port2.png";
import img6 from"../../assets/images/port3.png" ;
// const imgs = [img1,img2,img3,img4,img5,img6];

// const App =() => {
//   const [show , setShow] = useState(false);
//   return({
  
//   })
// }

export default function 
  render() {
    return (
      <div>
        <div className="container py-4">
         <div className={style.title}>
         <h1 className='text-center fw-bold py-2'>PORTFOLIO COMPONENT</h1>
         <div className="star d-flex my-3 justify-content-center">
          <div className={style.line}> </div>
          <i class="fa-solid fa-star"></i>
          <div className={style.line}> </div>
        </div>
         </div>
         <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <div className="sec">
              <div className="image w-100 position-relative">
             <img className={`w-100 ${style.imgBordr}`} src={img1} />
             <div id='layr' className={`${style.layer}`}><i class="fa-solid fa-plus"></i></div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="sec">
              <div className="image w-100 position-relative">
             <img className={`w-100 ${style.imgBordr}`} src={img2} />
             <div id='layr' className={`${style.layer}`}><i class="fa-solid fa-plus"></i></div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="sec">
              <div className="image w-100 position-relative">
             <img className={`w-100 ${style.imgBordr}`} src={img3} />
             <div id='layr' className={`${style.layer}`}><i class="fa-solid fa-plus"></i></div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="sec">
              <div className="image w-100 position-relative">
             <img className={`w-100 ${style.imgBordr}`} src={img4} />
             <div id='layr' className={`${style.layer}`}><i class="fa-solid fa-plus"></i></div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="sec">
              <div className="image w-100 position-relative">
             <img className={`w-100 ${style.imgBordr}`} src={img5} />
             <div id='layr' className={`${style.layer}`}><i class="fa-solid fa-plus"></i></div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="sec">
              <div className="image w-100 position-relative">
             <img className={`w-100 ${style.imgBordr}`} src={img6} />
             <div id='layr' className={`${style.layer}`}><i class="fa-solid fa-plus"></i></div>
              </div>
            </div>
          </div>
        
         </div>
        </div>
      </div>
    )
  }




