import React from 'react';
import style from "./Bridge.module.css";

export default function Bridge() {
  return (
    <div>
      <div className='container my-5'>
            <h4 className='float-end'>جسر المستفيد</h4>
            <div className="clearfix"></div>
            <p className='float-end text-muted mb-5'>يعبر هذا النص العربي عن نص وهمي سيتم اضافة نص حقيقي قريباً</p>
            <div className="clearfix"></div>
            <div className="d-flex mb-5 justify-content-center align-items-center position-relative">
                <div className={`${style.cycle} d-flex flex-wrap w-100`}>
                    <div className={`one ${style.cy}`}>تصدير</div>
                    <div className={`one ${style.cy}`}>تطوير الاعمال</div>
                    <div className={`one ${style.cy}`}>تمويل</div>
                    <div className={`one ${style.cy}`}>جلسات الاستشارية </div>
                    <div className={`one ${style.cy}`}>دراسة الجدوى</div>
                    <div className={`one ${style.cy}`}>التدريب</div>
                    <div className={`one ${style.cy}`}>القبول</div>
                    <div className={`me-0 ${style.cy}`}>التسجيل</div>
                </div>
                <div className={`${style.hr} bg-primary`}></div>
            </div>
            <div className={`${style.shape} w-100`}>
                <div className={`${style.left}`}>
                    <div className="leftrec">
                        <div className={`${style.threerec}`}></div>
                        <div className={`${style.fourrec}`}></div>
                    </div>
                    <div className="rightrec">
                        <div className={`${style.onerec}`}></div>
                        <div className={`${style.towrec}`}></div>
                    </div>
                </div>
                <div className={`${style.center}`}>
                    <p>في هذه المرحلة نسعى لاستقطاب الاسر المنتجة ذو الكفاءة و الرغبة للانتقال الى مشاريع صغيرة مستدامة</p>
                </div>
                <div className={`${style.right}`}>01</div>
            </div>
        </div>
    </div>
  )
}
