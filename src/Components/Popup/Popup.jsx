import React from 'react';
import style from "./Popup.module.css";

export default function Popup() {
  return (
    <div className={`${style.pop}`}>
      <div className={`${style.up}`}>
        <p>يهدف برنامج تجسير لابتكار حلول مساعدة للأسر المنتجة لتمكينها من تحول أنشطتها إلى منشآت مستدامة وذلك بدعم حصولها على الحلول التمويلية ودعم مساهمتها في تنمية الاقتصاد المحلي وخلق فرص تسويقية للمشاريع المميزة منها محليًا ودوليًا</p>
        <i className={`fa-solid fa-arrow-left-long ${style.arrow}`}></i>
      </div>
      <div className={`${style.mybtn}`}>
      <i className={`fa-solid fa-circle-arrow-left ${style.arrow2}`}></i>
      عرض المزيد
      </div>
    </div>
  )
}
