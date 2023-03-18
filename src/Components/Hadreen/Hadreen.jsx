import React from 'react';
import style from "./Hadreen.module.css";
import img from "../../Image/HadreeImage.png";


export default function Hadreen() {
  return (
    <div className={`${style.hadren}`}>
      <div className="container">
        <div className="item text-center position-relative">
            <img className='img-fluid' src={img} alt="img" />
            <i className={`fa-solid fa-play ${style.play}`}></i>
        </div>
      </div>
    </div>
  )
}
