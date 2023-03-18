import React from 'react';
import style from "./Header.module.css";

export default function Header() {
  return (
  <div className="container">
  <div className="float-end">
    <ul className="list-unstyled">
      <li className="ms-auto">
        <div className={`${style.btnn}`}>عن تجسير</div>
        <div className="clearfix"></div>
        <p className={`${style.p}`}>تحويل الأسر المنتجة إلى منشآت تجارية مستدامة</p>
      </li>
    </ul>
  </div>
  <div className="clearfix"></div>
  </div>
  )
}
