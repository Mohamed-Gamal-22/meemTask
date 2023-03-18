import React from 'react';
import style from "./serv.module.css";
import image1 from "../../Image/image 2.png";
import image2 from "../../Image/image 3.png";
import image3 from "../../Image/image 7.png";
import image4 from "../../Image/image 9.png";
import image5 from "../../Image/muslim-two-asian-woman-freelancer-sme-business-online-shopping-working-checklist-order-with-cardboard-box-table-home-business-online-shipping-delivery-concept 7.png";

export default function Serve() {
  return (
    <div className="all w-100">
        <div className='container'>
            <h4 className='float-end'>خدماتنا</h4>
            <div className="clearfix"></div>
            <p className='float-end text-muted'>يعبر هذا النص العربي عن نص وهمي سيتم اضافة نص حقيقي قريباً</p>
            <div className="clearfix"></div>
        </div>
        <div className="images d-flex position-relative">
            <img className={`img-fluid ${style.img1}`} src={image1} alt="image1"/>
            <img className={`img-fluid ${style.img2}`} src={image2} alt="image2"/>
            <img className={`img-fluid ${style.img3}`} src={image3} alt="image3"/>
            <img className={`img-fluid ${style.img4}`} src={image4} alt="image4"/>
            <img className={`img-fluid ${style.img5}`} src={image5} alt="image5"/>
            <div className={style.over1}><span>التمويل</span></div>
            <div className={style.over2}>
                <span>الجلسات الاستشارية</span>
                </div>
            <div className={style.over3}>
                <span> دراسة الجدوى</span>
            </div>
            <div className={style.over4}>
                <span>تطوير الأعمال</span>
            </div>
            <div className={style.over5}>
                <div className={`${style.cont} text-end text-white`}>
                    <h4>التدريب</h4>
                    <div className="clearfix"></div>
                    <p className='w-75 float-end'>برامج تدريبية وتأهيلية لتنمية المهارات المعرفية لأصحاب المشاريع المتناهية الصغر</p>
                    <div className="clearfix"></div>
                    <div><i className="fa-solid fa-circle-arrow-left mx-1"></i>عرض المزيد</div>
                </div>
            </div>
      </div>
    </div>
  )
}
