import React from 'react'
import {logo} from '../../../Assets/Svg/svg'
import FooterLink from './FooterLinks/FooterLink'
import s from "./Footer.module.scss"
import Copyright from './Copyright/Copyright'

function Footer() {
  return (
    <footer>
        <div className="container">
          <div className={s.footerDetail}>
            
            <FooterLink header={"المدونات"} links={["الأخبار","نصائح وحيل","التحديثات الجديدة","الفعاليات"]}/>
            <FooterLink header={"الموارد"} links={["الأسئلة الشائعة","البداية السريعة","الوثائق","دليل المستخدم"]}/>
            <FooterLink header={"المنتجات"} links={["أصول الأيقونات","الكتل المتجاوبة","مكتبة المكونات"]}/>
            <FooterLink header={"pizzaplanet"} links={["الرئيسية","من نحن","التسعير","الميزات"]}/>
            <div className={s.FooterContact}>
              <div className="Logo">
                <img src={logo} alt="A logo of Pizza" />
                </div>
                <p>موثوق في أكثر من 100 دولة و5 مليون عميل. لديك أي استفسار؟</p>
                <a href='#' alt="link for contact us"> اتصل بنا </a>
            </div>
          </div>
          <Copyright/>
        </div>
    </footer>
  )
}

export default Footer