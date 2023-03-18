import React from 'react';
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={`mt-5 ${style.footer}`}>
      <div className="container">
        <div className={`${style.up} d-flex flex-wrap align-items-center`}>
            <div className={`${style.icons}`}>
            <i className={`${style.i} fa-brands fa-facebook`}></i>
            <i className={`${style.i} fa-brands fa-twitter`}></i>
            <i className={`${style.i} fa-brands fa-instagram`}></i>
            <i className={`${style.i} fa-brands fa-youtube`}></i>
            <i className={`${style.i} fa-brands fa-linkedin`}></i>
            </div>
            <div className={`${style.shape}`}>
            <i className={`${style.i} fa-solid fa-spaghetti-monster-flying`}></i>
            </div>
            <div className={`${style.contact} text-white`}>
                <span>إنضم إلينا </span>
                <span>الخدمات</span>
                <span>عن المنصة</span>
                <span>الرئيسية</span>
            </div>
        </div>
        <hr className={`${style.hr}`}/>
        <div className={`${style.down} text-center`}>
            <span className={`${style.span}`}>شروط الاستخدام</span>
            <span className={`${style.span}`}>سياسة الخصوصية</span>
        </div>
      </div>
    </footer>
  )
}
